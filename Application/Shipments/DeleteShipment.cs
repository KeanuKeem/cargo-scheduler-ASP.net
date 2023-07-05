using Domain;
using MediatR;
using Persistence;

namespace Application.Shipments
{
    public class DeleteShipment
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var shipment = await _context.Shipments.FindAsync(request.Id);

                _context.Remove(shipment);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}