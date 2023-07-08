using Domain;
using FluentValidation;

namespace Application.Shipments
{
    public class ShipmentValidator : AbstractValidator<Shipment>
    {
        public ShipmentValidator()
        {
            List<string> freightValidation = new List<string> { "Import", "Export" };
            List<string> shipmentValidation = new List<string> { "AIR", "FAK", "FCL", "LCL" };

            RuleFor(s => s.Ref).NotEmpty();
            RuleFor(s => s.FreightType).Must(value => freightValidation.Contains(value)).WithMessage("Please select the correct option.");
            RuleFor(s => s.ShipmentType).Must(value => shipmentValidation.Contains(value)).WithMessage("Please select the correct option.");
            RuleFor(s => s.Date).Must(value => value != new DateOnly(1500, 1, 1)).WithMessage("Date must not be empty.");
            RuleFor(s => s.Date).Must(value => value >= new DateOnly(2023, 1, 1)).WithMessage("Date must be from 2023 and onwards.");
            RuleFor(s => s.Port).NotEmpty();
            RuleFor(s => s.Vessel).NotEmpty();
            RuleFor(s => s.Voyage).NotEmpty().When(value => value.ShipmentType != "AIR").WithMessage("Voyage must not be empty.");
            RuleFor(s => s.Container).Matches("^[A-Za-z]{4}[0-9]{7}$").WithMessage("Please enter valid container number.");
        }
    }
}