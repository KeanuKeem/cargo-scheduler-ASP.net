using Application.Shipments;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ShipmentsController : BaseApiController
    {
        [HttpGet("{year}/{month}")]
        public async Task<ActionResult<List<Shipment>>> GetShipments(string year, string month)
        {
            return await Mediator.Send(new ListOfShipments.Query { Year = year, Month = month });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Shipment>> GetShipment(Guid id)
        {
            return await Mediator.Send(new GetShipment.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateShipment(Shipment shipment)
        {
            return Ok(await Mediator.Send(new CreateShipment.Command { Shipment = shipment }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditShipment(Guid id, Shipment shipment)
        {
            shipment.Id = id;
            return Ok(await Mediator.Send(new EditShipment.Command {Shipment = shipment }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShipment(Guid id)
        {
            return Ok(await Mediator.Send(new DeleteShipment.Command { Id = id }));
        }
    }
}