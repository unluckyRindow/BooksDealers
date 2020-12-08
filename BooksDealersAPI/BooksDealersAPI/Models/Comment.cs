using System;

namespace BooksDealersAPI.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public User CommentAuthor { get; set; }
        public string Text { get; set; }
        public DateTime CreationDate { get; set; }
        public Trade Trade { get; set; }
    }
}