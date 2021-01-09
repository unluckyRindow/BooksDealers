using System;
namespace BooksDealersAPI.FrontendModels
{
    public class CommentViewModel
    {
        public int Id { get; set; }
        public int CommentAuthorId { get; set; }
        public string Text { get; set; }
        public DateTime CreationDate { get; set; }
        public int TradeId { get; set; }
    }
}
