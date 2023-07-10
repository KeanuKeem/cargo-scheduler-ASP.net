using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Shipment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Booking",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateOnly>(
                name: "BookingDate",
                table: "Shipments",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.AddColumn<bool>(
                name: "Clearance",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateOnly>(
                name: "ClearanceDate",
                table: "Shipments",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.AddColumn<bool>(
                name: "Delivery",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateOnly>(
                name: "DeliveryDate",
                table: "Shipments",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.AddColumn<bool>(
                name: "DeliveryOrder",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateOnly>(
                name: "DeliveryOrderDate",
                table: "Shipments",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.AddColumn<bool>(
                name: "Invoicing",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateOnly>(
                name: "InvoicingDate",
                table: "Shipments",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.AddColumn<bool>(
                name: "IsBooking",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsClearance",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsDelivery",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeliveryOrder",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsInvoicing",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsStorage",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "StorageEnd",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateOnly>(
                name: "StorageEndDate",
                table: "Shipments",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.AddColumn<bool>(
                name: "StorageStart",
                table: "Shipments",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateOnly>(
                name: "StorageStartDate",
                table: "Shipments",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Booking",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "BookingDate",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "Clearance",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "ClearanceDate",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "Delivery",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "DeliveryDate",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "DeliveryOrder",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "DeliveryOrderDate",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "Invoicing",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "InvoicingDate",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "IsBooking",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "IsClearance",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "IsDelivery",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "IsDeliveryOrder",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "IsInvoicing",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "IsStorage",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "StorageEnd",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "StorageEndDate",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "StorageStart",
                table: "Shipments");

            migrationBuilder.DropColumn(
                name: "StorageStartDate",
                table: "Shipments");
        }
    }
}
