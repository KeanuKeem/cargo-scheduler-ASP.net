import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Calendar from "../calendar/Calendar";
import NavBar from "../layout/NavBar";
import Sidebar from "../layout/Sidebar";
import AddForm from "../shipment/AddForm";
import Modal from "../shipment/Modal";
import "./CalendarPage.css";
import { getGroupedShipments } from "../script/calendar";
import { calendarActions } from "../../store/calendarSlice";
import api from "../../api/api";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default function CalendarPage() {
  const { month, monthNum, year, refresh } = useAppSelector(
    (state) => state.calendar
  );
  const { isOpen } = useAppSelector((state) => state.modal);

  const [shipments, setShipments] = useState({});

  const dispatch = useAppDispatch();

  const refreshOrigin = () => dispatch(calendarActions.refreshBack());

  useEffect(() => {
    api.Shipment.getShipments(year, monthNum)
      .then((response) => {
        const grouptedShipment = getGroupedShipments(response.data);
        setShipments(grouptedShipment);
      })
      .catch((err) => console.log(err));
    refreshOrigin();
  }, [month, year, refresh]);

  return (
    <Provider store={store}>
      {isOpen && (
        <Modal>
          <AddForm />
        </Modal>
      )}
      <NavBar />
      <Sidebar />
      <div className="main">
        <Calendar shipments={shipments} />
      </div>
    </Provider>
  );
}
