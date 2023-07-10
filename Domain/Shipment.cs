namespace Domain
{
    public class Shipment
    {
        public Guid Id { get; set; }
        public string Ref { get; set; }
        public string FreightType { get; set; }
        public string ShipmentType { get; set; }
        public DateOnly Date { get; set; }
        public string Port { get; set; }
        public string Vessel { get; set; }
        public string Voyage { get; set; }
        public string Mbl { get; set; }
        public string Hbl { get; set; }
        public string Container { get; set; }
        public string Depot { get; set; }
        public string Note { get; set; }
        public bool IsBooking { get; set; }
        public bool Booking { get; set; }
        public DateOnly BookingDate { get; set; }
        public bool IsInvoicing { get; set; }
        public bool Invoicing { get; set; }
        public DateOnly InvoicingDate { get; set; }
        public bool IsDeliveryOrder { get; set; }
        public bool DeliveryOrder { get; set; }
        public DateOnly DeliveryOrderDate { get; set; }
        public bool IsClearance { get; set; }
        public bool Clearance { get; set; }
        public DateOnly ClearanceDate { get; set; }
        public bool IsDelivery { get; set; }
        public bool Delivery { get; set; }
        public DateOnly DeliveryDate { get; set; }
        public bool IsStorage { get; set; }
        public bool StorageStart { get; set; }
        public bool StorageEnd { get; set; }
        public DateOnly StorageStartDate { get; set; }
        public DateOnly StorageEndDate { get; set; }
    }
}