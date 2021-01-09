using System;
using BooksDealersAPI.FrontendModels;

namespace BooksDealersAPI.Services
{
    public interface IUserService
    {
        UserWithToken Register(UserRegisterData user);
        UserWithToken Login(UserLoginData user);
        UserWithToken RefreshToken(string token);
    }
}
