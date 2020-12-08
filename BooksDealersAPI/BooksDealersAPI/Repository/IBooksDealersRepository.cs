﻿using System.Collections.Generic;
using System.Threading.Tasks;
using BooksDealersAPI.FrontendModels;
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
        bool Save();
        void AddUser(User user);
        User GetUserByLogin(string login);
    }
}