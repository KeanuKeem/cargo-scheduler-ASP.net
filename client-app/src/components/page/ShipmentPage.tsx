import { useParams } from "react-router-dom";
import NavBar from "../layout/NavBar";
import Sidebar from "../layout/Sidebar";
import Shipment from "../shipment/Shipment";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default function ShipmentPage() {
  const id = useParams().id;

  return (
    <Provider store={store}>
      <NavBar />
      <Sidebar />
      <div className="main">
        <Shipment id={id} />
      </div>
    </Provider>
  );
}
