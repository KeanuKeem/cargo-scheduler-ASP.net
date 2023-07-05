import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import Calendar from "../calendar/Calendar";
import NavBar from "../layout/NavBar";
import Sidebar from "../layout/Sidebar";
import AddForm from "../shipment/AddForm";
import Modal from "../shipment/Modal";
import "./CalendarPage.css";
import axios from "axios";
import Shipment from "../shipment/Shipment";

export default function CalendarPage() {
  const { month, monthNum, year } = useAppSelector(
    (state) => state.calendar
  );
  const { isOpen } = useAppSelector((state) => state.modal);
  const isShipmentOpen = useAppSelector((state) => state.shipment.isOpen);

  const [shipments, setShipments] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/shipments/${year}/${monthNum}`)
      .then((response) => {
        setShipments(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, [month, year]);

  return (
    <>
      {isOpen && (
        <Modal>
          <AddForm />
        </Modal>
      )}
      <NavBar />
      <Sidebar />
      <div className="main">
        {!isShipmentOpen && <Calendar shipments={shipments} />}
        {isShipmentOpen && <Shipment />}
      </div>
    </>
  );
}
