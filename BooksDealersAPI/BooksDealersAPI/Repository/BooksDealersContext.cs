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
        public DbSet<Comment> Comments { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>()
                .HasOne(b => b.Owner)
                .WithMany(o => o.UserBooks);

            modelBuilder.Entity<Trade>()
                .HasMany(t => t.Comments)
                .WithOne(c => c.Trade);
        }
    }
}
