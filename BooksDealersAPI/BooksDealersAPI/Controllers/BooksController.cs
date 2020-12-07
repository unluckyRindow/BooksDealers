using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksDealersAPI.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace BooksDealersAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/books")]
    public class BooksController : Controller
    {
        private readonly IBooksDealersRepository _booksDealersRepository;

        public BooksController(
                IBooksDealersRepository booksDealersRepository
            )
        {
            _booksDealersRepository = booksDealersRepository;
        }

        [HttpGet]
        public IActionResult Books()
        {
            return Ok(_booksDealersRepository.GetAllBooks());
        }
    }
    
}
