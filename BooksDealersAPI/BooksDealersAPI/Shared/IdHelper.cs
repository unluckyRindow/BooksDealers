namespace BooksDealersAPI.Shared
{
    public static class IdHelper
    {
        private static int Id = 1;

        public static int GetNewUserId()
        {
            return ++Id;
        }

        public static int GetNewBookId()
        {
            return ++Id;
        }

        public static int GetNewTradeId()
        {
            return ++Id;
        }

        public static int GetNewCommentId()
        {
            return ++Id;
        }
    }
}