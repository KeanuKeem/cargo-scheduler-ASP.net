using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Shipments
{
    public class EditShipment
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
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var shipment = await _context.Shipments.FindAsync(request.Shipment.Id);

                if (shipment == null) return null;

                _mapper.Map(request.Shipment, shipment);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Editing a shipment was unsuccessful.");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}