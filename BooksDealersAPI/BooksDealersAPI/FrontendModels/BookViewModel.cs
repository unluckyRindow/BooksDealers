using System;
namespace BooksDealersAPI.FrontendModels
{
    public class BookViewModel
    {
        public int Id { get; set; }
        public int OwnerId { get; set; }
        public string Status { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Category { get; set; }
        public DateTime ReleaseDate { get; set; }
        public DateTime CreationDate { get; set; }
        public string Description { get; set; }
    }
}
