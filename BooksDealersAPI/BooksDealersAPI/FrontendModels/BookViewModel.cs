﻿namespace BooksDealersAPI.FrontendModels
{
    public class BookViewModel
    {
        public int Id { get; set; }
        public UserData Owner { get; set; }
        public string Status { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Category { get; set; }
        public string ReleaseDate { get; set; }
        public string CreationDate { get; set; }
        public string Description { get; set; }
        public string Isbn { get; set; }
    }
}