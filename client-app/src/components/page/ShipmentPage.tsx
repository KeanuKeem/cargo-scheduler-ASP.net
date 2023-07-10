import { useNavigate, useParams } from "react-router-dom";
import Shipment from "../shipment/Shipment";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import NotificationModal from "../shipment/items/NotificationModal";
import Main from "../layout/Main";
import { modalActions } from "../../store/modalSlice";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import api from "../../api/api";
import SidebarRight from "../layout/SidebarRight";
import Progress from "../shipment/items/Progress";
import { ShipmentFormValues } from "../../model/shipment";
import { shipmentActions } from "../../store/shipmentSlice";

export default function ShipmentPage() {
  const id = useParams().id;
  const [shipment, setShipment] = useState(new ShipmentFormValues());
  const [formData, setFormData] = useState(new ShipmentFormValues());
  const [isProgress, setIsProgress] = useState(false);
  const { isNotification } = useAppSelector((state) => state.modal);
  const { refresh } = useAppSelector((state) => state.shipment);

  const dispatch = useAppDispatch();
  const closeHandler = () => dispatch(modalActions.notificationAction());
  const refreshBack = () => dispatch(shipmentActions.RefreshBack());

  const navigate = useNavigate();

  const handleDelete = (e: FormEvent) => {
    e.preventDefault();
    api.Shipment.delete(id!);
    closeHandler();
    navigate("/shipment");
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox" && event.target instanceof HTMLInputElement) {
      if (event.target.checked) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: true,
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: false,
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    if (!refresh) {
      api.Shipment.getShipment(id!).then((response) => {
        setShipment(response.data);
        setFormData(response.data);
      });
    }
    refreshBack();
  }, [id, refresh]);

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
      {isProgress && (
        <SidebarRight>
          <Progress
            shipment={shipment}
            formData={formData}
            setFormData={setFormData}
            setIsProgress={setIsProgress}
            handleChange={handleChange}
          />
        </SidebarRight>
      )}
      <Main>
        <Shipment
          shipment={shipment}
          formData={formData}
          setFormData={setFormData}
          setIsProgress={setIsProgress}
          handleChange={handleChange}
        />
      </Main>
    </>
  );
}
