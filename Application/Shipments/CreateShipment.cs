using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Shipments
{
    public class CreateShipment
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Shipment Shipment { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Shipment).SetValidator(new ShipmentValidator());
            }
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
                _context.Shipments.Add(request.Shipment);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Creating a shipment was unsuccessful.");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}