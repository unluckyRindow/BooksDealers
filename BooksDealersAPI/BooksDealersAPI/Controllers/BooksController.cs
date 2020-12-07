using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksDealersAPI.Models;
using BooksDealersAPI.Repository;
using BooksDealersAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace BooksDealersAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/books")]
    public class BooksController : Controller
    {
        private readonly IBookService _bookService;

        public BooksController(
                IBookService bookService
            )
        {
            _bookService = bookService;
        }

        [HttpGet]
        public  IActionResult Books()
        {
            return Ok(_bookService.GetAllBooks());
        }
    }
    
}
