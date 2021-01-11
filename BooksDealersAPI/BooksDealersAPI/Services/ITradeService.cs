using System;
using System.Collections.Generic;
using BooksDealersAPI.FrontendModels;
using BooksDealersAPI.Models;

namespace BooksDealersAPI.Services
{
    public interface ITradeService
    {
        IEnumerable<TradeViewModel> GetUserTrades(int id);
        TradeViewModel GetTrade(int id);
        bool UpdateTrade(TradeViewModel trade);
        bool AddTrade(TradeAddModel trade);
        bool DeleteTrade(int id);
    }
}
