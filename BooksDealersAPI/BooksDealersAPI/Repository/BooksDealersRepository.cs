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
            _context.Update(book);
        }

        public void DeleteBook(int id)
        {
            Book book = new Book() { Id = id };
            _context.Books.Attach(book);
            _context.Books.Remove(book);
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

        public User GetUserById(int id)
        {
            return _context.Users
                 .Where(x => x.Id == id)
                 .FirstOrDefault();
        }



        public IEnumerable<Trade> GetUserTrades(int id)
        {
            return _context.Trades
                .Where(x => x.InitiatiorId == id || x.TargetOwnerId == id)
                .ToList();
        }

        public void UpdateTrade(Trade trade)
        {
            _context.Update(trade);
        }

        public Trade GetTrade(int id)
        {
            return _context.Trades
                .Where(x => x.Id == id)
                .FirstOrDefault();
        }

        public void DeleteTrade(int id)
        {
            Trade trade = new Trade() { Id = id };
            _context.Trades.Attach(trade);
            _context.Trades.Remove(trade);
        }

        public void AddTrade(Trade trade)
        {
            _context.Trades.Add(trade);
        }



        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }

    }
}
