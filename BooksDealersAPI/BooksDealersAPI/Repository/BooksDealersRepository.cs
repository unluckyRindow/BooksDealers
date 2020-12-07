using System;
using System.Collections.Generic;
using BooksDealersAPI.Models;

namespace BooksDealersAPI.Repository
{
    public class BooksDealersRepository : IBooksDealersRepository
    {
        public BooksDealersRepository()
        {
            // inject context here in future
        }


        public IEnumerable<Book> GetAllBooks()
        {
            return new List<Book>
            {
                new Book {Id=1, Author="John Author1", CreationDate=DateTime.Now, Title="Title1"},
                new Book {Id=2, Author="John Author2", CreationDate=DateTime.Now, Title="Title2"},
                new Book {Id=3, Author="John Author3", CreationDate=DateTime.Now, Title="Title3"},
                new Book {Id=4, Author="John Author4", CreationDate=DateTime.Now, Title="Title4"},
            };
        }
    }
}
