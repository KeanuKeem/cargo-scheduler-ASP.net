using Domain;
using MediatR;
using Persistence;

namespace Application.Shipments
{
    public class DeleteShipment
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var shipment = await _context.Shipments.FindAsync(request.Id);

                if (shipment == null) return null;

                _context.Remove(shipment);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Deleting a shipment was unsuccessful.");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}