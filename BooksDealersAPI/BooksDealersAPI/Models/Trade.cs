using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BooksDealersAPI.Models
{
    public class Trade
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
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
