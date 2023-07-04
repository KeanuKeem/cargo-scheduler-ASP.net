using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Shipments.Any()) return;

            var shipments = new List<Shipment>
            {
                new Shipment
                {
                    Ref = "S11111",
                    FreightType = "Import",
                    ShipmentType = "FCL",
                    Date = new DateOnly(2023, 7, 14),
                    Port = "POA",
                    Vessel = "NYK FUSHIMI",
                    Voyage = "111S",
                    Container = "CONT1111111",
                    Depot = "Tapper",
                    Note = ""
                },
                new Shipment
                {
                    Ref = "S22222",
                    FreightType = "Import",
                    ShipmentType = "LCL",
                    Date = new DateOnly(2023, 7, 14),
                    Port = "POA",
                    Vessel = "NYK FUSHIMI",
                    Voyage = "111S",
                    Container = "CONT2222222",
                    Depot = "Tapper",
                    Note = ""
                },
                new Shipment
                {
                    Ref = "S33333",
                    FreightType = "Import",
                    ShipmentType = "LCL",
                    Date = new DateOnly(2023, 7, 14),
                    Port = "POA",
                    Vessel = "NYK FUSHIMI",
                    Voyage = "111S",
                    Container = "CONT2222222",
                    Depot = "Tapper",
                    Note = ""
                },
                new Shipment
                {
                    Ref = "S44444",
                    FreightType = "Export",
                    ShipmentType = "FCL",
                    Date = new DateOnly(2023, 7, 25),
                    Port = "POA",
                    Vessel = "NYK FUTAGO",
                    Voyage = "192N",
                    Container = "CONT3333333",
                    Depot = "Tapper",
                    Note = ""
                },
            };

            await context.Shipments.AddRangeAsync(shipments);
            await context.SaveChangesAsync();
        }
    }
}