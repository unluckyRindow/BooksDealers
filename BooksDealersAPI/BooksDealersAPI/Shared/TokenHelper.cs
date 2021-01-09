using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BooksDealersAPI.FrontendModels;
using Microsoft.IdentityModel.Tokens;

namespace BooksDealersAPI.Shared
{
    public class TokenHelper
    {
        public TokenHelper()
        {
        }

        public string CreateToken(int id, string name, string secretKey)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                 {
                     new Claim(ClaimTypes.Name, name),
                     new Claim(ClaimTypes.NameIdentifier, id.ToString())
                 }),
                Expires = DateTime.UtcNow.AddMinutes(30),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public string GetTokenData(string stringToken)
        {
            // TODO implement me
            return null;
        }
    }
}
