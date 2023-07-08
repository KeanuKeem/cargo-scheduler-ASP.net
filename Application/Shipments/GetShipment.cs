using Domain;
using MediatR;
using Persistence;

namespace Application.Shipments
{
    public class GetShipment
    {
        public class Query : IRequest<Result<Shipment>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Shipment>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Shipment>> Handle(Query request, CancellationToken cancellationToken)
            {
                var shipment = await _context.Shipments.FindAsync(request.Id);

                if (shipment == null) return null;

                return Result<Shipment>.Success(shipment);
            }
        }
    }
}