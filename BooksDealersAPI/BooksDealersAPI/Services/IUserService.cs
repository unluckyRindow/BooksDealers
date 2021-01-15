using BooksDealersAPI.FrontendModels;
using BooksDealersAPI.Models;

namespace BooksDealersAPI.Services
{
    public interface IUserService
    {
        UserWithToken Register(UserRegisterData user);
        UserWithToken Login(UserLoginData user);
        UserWithToken RefreshToken(string token);
        UserCommonData GetUserData(int id);
    }
}