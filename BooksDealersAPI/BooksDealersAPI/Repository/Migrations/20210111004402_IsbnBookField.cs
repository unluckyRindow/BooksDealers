using Microsoft.EntityFrameworkCore.Migrations;

namespace BooksDealersAPI.Migrations
{
    public partial class IsbnBookField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                "Isbn",
                "Books",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                "Isbn",
                "Books");
        }
    }
}