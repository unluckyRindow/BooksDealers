using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BooksDealersAPI.Migrations
{
    public partial class TypoFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                "TastUpdated",
                "Trades");

            migrationBuilder.DropColumn(
                "TreationDate",
                "Trades");

            migrationBuilder.AddColumn<DateTime>(
                "CreationDate",
                "Trades",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                "LastUpdated",
                "Trades",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                "CreationDate",
                "Trades");

            migrationBuilder.DropColumn(
                "LastUpdated",
                "Trades");

            migrationBuilder.AddColumn<DateTime>(
                "TastUpdated",
                "Trades",
                "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                "TreationDate",
                "Trades",
                "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}