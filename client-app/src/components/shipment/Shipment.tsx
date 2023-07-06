import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import api from "../../api/api";
import { ShipmentFormValues } from "../../model/shipment";
import ShipmentHeader from "./items/ShipmentHeader";
import ShipmentBody from "./items/ShipmentBody";
import { useAppDispatch } from "../../store/hooks";
import { calendarActions } from "../../store/calendarSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string | undefined;
}

export default function Shipment({ id }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [shipment, setShipment] = useState(new ShipmentFormValues());
  const [freightType, setFreightType] = useState("");
  const [shipmentType, setShipmentType] = useState("");
  const [formData, setFormData] = useState(new ShipmentFormValues());

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const refresh = () => dispatch(calendarActions.refreshCalendar());

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEdit = (event: FormEvent) => {
    event.preventDefault();
    api.Shipment.edit(id!, formData);
    refresh();
    navigate("/calendar");
  };

  useEffect(() => {
    api.Shipment.getShipment(id!)
      .then((response) => {
        setShipment(response.data);
        setFormData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      "freightType": freightType,
      "shipmentType": shipmentType,
    }));
  }, [freightType, shipmentType]);

  return (
    <div
      className="calendar"
      style={{ padding: "3rem", position: "relative", marginBottom: "3rem" }}
    >
      {shipment && (
        <>
          <ShipmentHeader
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setShipmentType={setShipmentType}
            setFreightType={setFreightType}
            shipment={shipment}
            setFormData={setFormData}
            handleEdit={handleEdit}
          />
          <ShipmentBody
            isEdit={isEdit}
            shipment={shipment}
            freightType={freightType}
            shipmentType={shipmentType}
            setShipmentType={setShipmentType}
            setFreightType={setFreightType}
            formData={formData}
            handleChange={handleChange}
          />
        </>
      )}
    </div>
  );
}
