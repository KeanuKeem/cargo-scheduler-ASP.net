using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Shipments
{
    public class ListOfShipments
    {
        public class Query : IRequest<Dictionary<string, List<Shipment>>>
        {
            public string Month { get; set; }
            public string Year { get; set; }
        }

        public class Handler : IRequestHandler<Query, Dictionary<string, List<Shipment>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public static Dictionary<string, List<Shipment>> RearrangeData(List<Shipment> datas)
            {
                var newData = new Dictionary<string, List<Shipment>>();

                foreach (var shipment in datas)
                {
                    var date = shipment.Date.ToString("yyyy-MM-dd").Split("-")[2];

                    if (!newData.ContainsKey(date))
                    {
                        newData[date] = new List<Shipment>();
                    }

                    newData[date].Add(shipment);
                }

                return newData;
            }

            public async Task<Dictionary<string, List<Shipment>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var month = int.Parse(request.Month);
                var year = int.Parse(request.Year);
                var data = await _context.Shipments
                    .Where(shipment => shipment.Date.Month == month && shipment.Date.Year == year)
                    .ToListAsync();
                return RearrangeData(data);
            }
        }
    }
}