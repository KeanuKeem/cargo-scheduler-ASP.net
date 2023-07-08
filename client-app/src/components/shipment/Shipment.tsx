import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import api from "../../api/api";
import { ShipmentFormValues, ShipmentResponseValues } from "../../model/shipment";
import ShipmentHeader from "./items/ShipmentHeader";
import ShipmentBody from "./items/ShipmentBody";
import { Link, useNavigate } from "react-router-dom";
import exit from "../../assets/circle-xmark-regular.svg";
import left from "../../assets/circle-left.svg";

interface Props {
  id: string | undefined;
}

export default function Shipment({ id }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [shipment, setShipment] = useState(new ShipmentFormValues());
  const [freightType, setFreightType] = useState("");
  const [shipmentType, setShipmentType] = useState("");
  const [formData, setFormData] = useState(new ShipmentFormValues());
  const [errors, setErrors] = useState(new ShipmentResponseValues());

  const navigate = useNavigate();

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
    if (formData.date === "") formData.date = "1500-01-01";
    api.Shipment.edit(id!, formData)
    .then(() => navigate("/calendar"))
    .catch(err => {
      console.log(err.response.data.errors);
      
      setErrors(err.response.data.errors);
      if (err.response.data.errors.Date) formData.date = "";
    });
    
  };

  useEffect(() => {
    api.Shipment.getShipment(id!)
      .then((response) => {
        setShipment(response.data);
        setFormData(response.data);
      })
      .catch((err) => console.log());
  }, []);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      freightType: freightType,
      shipmentType: shipmentType,
    }));
  }, [freightType, shipmentType]);

  return (
    <div
      className="calendar"
      style={{ padding: "3rem", position: "relative", marginBottom: "3rem" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: ".5rem",
          margin: "-1rem 0 2rem 0",
        }}
      >
        {isEdit && (
          <img
            src={left}
            onClick={() => {
              setFormData(shipment);
              setIsEdit(false);
            }}
            alt="left"
            style={{ width: "1rem", cursor: "pointer" }}
          />
        )}
        <img
          src={exit}
          onClick={() => {
            setFormData(shipment);
            navigate("/calendar");
          }}
          alt="exit"
          style={{ width: "1rem", cursor: "pointer" }}
        />
      </div>

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
            errors={errors}
          />
        </>
      )}
    </div>
  );
}
