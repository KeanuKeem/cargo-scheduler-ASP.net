import axios from "axios";
import { ShipmentFormValues } from "../model/shipment";

const url = "http://localhost:5000/api";

const Shipment = {
    getShipments: (year: number, month: string) => axios.get(url+`/shipments/${year}/${month}`),
    getShipment: (id: string) => axios.get(url+`/shipments/${id}`),
    create: (shipment: ShipmentFormValues) => axios.post(url+"/shipments", shipment),
    edit: (id: string, shipment: ShipmentFormValues) => axios.put(url+`/shipments/${id}`, shipment),
};

const api = {
    Shipment,
};

export default api;