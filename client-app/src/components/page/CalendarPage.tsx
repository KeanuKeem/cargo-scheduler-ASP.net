import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Calendar from "../calendar/Calendar";
import AddForm from "../shipment/AddForm";
import Modal from "../shipment/Modal";
import { getGroupedShipments } from "../script/calendar";
import { calendarActions } from "../../store/calendarSlice";
import api from "../../api/api";
import Main from "../layout/Main";

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
        const groupedShipment = getGroupedShipments(response.data);
        setShipments(groupedShipment);
      })
      .catch((err) => console.log(err));
    refreshOrigin();
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
