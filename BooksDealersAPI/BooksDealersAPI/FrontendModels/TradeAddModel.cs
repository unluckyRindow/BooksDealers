using System.Collections.Generic;

namespace BooksDealersAPI.FrontendModels
{
    public class TradeAddModel
    {
        public string Status { get; set; }
        public int Initiator { get; set; }
        public int InitiatorOffer { get; set; }
        public int TargetOwner { get; set; }
        public int Target { get; set; }
        public ICollection<CommentViewModel> Comments { get; set; }
    }
}