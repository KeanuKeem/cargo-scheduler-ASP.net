import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import DropdownField from "../items/DropdownField";
import FormButton from "../items/FormButton";
import InputField from "../items/InputField";
import TextareaField from "../items/TextareaField";
import {
  ShipmentFormValues,
  ShipmentResponseValues,
} from "../../../model/shipment";
import api from "../../../api/api";
import { useAppDispatch } from "../../../store/hooks";
import { modalActions } from "../../../store/modalSlice";
import { calendarActions } from "../../../store/calendarSlice";
import HandlingForm from "./HandlingForm";

export default function AddForm() {
  const [freightType, setFreightType] = useState("Type");
  const [shipmentType, setShipmentType] = useState("Type");
  const [formData, setFormData] = useState(new ShipmentFormValues());
  const [errors, setErrors] = useState(new ShipmentResponseValues());
  const [isNext, setIsNext] = useState(false);

  const dispatch = useAppDispatch();
  const closeHandler = () => dispatch(modalActions.action());
  const refresh = () => dispatch(calendarActions.refreshCalendar());

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if ("checked" in event.target) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: "checked" in event.target,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (formData.date === "") formData.date = "1500-01-01";
    api.Shipment.create(formData)
      .then(() => {
        refresh();
        closeHandler();
      })
      .catch((err) => {
        setIsNext(false);
        setErrors(err);
        formData.date = "";
      });
  };

  const handleCancel = (event: FormEvent) => {
    event.preventDefault();
    closeHandler();
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      freightType: freightType,
      shipmentType: shipmentType,
    }));
  }, [freightType, shipmentType]);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "50%", margin: "0 auto", marginTop: "2rem" }}
    >
      {isNext && (
        <HandlingForm
          handleChange={handleChange}
          handleCancel={setIsNext}
          formData={formData}
          from="add"
        />
      )}
      {!isNext && (
        <>
          <p className="text-base font-semibold leading-7 text-gray-900 mb-1">
            Create your shipment:
          </p>
          <p
            className="text-base text-gray-900 mb-10"
            style={{ fontSize: ".9rem" }}
          >
            {"(*) Please fill out these sections."}
          </p>
          <InputField
            width="70%"
            name="*Shipment ID"
            id="ref"
            value={formData.ref}
            onChange={handleChange}
            type="text"
            error={errors.Ref}
          />
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <DropdownField
              option={freightType}
              setOption={setFreightType}
              options={["Import", "Export"]}
              name="*Freight Type"
              width="50%"
              error={errors.FreightType}
            />
            <DropdownField
              option={shipmentType}
              setOption={setShipmentType}
              options={["AIR", "FAK", "FCL", "LCL"]}
              name="*Shipment Type"
              width="50%"
              error={errors.ShipmentType}
            />
          </div>
          <InputField
            width="70%"
            name="*Departure / Arrival Date"
            id="date"
            min="2023-01-01"
            value={formData.date}
            onChange={handleChange}
            type="date"
            error={errors.Date[0]}
          />
          <InputField
            width="70%"
            name="*Departuring / Arriving Port"
            id="port"
            value={formData.port}
            onChange={handleChange}
            type="text"
            error={errors.Port}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            <InputField
              width="100%"
              name={formData.shipmentType === "AIR" ? "*Flight" : "*Vessel"}
              id="vessel"
              value={formData.vessel}
              onChange={handleChange}
              type="text"
              error={errors.Vessel}
            />
            {formData.shipmentType !== "AIR" && (
              <InputField
                width="100%"
                name="*Voyage"
                id="voyage"
                value={formData.voyage}
                onChange={handleChange}
                type="text"
                error={errors.Voyage}
              />
            )}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            <InputField
              width="100%"
              name="MBL"
              id="mbl"
              value={formData.mbl}
              onChange={handleChange}
              type="text"
            />
            <InputField
              width="100%"
              name="HBL"
              id="hbl"
              value={formData.hbl}
              onChange={handleChange}
              type="text"
            />
          </div>
          {formData.shipmentType !== "AIR" && (
            <InputField
              width="70%"
              name="*Container Number"
              id="container"
              value={formData.container}
              onChange={handleChange}
              type="text"
              error={errors.Container}
            />
          )}
          <InputField
            width="70%"
            name="Freight Handling Depot"
            id="depot"
            value={formData.depot}
            onChange={handleChange}
            type="text"
          />
          <TextareaField
            width="100%"
            name="Notes"
            id="note"
            value={formData.note}
            onChange={handleChange}
            rows={3}
          />
          <div
            style={{
              display: "flex",
              gap: "1rem",
              paddingTop: "4rem",
              paddingBottom: "4rem",
              float: "right",
            }}
          >
            <FormButton
              onClick={handleCancel}
              content="Cancel"
              style={{
                padding: ".5rem 1rem",
                borderRadius: ".3rem",
                backgroundColor: "#e7e7e7e8",
                color: "#000",
              }}
            />
            <FormButton
              onClick={(e: FormEvent) => {
                e.preventDefault();
                setIsNext(true);
              }}
              content="Next"
              style={{
                padding: ".5rem 1rem",
                borderRadius: ".3rem",
                backgroundColor: "#2b3de7e8",
                color: "#fff",
              }}
            />
          </div>
        </>
      )}
    </form>
  );
}
