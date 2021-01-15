using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace BooksDealersAPI.Migrations
{
    public partial class BindingsRemoved : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                "FK_Trades_Users_InitiatiorId",
                "Trades");

            migrationBuilder.DropForeignKey(
                "FK_Trades_Books_TargetId",
                "Trades");

            migrationBuilder.DropIndex(
                "IX_Trades_InitiatiorId",
                "Trades");

            migrationBuilder.DropIndex(
                "IX_Trades_TargetId",
                "Trades");

            migrationBuilder.AlterColumn<int>(
                "TargetId",
                "Trades",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                "InitiatiorId",
                "Trades",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                "InitiatorOfferId",
                "Trades",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                "TargetOwnerId",
                "Trades",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                "TastUpdated",
                "Trades",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                "TreationDate",
                "Trades",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                "Comment",
                table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy",
                            NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CommentAuthorId = table.Column<int>(nullable: true),
                    Text = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    TradeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comment", x => x.Id);
                    table.ForeignKey(
                        "FK_Comment_Users_CommentAuthorId",
                        x => x.CommentAuthorId,
                        "Users",
                        "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        "FK_Comment_Trades_TradeId",
                        x => x.TradeId,
                        "Trades",
                        "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                "IX_Comment_CommentAuthorId",
                "Comment",
                "CommentAuthorId");

            migrationBuilder.CreateIndex(
                "IX_Comment_TradeId",
                "Comment",
                "TradeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                "Comment");

            migrationBuilder.DropColumn(
                "InitiatorOfferId",
                "Trades");

            migrationBuilder.DropColumn(
                "TargetOwnerId",
                "Trades");

            migrationBuilder.DropColumn(
                "TastUpdated",
                "Trades");

            migrationBuilder.DropColumn(
                "TreationDate",
                "Trades");

            migrationBuilder.AlterColumn<int>(
                "TargetId",
                "Trades",
                "integer",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                "InitiatiorId",
                "Trades",
                "integer",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateIndex(
                "IX_Trades_InitiatiorId",
                "Trades",
                "InitiatiorId");

            migrationBuilder.CreateIndex(
                "IX_Trades_TargetId",
                "Trades",
                "TargetId");

            migrationBuilder.AddForeignKey(
                "FK_Trades_Users_InitiatiorId",
                "Trades",
                "InitiatiorId",
                "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                "FK_Trades_Books_TargetId",
                "Trades",
                "TargetId",
                "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}