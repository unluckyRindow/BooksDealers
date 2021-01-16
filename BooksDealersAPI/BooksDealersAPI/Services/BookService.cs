using System;
using System.Collections.Generic;
using BooksDealersAPI.FrontendModels;
using BooksDealersAPI.Models;
using BooksDealersAPI.Repository;

namespace BooksDealersAPI.Services
{
    public class BookService : IBookService
    {
        private readonly IBooksDealersRepository _booksDealersRepository;

        public BookService(IBooksDealersRepository booksDealersRepository)
        {
            _booksDealersRepository = booksDealersRepository;
        }

        public bool AddBook(BookAddModel bookAddModel)
        {
            var date = Convert.ToDateTime($"{bookAddModel.ReleaseDate}-01-01");
            var owner = _booksDealersRepository.GetUserById(bookAddModel.OwnerId);
            var book = new Book
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
            var book = mapViewBookToDbBookModel(bookViewModel);
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
            var owner = _booksDealersRepository.GetUserById(bookViewModel.Owner.Id);
            var releaseDate = Convert.ToDateTime($"{bookViewModel.ReleaseDate}-01-01");
            var creationDate = Convert.ToDateTime(bookViewModel.CreationDate);
            var book = new Book
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
            var userData = new UserData
            {
                Id = book.Owner.Id,
                Name = book.Owner.Name
            };
            var bookviewModel = new BookViewModel
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