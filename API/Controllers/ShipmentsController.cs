using Application.Shipments;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ShipmentsController : BaseApiController
    {
        [HttpGet("{year}/{month}")]
        public async Task<ActionResult<Dictionary<string, List<Shipment>>>> GetShipments(string year, string month)
        {
            return await Mediator.Send(new ListOfShipments.Query { Year = year, Month = month });
        }

        // [HttpGet("{id}")]
        // public async Task<ActionResult<Shipment>> GetShipment(Guid id)
        // {
        //     return await _context.Shipments.FindAsync(id);
        // }
    }
}