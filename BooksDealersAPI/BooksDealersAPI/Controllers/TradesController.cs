using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksDealersAPI.Services;
using Microsoft.AspNetCore.Mvc;


namespace BooksDealersAPI.Controllers
{
    [ApiController]
    [Route("api/trades")]
    public class TradesController : Controller
    {
        private readonly ITradeService _tradeService;


        public TradesController(
                ITradeService tradeService
            )
        {
            _tradeService = tradeService;
        }
        
    }
}
