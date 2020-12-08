using System;
using System.Collections.Generic;
using System.Linq;
using BooksDealersAPI.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BooksDealersAPI.Repository
{
    public class BooksDealersRepository : IBooksDealersRepository
    {
        private readonly BooksDealersContext _context;

        public BooksDealersRepository(BooksDealersContext context)
        {
            _context = context;
        }


        public Book GetBook(int Id)
        {
            return _context.Books
                .Include(x => x.Owner)
                .Where(x => x.Id == Id)
                .FirstOrDefault();
        }

        public IEnumerable<Book> GetAllBooks()
        {
            return _context.Books
                .Include(x => x.Owner)
                .OrderBy(x => x.Title)
                .ToList();

        }

        public IEnumerable<Book> GetAllBooksByOwner(int ownerId)
        {
            return _context.Books
                .Include(x => x.Owner)
                .Where(x => x.Owner.Id == ownerId)
                .OrderBy(x => x.Title)
                .ToList();
        }

        public void AddBook(Book book)
        {
            _context.Books.Add(book);
        }

        public void UpdateBook(Book book)
        {
            _context.Entry(book).State = EntityState.Modified;
        }



        public void AddUser(User user)
        {
            _context.Users.Add(user);
        }

        public User GetUserByLogin(string login)
        {
            return _context.Users
                 .Where(x => x.Login == login)
                 .FirstOrDefault();
        }



        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
