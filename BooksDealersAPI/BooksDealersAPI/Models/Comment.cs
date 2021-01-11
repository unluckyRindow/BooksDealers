using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BooksDealersAPI.Models
{
    public class Comment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public User CommentAuthor { get; set; }
        public string Text { get; set; }
        public DateTime CreationDate { get; set; }
        public Trade Trade { get; set; }
    }
}