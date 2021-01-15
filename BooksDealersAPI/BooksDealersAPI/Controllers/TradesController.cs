using BooksDealersAPI.FrontendModels;
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

        [HttpGet("user-trades/{id}")]
        public IActionResult UserTrades(int id)
        {
            var trades = _tradeService.GetUserTrades(id);
            if (trades == null) return NotFound();
            return Ok(trades);
        }

        [HttpGet("{id}")]
        public IActionResult Trade(int id)
        {
            var trade = _tradeService.GetTrade(id);
            if (trade == null) return NotFound();
            return Ok(trade);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTrade([FromBody] TradeViewModel trade, int id)
        {
            var updated = _tradeService.UpdateTrade(trade);
            if (updated) return NoContent();
            return NotFound();
        }

        [HttpPost]
        public IActionResult AddTrade([FromBody] TradeAddModel trade)
        {
            var created = _tradeService.AddTrade(trade);
            if (created) return Ok();
            return BadRequest();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTrade(int id)
        {
            var deleted = _tradeService.DeleteTrade(id);
            if (deleted) return Ok();
            return NotFound();
        }

        [HttpPost("comments")]
        public IActionResult AddComment([FromBody] CommentViewModel comment)
        {
            var created = _tradeService.AddComment(comment);
            if (created) return Ok();
            return BadRequest();
        }
    }
}