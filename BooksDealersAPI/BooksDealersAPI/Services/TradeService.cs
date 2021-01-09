using System;
using System.Collections.Generic;
using BooksDealersAPI.FrontendModels;
using BooksDealersAPI.Models;
using BooksDealersAPI.Repository;
using BooksDealersAPI.Shared;

namespace BooksDealersAPI.Services
{
    public class TradeService : ITradeService
    {
        private IBooksDealersRepository _booksDealersRepository;

        public TradeService(IBooksDealersRepository booksDealersRepository)
        {
            _booksDealersRepository = booksDealersRepository;
        }

        public bool AddTrade(TradeAddModel tradeAddModel)
        {
            Trade trade = new Trade()
            {
                Status = tradeAddModel.Status,
                InitiatiorId = tradeAddModel.Initiator,
                InitiatorOfferId = tradeAddModel.InitiatorOffer,
                TargetOwnerId = tradeAddModel.TargetOwner,
                TargetId = tradeAddModel.Target,
                LastUpdated = DateTime.Now,
                CreationDate = DateTime.Now,
                Comments = new List<Comment>(),
            };
            _booksDealersRepository.AddTrade(trade);
            return _booksDealersRepository.Save();
        }

        public bool DeleteTrade(int id)
        {
            _booksDealersRepository.DeleteTrade(id);
            return _booksDealersRepository.Save();
        }

        public Trade GetTrade(int id)
        {
            return _booksDealersRepository.GetTrade(id);
        }

        public IEnumerable<Trade> GetUserTrades(int id)
        {
            return _booksDealersRepository.GetUserTrades(id);
        }

        public bool UpdateTrade(TradeViewModel tradeViewModel)
        {
            DateTime creationDate = Convert.ToDateTime(tradeViewModel.CreationDate);
            Trade trade = new Trade()
            {
                Id = tradeViewModel.Id,
                Status = tradeViewModel.Status,
                InitiatiorId = tradeViewModel.Initiator,
                InitiatorOfferId = tradeViewModel.InitiatorOffer,
                TargetOwnerId = tradeViewModel.TargetOwner,
                TargetId = tradeViewModel.Target,
                LastUpdated = DateTime.Now,
                CreationDate = creationDate,
                Comments = new List<Comment>(),
            };
            _booksDealersRepository.UpdateTrade(trade);
            return _booksDealersRepository.Save();
        }
    }
}
