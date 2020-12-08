using System;
using System.Collections.Generic;
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

        public bool AddBook(Book book)
        {
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

        public bool UpdateBook(Book book, int id)
        {
            _booksDealersRepository.UpdateBook(book);
            return _booksDealersRepository.Save();
        }
    }
}
