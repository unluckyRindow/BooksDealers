using System;
using BooksDealersAPI.Repository;

namespace BooksDealersAPI.Services
{
    public class TradeService : ITradeService
    {
        private IBooksDealersRepository _booksDealersRepository;

        public TradeService(IBooksDealersRepository booksDealersRepository)
        {
            _booksDealersRepository = booksDealersRepository;
        }
    }
}
