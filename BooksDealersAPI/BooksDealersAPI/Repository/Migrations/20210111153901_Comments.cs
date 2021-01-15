using Microsoft.EntityFrameworkCore.Migrations;

namespace BooksDealersAPI.Migrations
{
    public partial class Comments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                "FK_Comment_Users_CommentAuthorId",
                "Comment");

            migrationBuilder.DropForeignKey(
                "FK_Comment_Trades_TradeId",
                "Comment");

            migrationBuilder.DropPrimaryKey(
                "PK_Comment",
                "Comment");

            migrationBuilder.RenameTable(
                "Comment",
                newName: "Comments");

            migrationBuilder.RenameIndex(
                "IX_Comment_TradeId",
                table: "Comments",
                newName: "IX_Comments_TradeId");

            migrationBuilder.RenameIndex(
                "IX_Comment_CommentAuthorId",
                table: "Comments",
                newName: "IX_Comments_CommentAuthorId");

            migrationBuilder.AddPrimaryKey(
                "PK_Comments",
                "Comments",
                "Id");

            migrationBuilder.AddForeignKey(
                "FK_Comments_Users_CommentAuthorId",
                "Comments",
                "CommentAuthorId",
                "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                "FK_Comments_Trades_TradeId",
                "Comments",
                "TradeId",
                "Trades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                "FK_Comments_Users_CommentAuthorId",
                "Comments");

            migrationBuilder.DropForeignKey(
                "FK_Comments_Trades_TradeId",
                "Comments");

            migrationBuilder.DropPrimaryKey(
                "PK_Comments",
                "Comments");

            migrationBuilder.RenameTable(
                "Comments",
                newName: "Comment");

            migrationBuilder.RenameIndex(
                "IX_Comments_TradeId",
                table: "Comment",
                newName: "IX_Comment_TradeId");

            migrationBuilder.RenameIndex(
                "IX_Comments_CommentAuthorId",
                table: "Comment",
                newName: "IX_Comment_CommentAuthorId");

            migrationBuilder.AddPrimaryKey(
                "PK_Comment",
                "Comment",
                "Id");

            migrationBuilder.AddForeignKey(
                "FK_Comment_Users_CommentAuthorId",
                "Comment",
                "CommentAuthorId",
                "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                "FK_Comment_Trades_TradeId",
                "Comment",
                "TradeId",
                "Trades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}