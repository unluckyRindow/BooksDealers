using System;
using System.Collections.Generic;
using BooksDealersAPI.Models;

namespace BooksDealersAPI.FrontendModels
{
    public class TradeViewModel
    {
        public int Id { get; set; }
        public string Status { get; set; }
        public string CreationDate { get; set; }
        public int Initiator { get; set; }
        public int InitiatorOffer { get; set; }
        public int TargetOwner { get; set; }
        public int Target { get; set; }
        public ICollection<CommentViewModel> Comments { get; set; }
    }
}
