import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ShipmentPage from "../components/page/ShipmentPage";

export const routes: RouteObject[] = [
  {
    path: "/calendar",
    element: <App />
  },
  {
    path: "/shipment/:id",
    element: <ShipmentPage />
  }
];

export const router = createBrowserRouter(routes);
