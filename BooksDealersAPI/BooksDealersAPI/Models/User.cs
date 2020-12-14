using System;
using System.Collections.Generic;

namespace BooksDealersAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

        public ICollection<Book> UserBooks { get; set; } = new List<Book>();
        public ICollection<Trade> UserTrades { get; set; } = new List<Trade>();
    }
}
