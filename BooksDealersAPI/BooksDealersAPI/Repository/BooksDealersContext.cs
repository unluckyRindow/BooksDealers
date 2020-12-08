using System;
using BooksDealersAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BooksDealersAPI.Repository
{
    public class BooksDealersContext : DbContext
    {
        public BooksDealersContext(DbContextOptions<BooksDealersContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Trade> Trades { get; set; }
    }
}
