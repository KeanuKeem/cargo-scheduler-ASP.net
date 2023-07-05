using AutoMapper;
using Domain;

namespace Application.Map
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Shipment, Shipment>();
        }
    }
}