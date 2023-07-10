﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

#nullable disable

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20230710023823_Shipment")]
    partial class Shipment
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.8");

            modelBuilder.Entity("Domain.Shipment", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<bool>("Booking")
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("BookingDate")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Clearance")
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("ClearanceDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("Container")
                        .HasColumnType("TEXT");

                    b.Property<DateOnly>("Date")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Delivery")
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("DeliveryDate")
                        .HasColumnType("TEXT");

                    b.Property<bool>("DeliveryOrder")
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("DeliveryOrderDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("Depot")
                        .HasColumnType("TEXT");

                    b.Property<string>("FreightType")
                        .HasColumnType("TEXT");

                    b.Property<string>("Hbl")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Invoicing")
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("InvoicingDate")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsBooking")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsClearance")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsDelivery")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsDeliveryOrder")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsInvoicing")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsStorage")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Mbl")
                        .HasColumnType("TEXT");

                    b.Property<string>("Note")
                        .HasColumnType("TEXT");

                    b.Property<string>("Port")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ref")
                        .HasColumnType("TEXT");

                    b.Property<string>("ShipmentType")
                        .HasColumnType("TEXT");

                    b.Property<bool>("StorageEnd")
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("StorageEndDate")
                        .HasColumnType("TEXT");

                    b.Property<bool>("StorageStart")
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("StorageStartDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("Vessel")
                        .HasColumnType("TEXT");

                    b.Property<string>("Voyage")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Shipments");
                });
#pragma warning restore 612, 618
        }
    }
}
