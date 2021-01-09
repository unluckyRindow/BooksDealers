using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BooksDealersAPI.Migrations
{
    public partial class TypoFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TastUpdated",
                table: "Trades");

            migrationBuilder.DropColumn(
                name: "TreationDate",
                table: "Trades");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreationDate",
                table: "Trades",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "LastUpdated",
                table: "Trades",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreationDate",
                table: "Trades");

            migrationBuilder.DropColumn(
                name: "LastUpdated",
                table: "Trades");

            migrationBuilder.AddColumn<DateTime>(
                name: "TastUpdated",
                table: "Trades",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "TreationDate",
                table: "Trades",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
