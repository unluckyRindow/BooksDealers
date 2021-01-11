﻿using System;
using System.Collections.Generic;
using System.Globalization;
using BooksDealersAPI.FrontendModels;
using BooksDealersAPI.Models;
using BooksDealersAPI.Repository;
using BooksDealersAPI.Shared;

namespace BooksDealersAPI.Services
{
    public class BookService : IBookService
    {
        private IBooksDealersRepository _booksDealersRepository;

        public BookService(IBooksDealersRepository booksDealersRepository)
        {
            _booksDealersRepository = booksDealersRepository;
        }

        public bool AddBook(BookAddModel bookAddModel)
        {
            DateTime date = Convert.ToDateTime($"{bookAddModel.ReleaseDate}-01-01");
            User owner = _booksDealersRepository.GetUserById(bookAddModel.OwnerId);
            Book book = new Book()
            {
                Owner = owner,
                Status = bookAddModel.Status,
                Title = bookAddModel.Title,
                Author = bookAddModel.Author,
                Category = bookAddModel.Category,
                ReleaseDate = date,
                CreationDate = DateTime.Now,
                Description = bookAddModel.Description,
                Isbn = bookAddModel.Isbn
            };
            _booksDealersRepository.AddBook(book);
            return _booksDealersRepository.Save();
        }

        public IEnumerable<Book> GetAllBooks()
        {
            return _booksDealersRepository.GetAllBooks();
        }

        public IEnumerable<Book> GetAllBooksByOwner(int ownerId)
        {
            return _booksDealersRepository.GetAllBooksByOwner(ownerId);
        }

        public Book GetBook(int Id)
        {
            return _booksDealersRepository.GetBook(Id);
        }

        public bool UpdateBook(BookViewModel bookViewModel)
        {
            Book book = mapViewBookToDbBookModel(bookViewModel);
            _booksDealersRepository.UpdateBook(book);
            return _booksDealersRepository.Save();
        }

        public bool DeleteBook(int id)
        {
            _booksDealersRepository.DeleteBook(id);
            return _booksDealersRepository.Save();
        }


        public Book mapViewBookToDbBookModel(BookViewModel bookViewModel)
        {
            User owner = _booksDealersRepository.GetUserById(bookViewModel.Owner.Id);
            DateTime releaseDate = Convert.ToDateTime($"{bookViewModel.ReleaseDate}-01-01");
            DateTime creationDate = Convert.ToDateTime(bookViewModel.CreationDate);
            Book book = new Book()
            {
                Id = bookViewModel.Id,
                Owner = owner,
                Status = bookViewModel.Status,
                Title = bookViewModel.Title,
                Author = bookViewModel.Author,
                Category = bookViewModel.Category,
                ReleaseDate = releaseDate,
                CreationDate = creationDate,
                Description = bookViewModel.Description,
                Isbn = bookViewModel.Isbn
            };
            return book;
        }

        public BookViewModel mapDbBookModelToViewBook(Book book)
        {
            UserData userData = new UserData()
            {
                Id = book.Owner.Id,
                Name = book.Owner.Name
            };
            BookViewModel bookviewModel = new BookViewModel()
            {
                Id = book.Id,
                Owner = userData,
                Status = book.Status,
                Title = book.Title,
                Author = book.Author,
                Category = book.Category,
                ReleaseDate = book.ReleaseDate.ToString(),
                CreationDate = book.CreationDate.ToString(),
                Description = book.Description,
                Isbn = book.Isbn
            };
            return bookviewModel;
        }
    }
}
