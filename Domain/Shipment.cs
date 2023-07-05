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
    }
}