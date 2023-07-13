using Application.Shipments;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ShipmentsController : BaseApiController
    {
        [HttpGet("{year}/{month}")]
        public async Task<IActionResult> GetShipments(string year, string month)
        {
            return HandleResult(await Mediator.Send(new ListOfShipments.Query { Year = year, Month = month }));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetShipment(Guid id)
        {
            return HandleResult(await Mediator.Send(new GetShipment.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateShipment(Shipment shipment)
        {
            return HandleResult(await Mediator.Send(new CreateShipment.Command { Shipment = shipment }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditShipment(Guid id, Shipment shipment)
        {
            shipment.Id = id;
            return HandleResult(await Mediator.Send(new EditShipment.Command {Shipment = shipment }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShipment(Guid id)
        {
            return Ok(await Mediator.Send(new DeleteShipment.Command { Id = id }));
        }
    }
}