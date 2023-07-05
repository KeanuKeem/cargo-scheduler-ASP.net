using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Shipments
{
    public class EditShipment
    {
        public class Command : IRequest
        {
            public Shipment Shipment { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var shipment = await _context.Shipments.FindAsync(request.Shipment.Id);

                _mapper.Map(request.Shipment, shipment);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}