using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Shipments
{
    public class ListOfShipments
    {
        public class Query : IRequest<Result<List<Shipment>>>
        {
            public string Month { get; set; }
            public string Year { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<List<Shipment>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Shipment>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var month = int.Parse(request.Month);

                var year = int.Parse(request.Year);

                return Result<List<Shipment>>.Success(await _context.Shipments
                    .Where(shipment => shipment.Date.Month == month && shipment.Date.Year == year)
                    .ToListAsync());
            }
        }
    }
}