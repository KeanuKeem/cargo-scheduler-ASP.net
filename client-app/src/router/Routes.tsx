import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ShipmentPage from "../components/page/ShipmentPage";
import CalendarPage from "../components/page/CalendarPage";
import HomePage from "../components/page/HomePage";
import NotFoundPage from "../components/page/NotFoundPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/calendar", element: <CalendarPage /> },
      { path: "/shipment/:id", element: <ShipmentPage /> },
      { path: "/not-found", element: <NotFoundPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
