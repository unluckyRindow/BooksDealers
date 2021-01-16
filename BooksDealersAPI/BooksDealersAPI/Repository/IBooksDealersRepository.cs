using System.Collections.Generic;
using BooksDealersAPI.Models;

namespace BooksDealersAPI.Repository
{
    public interface IBooksDealersRepository
    {
        Book GetBook(int Id);
        IEnumerable<Book> GetAllBooks();
        IEnumerable<Book> GetAllBooksByOwner(int ownerId);
        void AddBook(Book book);
        void UpdateBook(Book book);
        void DeleteBook(int id);
        bool Save();
        void AddUser(User user);
        User GetUserByLogin(string login);
        User GetUserById(int id);
        IEnumerable<Trade> GetUserTrades(int id);
        void UpdateTrade(Trade trade);
        Trade GetTrade(int id);
        void DeleteTrade(int id);
        void AddTrade(Trade trade);
        void AddComment(Comment comment);
    }
}