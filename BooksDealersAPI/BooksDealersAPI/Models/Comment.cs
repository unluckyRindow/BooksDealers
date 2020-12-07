using System;

namespace BooksDealersAPI.Models
{
    internal class Comment
    {
        public int Id { get; set; }
        public int CommentAuthor { get; set; }
        public string Text { get; set; }
        public DateTime CreationDate { get; set; }
    }
}