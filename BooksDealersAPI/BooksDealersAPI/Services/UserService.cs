using System;
using BooksDealersAPI.FrontendModels;
using BooksDealersAPI.Models;
using BooksDealersAPI.Repository;
using BooksDealersAPI.Shared;
using Microsoft.Extensions.Options;

namespace BooksDealersAPI.Services
{
    public class UserService : IUserService
    {
        private readonly IBooksDealersRepository _booksDealersRepository;
        private readonly JWTSettings _jwtSettings;
        private TokenHelper tokenHelper = new TokenHelper();

        public UserService(
            IBooksDealersRepository booksDealersRepository,
            IOptions<JWTSettings> jwtSettings
            )
        {
            _booksDealersRepository = booksDealersRepository;
            _jwtSettings = jwtSettings.Value;
        }


        public UserWithToken Login(UserLoginData user)
        {
            User foundUser = _booksDealersRepository.GetUserByLogin(user.Login);

            if(foundUser == null || foundUser.Password != user.Password)
            {
                return null;
            }

            UserWithToken userWithToken = new UserWithToken()
            {
                Id = foundUser.Id,
                Name = foundUser.Name,
            };

            userWithToken.Token = tokenHelper.CreateToken(foundUser.Id, foundUser.Name, _jwtSettings.SecretKey);

            return userWithToken;
        }

        public UserWithToken Register(UserRegisterData user)
        {
            User createdUser = new User()
            {
                Name = user.Name,
                Email = user.Email,
                Login = user.Login,
                Password = user.Password
            };

            _booksDealersRepository.AddUser(createdUser);
            _booksDealersRepository.Save();

            UserWithToken userWithToken = new UserWithToken()
            {
                Id = createdUser.Id,
                Name = createdUser.Name,
            };
            userWithToken.Token = tokenHelper.CreateToken(createdUser.Id, createdUser.Name, _jwtSettings.SecretKey);

            return userWithToken;
        }


        public UserWithToken RefreshToken(string token)
        {
            // TODO implement me
            var userData = tokenHelper.GetTokenData(token);
            return null;
        }
    }
}
