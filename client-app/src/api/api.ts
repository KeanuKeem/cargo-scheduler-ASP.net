import axios from "axios";
import { ShipmentFormValues } from "../model/shipment";

const url = "http://localhost:5000/api";

const Shipment = {
    getShipments: async (year: number, month: string) => await axios.get(url+`/shipments/${year}/${month}`),
    getShipment: async (id: string) => await axios.get(url+`/shipments/${id}`),
    create: async (shipment: ShipmentFormValues) => await axios.post(url+"/shipments", shipment),
    edit: async (id: string, shipment: ShipmentFormValues) => await axios.put(url+`/shipments/${id}`, shipment),
    delete: async (id: string) => await axios.delete(url+`/shipments/${id}`)
};

const api = {
    Shipment,
};

export default api;