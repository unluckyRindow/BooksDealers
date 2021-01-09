using System;
using System.Collections.Generic;

namespace BooksDealersAPI.Models
{
    public class Trade
    {
        public int Id { get; set; }
        public string Status { get; set; }
        public int InitiatiorId { get; set; }
        public int InitiatorOfferId { get; set; }
        public int TargetOwnerId { get; set; }
        public int TargetId { get; set; }
        public DateTime LastUpdated { get; set; }
        public DateTime CreationDate { get; set; }
        public ICollection<Comment> Comments { get; set; } = new List<Comment>();

    }
}
