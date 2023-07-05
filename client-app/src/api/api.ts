import axios from "axios";
import { ShipmentFormValues } from "../model/shipment";

const url = "http://localhost:5000/api";

const Shipment = {
    getShipments: (year: number, month: string) => axios.get(url+`/shipments/${year}/${month}`),
    create: (shipment: ShipmentFormValues) => axios.post(url+"/shipments", shipment)
};

const api = {
    Shipment,
};

export default api;