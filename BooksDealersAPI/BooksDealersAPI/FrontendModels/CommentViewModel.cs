namespace BooksDealersAPI.FrontendModels
{
    public class CommentViewModel
    {
        public int Id { get; set; }
        public UserData CommentAuthor { get; set; }
        public string Text { get; set; }
        public string CreationDate { get; set; }
        public int TradeId { get; set; }
    }
}