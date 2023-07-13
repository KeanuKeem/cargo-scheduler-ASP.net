import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ShipmentPage from "../components/page/ShipmentPage";
import CalendarPage from "../components/page/CalendarPage";
import HomePage from "../components/page/HomePage";
import NotFoundPage from "../components/page/NotFoundPage";
import Home from "../components/home/Home";
import LoginPage from "../components/page/LoginPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      { path: "/", element: <Home />},
      { path: "/not-found", element: <NotFoundPage /> },
      { path: "/login", element: <LoginPage />},
    ],
  },
  {
    path: "/scheduler",
    element: <App />,
    children: [
      { path: "/scheduler/calendar", element: <CalendarPage /> },
      { path: "/scheduler/shipment/:id", element: <ShipmentPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
