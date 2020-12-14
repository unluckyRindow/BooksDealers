using System;
namespace BooksDealersAPI.Shared
{
    public static class IdHelper
    {
        private static int Id = 1;

        public static int GetNewId()
        {
            return ++Id;
        }
    }
}
