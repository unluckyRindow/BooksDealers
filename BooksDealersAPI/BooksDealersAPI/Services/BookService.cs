using System;
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
                Id = IdHelper.GetNewId(),
                Owner = owner,
                Status = bookAddModel.Status,
                Title = bookAddModel.Title,
                Author = bookAddModel.Author,
                Category = bookAddModel.Category,
                ReleaseDate = date,
                CreationDate = DateTime.Now,
                Description = bookAddModel.Description
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
            User owner = _booksDealersRepository.GetUserById(bookViewModel.OwnerId);
            Book book = new Book()
            {
                Id = bookViewModel.Id,
                Owner = owner,
                Status = bookViewModel.Status,
                Title = bookViewModel.Title,
                Author = bookViewModel.Author,
                Category = bookViewModel.Category,
                ReleaseDate = bookViewModel.ReleaseDate,
                CreationDate = bookViewModel.CreationDate,
                Description = bookViewModel.Description
            };
            _booksDealersRepository.UpdateBook(book);
            return _booksDealersRepository.Save();
        }

        public bool DeleteBook(int id)
        {
            _booksDealersRepository.DeleteBook(id);
            return _booksDealersRepository.Save();
        }
    }
}
