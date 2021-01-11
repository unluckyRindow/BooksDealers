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
        public string LastUpdated { get; set; }
        public UserData Initiator { get; set; }
        public BookViewModel InitiatorOffer { get; set; }
        public UserData TargetOwner { get; set; }
        public BookViewModel Target { get; set; }
        public ICollection<CommentViewModel> Comments { get; set; }
    }

    public class UserData
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
