using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class createShipment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Shipments",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Ref = table.Column<string>(type: "TEXT", nullable: true),
                    FreightType = table.Column<string>(type: "TEXT", nullable: true),
                    ShipmentType = table.Column<string>(type: "TEXT", nullable: true),
                    Date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    Port = table.Column<string>(type: "TEXT", nullable: true),
                    Vessel = table.Column<string>(type: "TEXT", nullable: true),
                    Voyage = table.Column<string>(type: "TEXT", nullable: true),
                    Container = table.Column<string>(type: "TEXT", nullable: true),
                    Depot = table.Column<string>(type: "TEXT", nullable: true),
                    Note = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shipments", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Shipments");
        }
    }
}
