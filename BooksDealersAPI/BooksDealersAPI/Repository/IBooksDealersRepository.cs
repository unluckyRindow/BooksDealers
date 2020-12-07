using System.Collections.Generic;
using BooksDealersAPI.Models;

namespace BooksDealersAPI.Repository
{
    public interface IBooksDealersRepository
    {
        IEnumerable<Book> GetAllBooks();
    }
}