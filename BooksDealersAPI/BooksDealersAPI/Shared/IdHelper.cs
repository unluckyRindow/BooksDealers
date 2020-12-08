using System;
namespace BooksDealersAPI.Shared
{
    public static class IdHelper
    {
        private static int Id = 1;

        public static int GetNewId()
        {
            Id += 1;
            return Id;
        }
    }
}
