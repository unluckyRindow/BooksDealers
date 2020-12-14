using System;
using System.Collections.Generic;
using BooksDealersAPI.FrontendModels;
using BooksDealersAPI.Models;
using BooksDealersAPI.Repository;

namespace BooksDealersAPI.Services
{
    public class BookService : IBookService
    {
        private IBooksDealersRepository _booksDealersRepository;

        public BookService(IBooksDealersRepository booksDealersRepository)
        {
            _booksDealersRepository = booksDealersRepository;
        }

        public bool AddBook(BookViewModel bookViewModel)
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
