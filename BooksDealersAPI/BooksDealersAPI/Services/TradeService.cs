using System;
using System.Collections.Generic;
using BooksDealersAPI.FrontendModels;
using BooksDealersAPI.Models;
using BooksDealersAPI.Repository;

namespace BooksDealersAPI.Services
{
    public class TradeService : ITradeService
    {
        private readonly IBooksDealersRepository _booksDealersRepository;
        private readonly IBookService _booksService;

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
            var trade = new Trade
            {
                Status = tradeAddModel.Status,
                InitiatiorId = tradeAddModel.Initiator,
                InitiatorOfferId = tradeAddModel.InitiatorOffer,
                TargetOwnerId = tradeAddModel.TargetOwner,
                TargetId = tradeAddModel.Target,
                LastUpdated = DateTime.Now,
                CreationDate = DateTime.Now,
                Comments = new List<Comment>()
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
            var trade = _booksDealersRepository.GetTrade(id);
            return mapDbTradeModelToViewTrade(trade);
        }

        public IEnumerable<TradeViewModel> GetUserTrades(int id)
        {
            var trades = (List<Trade>) _booksDealersRepository.GetUserTrades(id);
            var tradesView = new List<TradeViewModel>();

            trades.ForEach(x =>
            {
                var tradeViewModel = mapDbTradeModelToViewTrade(x);
                tradesView.Add(tradeViewModel);
            });

            return tradesView;
        }

        public bool UpdateTrade(TradeViewModel tradeViewModel)
        {
            var trade = mapViewTradeToDbTradeModel(tradeViewModel);
            _booksDealersRepository.UpdateTrade(trade);
            return _booksDealersRepository.Save();
        }

        public bool AddComment(CommentViewModel commentViewModel)
        {
            var comment = mapViewCommentToDbCommentModel(commentViewModel, true);
            _booksDealersRepository.AddComment(comment);
            return _booksDealersRepository.Save();
        }


        public TradeViewModel mapDbTradeModelToViewTrade(Trade trade)
        {
            var initiator = _booksDealersRepository.GetUserById(trade.InitiatiorId);
            var initiatorUserData = new UserData
            {
                Id = initiator.Id,
                Name = initiator.Name
            };
            var targetOwner = _booksDealersRepository.GetUserById(trade.TargetOwnerId);
            var targetOwnerUserData = new UserData
            {
                Id = targetOwner.Id,
                Name = targetOwner.Name
            };
            var offer = _booksService.mapDbBookModelToViewBook(_booksDealersRepository.GetBook(trade.InitiatorOfferId));
            var target = _booksService.mapDbBookModelToViewBook(_booksDealersRepository.GetBook(trade.TargetId));
            var comments = (List<Comment>) trade.Comments;
            var commentsViewModel = new List<CommentViewModel>();

            comments.ForEach(x => { commentsViewModel.Add(mapDbCommentModelToViewModel(x)); });

            var tradeViewModel = new TradeViewModel
            {
                Id = trade.Id,
                Status = trade.Status,
                CreationDate = trade.CreationDate.ToString(),
                LastUpdated = trade.LastUpdated.ToString(),
                Initiator = initiatorUserData,
                TargetOwner = targetOwnerUserData,
                InitiatorOffer = offer,
                Target = target,
                Comments = commentsViewModel
            };
            return tradeViewModel;
        }

        public Trade mapViewTradeToDbTradeModel(TradeViewModel tradeViewModel)
        {
            var creationDate = Convert.ToDateTime(tradeViewModel.CreationDate);
            var comments = new List<Comment>();
            var commentsViewModel = (List<CommentViewModel>) tradeViewModel.Comments;

            commentsViewModel.ForEach(x => { comments.Add(mapViewCommentToDbCommentModel(x, false)); });
            var trade = new Trade
            {
                Id = tradeViewModel.Id,
                Status = tradeViewModel.Status,
                InitiatiorId = tradeViewModel.Initiator.Id,
                InitiatorOfferId = tradeViewModel.InitiatorOffer.Id,
                TargetOwnerId = tradeViewModel.TargetOwner.Id,
                TargetId = tradeViewModel.Target.Id,
                LastUpdated = DateTime.Now,
                CreationDate = creationDate,
                Comments = comments
            };
            return trade;
        }

        public Comment mapViewCommentToDbCommentModel(CommentViewModel commentViewModel, bool creationMode)
        {
            var author = _booksDealersRepository.GetUserById(commentViewModel.CommentAuthor.Id);
            var creationDate = Convert.ToDateTime(commentViewModel.CreationDate);
            var trade = _booksDealersRepository.GetTrade(commentViewModel.TradeId);
            var comment = new Comment
            {
                CommentAuthor = author,
                Text = commentViewModel.Text,
                CreationDate = DateTime.Now,
                Trade = trade
            };
            if (!creationMode)
            {
                comment.Id = commentViewModel.Id;
                comment.CreationDate = creationDate;
            }

            return comment;
        }

        public CommentViewModel mapDbCommentModelToViewModel(Comment comment)
        {
            var authorData = new UserData
            {
                Id = comment.CommentAuthor.Id,
                Name = comment.CommentAuthor.Name
            };
            var commentViewModel = new CommentViewModel
            {
                Id = comment.Id,
                CommentAuthor = authorData,
                Text = comment.Text,
                CreationDate = comment.CreationDate.ToString(),
                TradeId = comment.Trade.Id
            };
            return commentViewModel;
        }
    }
}