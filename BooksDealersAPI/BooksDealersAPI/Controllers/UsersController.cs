using BooksDealersAPI.FrontendModels;
using BooksDealersAPI.Services;
using BooksDealersAPI.Shared;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace BooksDealersAPI.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private readonly JWTSettings _jwtSettings;
        private readonly IUserService _userService;

        public UsersController(
            IOptions<JWTSettings> jwtSettings,
            IUserService userService
        )
        {
            _jwtSettings = jwtSettings.Value;
            _userService = userService;
        }


        [HttpPost("login")]
        public ActionResult<UserWithToken> Login([FromBody] UserLoginData user)
        {
            var userWithToken = _userService.Login(user);

            if (userWithToken == null) return NotFound();

            return userWithToken;
        }

        [HttpPost("register")]
        public ActionResult<UserWithToken> Register([FromBody] UserRegisterData user)
        {
            var userWithToken = _userService.Register(user);

            if (userWithToken == null) return BadRequest();

            return userWithToken;
        }

        [Authorize]
        [HttpPost("refresh-token")]
        public ActionResult<UserWithToken> RefreshToken([FromBody] string token)
        {
            var userWithToken = _userService.RefreshToken(token);
            if (userWithToken == null) return NotFound();
            return userWithToken;
        }

        [Authorize]
        [HttpGet("{id}")]
        public ActionResult GetUserData(int id)
        {
            var userData = _userService.GetUserData(id);
            if (userData == null) return NotFound();
            return Ok(userData);
        }
    }
}