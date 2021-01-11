using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksDealersAPI.Services;
using Microsoft.AspNetCore.Mvc;
using BooksDealersAPI.FrontendModels;


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

        [HttpGet("user-trades/{id}")]
        public IActionResult UserTrades(int id)
        {
            IEnumerable<TradeViewModel> trades = _tradeService.GetUserTrades(id);
            if (trades == null)
            {
                return NotFound();
            }
            return Ok(trades);
        }

        [HttpGet("{id}")]
        public IActionResult Trade(int id)
        {
            TradeViewModel trade = _tradeService.GetTrade(id);
            if (trade == null)
            {
                return NotFound();
            }
            return Ok(trade);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTrade([FromBody] TradeViewModel trade, int id)
        {
            bool updated = _tradeService.UpdateTrade(trade);
            if (updated)
            {
                return NoContent();
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult AddTrade([FromBody] TradeAddModel trade)
        {
            bool created = _tradeService.AddTrade(trade);
            if (created)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTrade(int id)
        {
            bool deleted = _tradeService.DeleteTrade(id);
            if (deleted)
            {
                return Ok();
            }
            return NotFound();
        }

        [HttpPost("comments")]
        public IActionResult AddComment([FromBody] CommentViewModel comment)
        {
            bool created = _tradeService.AddComment(comment);
            if (created)
            {
                return Ok();
            }
            return BadRequest();
        }
        
    }
}
