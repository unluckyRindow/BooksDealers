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
        private IBookService _booksService;

        public TradeService(
            IBooksDealersRepository booksDealersRepository,
            IBookService bookService
            )
        {
            _booksDealersRepository = booksDealersRepository;
            _booksService = bookService;
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

        public TradeViewModel GetTrade(int id)
        {
            Trade trade = _booksDealersRepository.GetTrade(id);
            return mapDbTradeModelToViewTrade(trade);
        }

        public IEnumerable<TradeViewModel> GetUserTrades(int id)
        {
            List<Trade> trades = (List<Trade>)_booksDealersRepository.GetUserTrades(id);
            List<TradeViewModel> tradesView = new List<TradeViewModel>();

            trades.ForEach(x =>
            {
                TradeViewModel tradeViewModel = mapDbTradeModelToViewTrade(x);
                tradesView.Add(tradeViewModel);
            });

            return tradesView;
        }

        public bool UpdateTrade(TradeViewModel tradeViewModel)
        {
            Trade trade = mapViewTradeToDbTradeModel(tradeViewModel);   
            _booksDealersRepository.UpdateTrade(trade);
            return _booksDealersRepository.Save();
        }

        public TradeViewModel mapDbTradeModelToViewTrade(Trade trade)
        {
            User initiator = _booksDealersRepository.GetUserById(trade.InitiatiorId);
            UserData initiatorUserData = new UserData()
            {
                Id = initiator.Id,
                Name = initiator.Name,
            };
            User targetOwner = _booksDealersRepository.GetUserById(trade.TargetOwnerId);
            UserData targetOwnerUserData = new UserData()
            {
                Id = targetOwner.Id,
                Name = targetOwner.Name,
            };
            BookViewModel offer = _booksService.mapDbBookModelToViewBook(_booksDealersRepository.GetBook(trade.InitiatorOfferId));
            BookViewModel target = _booksService.mapDbBookModelToViewBook(_booksDealersRepository.GetBook(trade.TargetId));

            TradeViewModel tradeViewModel = new TradeViewModel()
            {
                Id = trade.Id,
                Status = trade.Status,
                CreationDate = trade.CreationDate.ToString(),
                LastUpdated = trade.LastUpdated.ToString(),
                Initiator = initiatorUserData,
                TargetOwner = targetOwnerUserData,
                InitiatorOffer = offer,
                Target = target,
                Comments = new List<CommentViewModel>(),
            };
            return tradeViewModel;
        }

        public Trade mapViewTradeToDbTradeModel(TradeViewModel tradeViewModel)
        {
            DateTime creationDate = Convert.ToDateTime(tradeViewModel.CreationDate);
            Trade trade = new Trade()
            {
                Id = tradeViewModel.Id,
                Status = tradeViewModel.Status,
                InitiatiorId = tradeViewModel.Initiator.Id,
                InitiatorOfferId = tradeViewModel.InitiatorOffer.Id,
                TargetOwnerId = tradeViewModel.TargetOwner.Id,
                TargetId = tradeViewModel.Target.Id,
                LastUpdated = DateTime.Now,
                CreationDate = creationDate,
                Comments = new List<Comment>(),
            };
            return trade;
        }
    }
}
