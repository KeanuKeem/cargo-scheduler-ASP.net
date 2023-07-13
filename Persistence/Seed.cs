using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<User>
                {
                    new User 
                    {
                        DisplayName = "Tester", 
                        Email = "tester@test.com",
                        UserName = "tester"
                    }
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

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
                    Mbl = "MBL0123456",
                    Hbl = "HBL0123456",
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
                    Mbl = "MBL0123456",
                    Hbl = "HBL0123456",
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
                    Mbl = "MBL0123456",
                    Hbl = "HBL0123456",
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
                    Mbl = "MBL0123456",
                    Hbl = "HBL0123456",
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