using System;
using System.Collections.Generic;
using BooksDealersAPI.Models;

namespace BooksDealersAPI.Services
{
    public interface IBookService
    {
        public IEnumerable<Book> GetAllBooks();
    }
}
