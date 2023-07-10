import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import {
  ShipmentFormValues,
  ShipmentResponseValues,
} from "../../../model/shipment";
import Input from "./Input";
import exit from "../../../assets/circle-xmark-regular.svg";
import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import {
  makeDateDefault,
} from "../../script/calendar";
import api from "../../../api/api";
import { useAppDispatch } from "../../../store/hooks";
import { shipmentActions } from "../../../store/shipmentSlice";

interface Props {
  shipment: ShipmentFormValues;
  formData: ShipmentFormValues;
  setFormData: (data: SetStateAction<ShipmentFormValues>) => void;
  setIsProgress: (event: SetStateAction<boolean>) => void;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function Progress({
  shipment,
  formData,
  setFormData,
  setIsProgress,
  handleChange,
}: Props) {
  const navigate = useNavigate();
  const [btnAvailable, setBtnAvailable] = useState(true);
  const [errors, setErrors] = useState(new ShipmentResponseValues());

  const dispatch = useAppDispatch();
  const refresh = () => dispatch(shipmentActions.doRefresh());

  const handleEdit = () => {
    makeDateDefault(formData);
    api.Shipment.edit(shipment.id!, formData)
      .then(() => {
        setIsProgress(false);
        refresh();
      })
      .catch((err) => {
        setErrors(err);
      });
  };

  useEffect(() => {
    if (
      formData.booking === shipment.booking &&
      formData.invoicing === shipment.invoicing &&
      formData.deliveryOrder === shipment.deliveryOrder &&
      formData.clearance === shipment.clearance &&
      formData.delivery === shipment.delivery &&
      formData.storageStart === shipment.storageStart &&
      formData.storageEnd === shipment.storageEnd
    ) {
      setBtnAvailable(true);
    } else {
      setBtnAvailable(false);
    }
  }, [formData, shipment]);

  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: ".5rem",
          marginTop: "1rem",
        }}
      >
        <img
          src={exit}
          onClick={() => {
            setFormData(shipment);
            setIsProgress(false);
          }}
          alt="exit"
          style={{ width: "1rem", cursor: "pointer" }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          gap: "1rem",
          alignItems: "center",
          width: "70%",
          margin: "0 auto",
        }}
      >
        <h3 className="pl-3 text-base font-semibold leading-7 text-gray-900 text-center">
          Handling Progress:
        </h3>
        <FormButton
          content="Save"
          style={{
            padding: "0",
            borderRadius: ".3rem",
            border: !btnAvailable ? "3px solid rgba(43, 61, 231, 0.91)" : "3px solid #d6d6cb",
            backgroundColor: "#fff",
            color: "#000",
          }}
          disabled={btnAvailable}
          onClick={handleEdit}
        />
      </div>

      <ul className="mt-10">
        {shipment.isBooking && (
          <li
            style={{
              display: "grid",
              gridTemplateColumns: "2fr .5fr 3fr",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <p className="text-sm font-medium leading-6 text-gray-900">
              {shipment.freightType === "Import"
                ? "Arrival Notice: "
                : "Booking Confirmation: "}
            </p>
            <Input
              id="booking"
              value={formData.booking}
              onChange={handleChange}
              type="checkbox"
              checked={formData.booking}
            />
            <Input
              id="bookingDate"
              value={
                !shipment.booking && formData.bookingDate === "0001-01-01"
                  ? ""
                  : !shipment.booking && formData.bookingDate !== "0001-01-01"
                  ? formData.bookingDate
                  : shipment.bookingDate
              }
              onChange={handleChange}
              type="date"
            />
          </li>
        )}
        {errors.BookingDate && (
          <p
            className="block text-sm font-medium leading-6 text-gray-900 ml-2 mt-2"
            style={{ color: "red", fontStyle: "italic" }}
          >
            {errors.BookingDate[0]}
          </p>
        )}
        {shipment.isInvoicing && (
          <li
            style={{
              display: "grid",
              gridTemplateColumns: "2fr .5fr 3fr",
              gap: "1rem",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <p className="text-sm font-medium leading-6 text-gray-900">
              Invoicing:
            </p>
            <Input
              id="invoicing"
              value={formData.invoicing}
              onChange={handleChange}
              type="checkbox"
              checked={formData.invoicing}
            />
            <Input
              id="invoicingDate"
              value={
                !shipment.invoicing && formData.invoicingDate === "0001-01-01"
                  ? ""
                  : !shipment.invoicing &&
                    formData.invoicingDate !== "0001-01-01"
                  ? formData.invoicingDate
                  : shipment.invoicingDate
              }
              onChange={handleChange}
              type="date"
            />
          </li>
        )}
        {errors.InvoicingDate && (
          <p
            className="block text-sm font-medium leading-6 text-gray-900 ml-2 mt-2"
            style={{ color: "red", fontStyle: "italic" }}
          >
            {errors.InvoicingDate[0]}
          </p>
        )}
        {shipment.isDeliveryOrder && (
          <li
            style={{
              display: "grid",
              gridTemplateColumns: "2fr .5fr 3fr",
              gap: "1rem",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <p className="text-sm font-medium leading-6 text-gray-900">
              Delivery Order:
            </p>
            <Input
              id="deliveryOrder"
              value={formData.deliveryOrder}
              onChange={handleChange}
              type="checkbox"
              checked={formData.deliveryOrder}
            />
            <Input
              id="deliveryOrderDate"
              value={
                !shipment.deliveryOrder &&
                formData.deliveryOrderDate === "0001-01-01"
                  ? ""
                  : !shipment.deliveryOrder &&
                    formData.deliveryOrderDate !== "0001-01-01"
                  ? formData.deliveryOrderDate
                  : shipment.deliveryOrderDate
              }
              onChange={handleChange}
              type="date"
            />
          </li>
        )}
        {errors.DeliveryOrderDate && (
          <p
            className="block text-sm font-medium leading-6 text-gray-900 ml-2 mt-2"
            style={{ color: "red", fontStyle: "italic" }}
          >
            {errors.DeliveryOrderDate[0]}
          </p>
        )}
        {shipment.isClearance && (
          <li
            style={{
              display: "grid",
              gridTemplateColumns: "2fr .5fr 3fr",
              gap: "1rem",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <p className="text-sm font-medium leading-6 text-gray-900">
              Customs Clearance:
            </p>
            <Input
              id="clearance"
              value={formData.clearance}
              onChange={handleChange}
              type="checkbox"
              checked={formData.clearance}
            />
            <Input
              id="clearanceDate"
              value={
                !shipment.clearance && formData.clearanceDate === "0001-01-01"
                  ? ""
                  : !shipment.clearance &&
                    formData.clearanceDate !== "0001-01-01"
                  ? formData.clearanceDate
                  : shipment.clearanceDate
              }
              onChange={handleChange}
              type="date"
            />
          </li>
        )}
        {errors.ClearanceDate && (
          <p
            className="block text-sm font-medium leading-6 text-gray-900 ml-2 mt-2"
            style={{ color: "red", fontStyle: "italic" }}
          >
            {errors.ClearanceDate[0]}
          </p>
        )}
        {shipment.isDelivery && (
          <li
            style={{
              display: "grid",
              gridTemplateColumns: "2fr .5fr 3fr",
              gap: "1rem",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <p className="text-sm font-medium leading-6 text-gray-900">
              Delivery:
            </p>
            <Input
              id="delivery"
              value={formData.delivery}
              onChange={handleChange}
              type="checkbox"
              checked={formData.delivery}
            />
            <Input
              id="deliveryDate"
              value={
                !shipment.delivery && formData.deliveryDate === "0001-01-01"
                  ? ""
                  : !shipment.delivery && formData.deliveryDate !== "0001-01-01"
                  ? formData.deliveryDate
                  : shipment.deliveryDate
              }
              onChange={handleChange}
              type="date"
            />
          </li>
        )}
        {errors.DeliveryDate && (
          <p
            className="block text-sm font-medium leading-6 text-gray-900 ml-2 mt-2"
            style={{ color: "red", fontStyle: "italic" }}
          >
            {errors.DeliveryDate[0]}
          </p>
        )}
        {shipment.isStorage && (
          <li
            style={{
              display: "grid",
              gridTemplateColumns: "2fr .5fr 3fr",
              gap: "1rem",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <p className="text-sm font-medium leading-6 text-gray-900">
              Storage Start:
            </p>
            <Input
              id="storageStart"
              value={formData.storageStart}
              onChange={handleChange}
              type="checkbox"
              checked={formData.storageStart}
            />
            <Input
              id="storageStartDate"
              value={
                !shipment.storageStart &&
                formData.storageStartDate === "0001-01-01"
                  ? ""
                  : !shipment.storageStart &&
                    formData.storageStartDate !== "0001-01-01"
                  ? formData.storageStartDate
                  : shipment.storageStartDate
              }
              onChange={handleChange}
              type="date"
            />
          </li>
        )}
        {errors.StorageStartDate && (
          <p
            className="block text-sm font-medium leading-6 text-gray-900 ml-2 mt-2"
            style={{ color: "red", fontStyle: "italic" }}
          >
            {errors.StorageStartDate[0]}
          </p>
        )}
        {shipment.storageStart && (
          <li
            style={{
              display: "grid",
              gridTemplateColumns: "2fr .5fr 3fr",
              gap: "1rem",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <p className="text-sm font-medium leading-6 text-gray-900">
              Storage End:
            </p>
            <Input
              id="storageEnd"
              value={formData.storageEnd}
              onChange={handleChange}
              type="checkbox"
              checked={formData.storageEnd}
            />
            <Input
              id="storageEndDate"
              value={
                !shipment.storageEnd && formData.storageEndDate === "0001-01-01"
                  ? ""
                  : !shipment.storageEnd &&
                    formData.storageEndDate !== "0001-01-01"
                  ? formData.storageEndDate
                  : shipment.storageEndDate
              }
              onChange={handleChange}
              type="date"
            />
          </li>
        )}
        {errors.StorageEndDate && (
          <p
            className="block text-sm font-medium leading-6 text-gray-900 ml-2 mt-2"
            style={{ color: "red", fontStyle: "italic" }}
          >
            {errors.StorageEndDate[0]}
          </p>
        )}
      </ul>
    </div>
  );
}
