using System;
using System.Collections.Generic;
using BooksDealersAPI.FrontendModels;
using BooksDealersAPI.Models;

namespace BooksDealersAPI.Services
{
    public interface IBookService
    {
        Book GetBook(int Id);
        IEnumerable<Book> GetAllBooks();
        IEnumerable<Book> GetAllBooksByOwner(int ownerId);
        bool AddBook(BookViewModel book);
        bool UpdateBook(BookViewModel books);
        bool DeleteBook(int id);
    }
}
