using System;
using BooksDealersAPI.Repository;

namespace BooksDealersAPI.Services
{
    public class UserService : IUserService
    {
        private IBooksDealersRepository _booksDealersRepository;


        public UserService(IBooksDealersRepository booksDealersRepository)
        {
            _booksDealersRepository = booksDealersRepository;
        }
    }
}
