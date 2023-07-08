import { useNavigate, useParams } from "react-router-dom";
import Shipment from "../shipment/Shipment";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import NotificationModal from "../shipment/items/NotificationModal";
import Main from "../layout/Main";
import { modalActions } from "../../store/modalSlice";
import { FormEvent } from "react";
import api from "../../api/api";

export default function ShipmentPage() {
  const id = useParams().id;
  const { isNotification } = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();
  const closeHandler = () => {
    dispatch(modalActions.notificationAction());
  };

  const navigate = useNavigate();

  const handleDelete = (e: FormEvent) => {
    e.preventDefault();
    api.Shipment.delete(id!);
    closeHandler();
    navigate("/calendar");
  };

  return (
    <>
      {isNotification && (
        <NotificationModal
          heading="Delete this shipment?"
          text="Are you sure you want to delete this shipment? 
          This data will be permanently removed, and cannot be undone."
          submitText="Delete"
          cancelText="Cancel"
          canceler={closeHandler}
          submitter={handleDelete}
        />
      )}
      <Main>
        <Shipment id={id} />
      </Main>
    </>
  );
}
