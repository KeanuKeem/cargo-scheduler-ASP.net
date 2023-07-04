import { useAppSelector } from "../../store/hooks";
import Calendar from "../calendar/Calendar";
import NavBar from "../layout/NavBar";
import Sidebar from "../layout/Sidebar";
import AddForm from "../shipment/AddForm";
import Modal from "../shipment/Modal";
import "./CalendarPage.css";

export default function CalendarPage() {
  const { isOpen } = useAppSelector((state) => state.modal);

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
        <Calendar />
      </div>
    </>
  );
}
