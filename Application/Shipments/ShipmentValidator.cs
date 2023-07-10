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
            RuleFor(s => s.Vessel).NotEmpty().When(value => value.ShipmentType == "AIR").WithMessage("Flight must not be empty.");
            RuleFor(s => s.Vessel).NotEmpty().When(value => value.ShipmentType != "AIR").WithMessage("Vessel must not be empty.");
            RuleFor(s => s.Voyage).NotEmpty().When(value => value.ShipmentType != "AIR").WithMessage("Voyage must not be empty.");
            RuleFor(s => s.Container).Matches("^[A-Za-z]{4}[0-9]{7}$").When(value => value.ShipmentType != "AIR").WithMessage("Please enter valid container number.");
            RuleFor(s => s.BookingDate).Must(value => value != new DateOnly(0001, 1, 1)).When(s => s.Booking == true).WithMessage("Booking progress date must not be empty.");
            RuleFor(s => s.BookingDate).Must(value => value >= new DateOnly(2023, 1, 1)).When(s => s.Booking == true).WithMessage("Booking progress date must be from 2023 and onwards.");
            RuleFor(s => s.InvoicingDate).Must(value => value != new DateOnly(0001, 1, 1)).When(s => s.Invoicing == true).WithMessage("Invoicing progress date must not be empty.");
            RuleFor(s => s.InvoicingDate).Must(value => value >= new DateOnly(2023, 1, 1)).When(s => s.Invoicing == true).WithMessage("Invoicing progress date must be from 2023 and onwards.");
            RuleFor(s => s.DeliveryOrderDate).Must(value => value != new DateOnly(0001, 1, 1)).When(s => s.DeliveryOrder == true).WithMessage("Delivery Order progress date must not be empty.");
            RuleFor(s => s.DeliveryOrderDate).Must(value => value >= new DateOnly(2023, 1, 1)).When(s => s.DeliveryOrder == true).WithMessage("Delivery Order progress date must be from 2023 and onwards.");
            RuleFor(s => s.ClearanceDate).Must(value => value != new DateOnly(0001, 1, 1)).When(s => s.Clearance == true).WithMessage("Customs Clearance progress date must not be empty.");
            RuleFor(s => s.ClearanceDate).Must(value => value >= new DateOnly(2023, 1, 1)).When(s => s.Clearance == true).WithMessage("Customs Clearance progress date must be from 2023 and onwards.");
            RuleFor(s => s.DeliveryDate).Must(value => value != new DateOnly(0001, 1, 1)).When(s => s.Delivery == true).WithMessage("Delivery progress date must not be empty.");
            RuleFor(s => s.DeliveryDate).Must(value => value >= new DateOnly(2023, 1, 1)).When(s => s.Delivery == true).WithMessage("Delivery progress date must be from 2023 and onwards.");
            RuleFor(s => s.StorageStartDate).Must(value => value != new DateOnly(0001, 1, 1)).When(s => s.StorageStart == true).WithMessage("Storage Start progress date must not be empty.");
            RuleFor(s => s.StorageStartDate).Must(value => value >= new DateOnly(2023, 1, 1)).When(s => s.StorageStart == true).WithMessage("Storage Start progress date must be from 2023 and onwards.");
            RuleFor(s => s.StorageEndDate).Must(value => value != new DateOnly(0001, 1, 1)).When(s => s.StorageEnd == true).WithMessage("Storage End progress date must not be empty.");
            RuleFor(s => s.StorageEndDate).Must(value => value >= new DateOnly(2023, 1, 1)).When(s => s.StorageEnd == true).WithMessage("Storage End progress date must be from 2023 and onwards.");
        }
    }
}
