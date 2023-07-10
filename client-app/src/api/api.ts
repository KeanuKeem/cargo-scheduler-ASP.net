import axios, { AxiosError, AxiosResponse } from "axios";
import { ShipmentFormValues, ShipmentResponseValues } from "../model/shipment";
import { router } from "../router/Routes";

const url = "http://localhost:5000/api";

axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status, config } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (config.method === "get") router.navigate("/not-found");
        if (data.errors) throw data.errors;
        break;
      case 404:
        router.navigate("/not-found");
    }
  }
);

const Shipment = {
  getShipments: async (year: number, month: string) =>
    await axios.get(url + `/shipments/${year}/${month}`),
  getShipment: async (id: string) => await axios.get(url + `/shipments/${id}`),
  create: async (shipment: ShipmentFormValues) =>
    await axios.post(url + "/shipments", shipment),
  edit: async (id: string, shipment: ShipmentFormValues) =>
    await axios.put(url + `/shipments/${id}`, shipment),
  delete: async (id: string) => await axios.delete(url + `/shipments/${id}`),
};

const api = {
  Shipment,
};

export default api;
