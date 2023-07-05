using Domain;
using MediatR;
using Persistence;

namespace Application.Shipments
{
    public class GetShipment
    {
        public class Query : IRequest<Shipment>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Shipment>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Shipment> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Shipments.FindAsync(request.Id);
            }
        }
    }
}