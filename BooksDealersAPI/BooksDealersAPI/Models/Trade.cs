using System;
using System.Collections.Generic;

namespace BooksDealersAPI.Models
{
    public class Trade
    {
        public int Id { get; set; }
        public string Status { get; set; }

        public int InitiatiorId { get; set; }
        public int InitiatorOffer { get; set; }

        public int TargetOwnerId { get; set; }
        public int TargetId { get; set; }

        ICollection<Comment> Comments = new List<Comment>();

    }
}
