using System;
using System.Collections.Generic;
using BooksDealersAPI.Models;

namespace BooksDealersAPI.Services
{
    public interface IBookService
    {
        Book GetBook(int Id);
        IEnumerable<Book> GetAllBooks();
        IEnumerable<Book> GetAllBooksByOwner(int ownerId);
        bool AddBook(Book book);
        bool UpdateBook(Book book, int id);
    }
}
