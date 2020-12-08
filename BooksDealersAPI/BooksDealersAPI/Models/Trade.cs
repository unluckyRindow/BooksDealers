using System;
using System.Collections.Generic;

namespace BooksDealersAPI.Models
{
    public class Trade
    {
        public int Id { get; set; }
        public string Status { get; set; }

        public User Initiatior { get; set; }
        //public Book InitiatorOffer { get; set; }

        //public User TargetOwner { get; set; }
        public Book Target { get; set; }

        ICollection<Comment> Comments { get; set; }

    }
}
