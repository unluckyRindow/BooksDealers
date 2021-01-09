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
                name: "FK_Trades_Users_InitiatiorId",
                table: "Trades");

            migrationBuilder.DropForeignKey(
                name: "FK_Trades_Books_TargetId",
                table: "Trades");

            migrationBuilder.DropIndex(
                name: "IX_Trades_InitiatiorId",
                table: "Trades");

            migrationBuilder.DropIndex(
                name: "IX_Trades_TargetId",
                table: "Trades");

            migrationBuilder.AlterColumn<int>(
                name: "TargetId",
                table: "Trades",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "InitiatiorId",
                table: "Trades",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "InitiatorOfferId",
                table: "Trades",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TargetOwnerId",
                table: "Trades",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "TastUpdated",
                table: "Trades",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "TreationDate",
                table: "Trades",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                name: "Comment",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CommentAuthorId = table.Column<int>(nullable: true),
                    Text = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    TradeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comment", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Comment_Users_CommentAuthorId",
                        column: x => x.CommentAuthorId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Comment_Trades_TradeId",
                        column: x => x.TradeId,
                        principalTable: "Trades",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Comment_CommentAuthorId",
                table: "Comment",
                column: "CommentAuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_Comment_TradeId",
                table: "Comment",
                column: "TradeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comment");

            migrationBuilder.DropColumn(
                name: "InitiatorOfferId",
                table: "Trades");

            migrationBuilder.DropColumn(
                name: "TargetOwnerId",
                table: "Trades");

            migrationBuilder.DropColumn(
                name: "TastUpdated",
                table: "Trades");

            migrationBuilder.DropColumn(
                name: "TreationDate",
                table: "Trades");

            migrationBuilder.AlterColumn<int>(
                name: "TargetId",
                table: "Trades",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "InitiatiorId",
                table: "Trades",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateIndex(
                name: "IX_Trades_InitiatiorId",
                table: "Trades",
                column: "InitiatiorId");

            migrationBuilder.CreateIndex(
                name: "IX_Trades_TargetId",
                table: "Trades",
                column: "TargetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Trades_Users_InitiatiorId",
                table: "Trades",
                column: "InitiatiorId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Trades_Books_TargetId",
                table: "Trades",
                column: "TargetId",
                principalTable: "Books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
