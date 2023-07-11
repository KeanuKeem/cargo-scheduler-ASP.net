import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Calendar from "../calendar/Calendar";
import AddForm from "../shipment/form/AddForm";
import Modal from "../shipment/Modal";
import { getGroupedShipments } from "../script/calendar";
import { calendarActions } from "../../store/calendarSlice";
import api from "../../api/api";
import Main from "../layout/Main";
import { shipmentActions } from "../../store/shipmentSlice";

export default function CalendarPage() {
  const { month, monthNum, year, refresh } = useAppSelector(
    (state) => state.calendar
  );
  const { isOpen } = useAppSelector((state) => state.modal);
  const { shipments } = useAppSelector((state) => state.shipment);

  const dispatch = useAppDispatch();
  const refreshOrigin = () => dispatch(calendarActions.refreshBack());
  const setShipments = (shipmentsObj: object) =>
    dispatch(shipmentActions.setShipments(shipmentsObj));

  // const [shipments, setShipments] = useState({});

  useEffect(() => {
    console.log("loaded");
    
    api.Shipment.getShipments(year, monthNum)
      .then((response) => {
        const groupedShipment = getGroupedShipments(response.data);
        setShipments(groupedShipment);
      })
      .catch((err) => console.log(err));
  }, [month, year, refresh, monthNum]);

  return (
    <>
      {isOpen && (
        <Modal>
          <AddForm />
        </Modal>
      )}
      <Main>
        <Calendar shipments={shipments} />
      </Main>
    </>
  );
}
