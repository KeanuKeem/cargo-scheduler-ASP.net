import { ChangeEvent, FormEvent, SetStateAction } from "react";
import { ShipmentFormValues } from "../../../model/shipment";
import Input from "../items/Input";
import FormButton from "../items/FormButton";

interface Props {
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCancel: (event: SetStateAction<boolean>) => void;
  formData: ShipmentFormValues;
  from?: string;
}

export default function HandlingForm({
  handleChange,
  handleCancel,
  formData,
  from,
}: Props) {
  return (
    <div style={{ margin: "0 auto", marginTop: "2rem" }}>
      <p className="text-base font-semibold leading-7 text-gray-900 mb-1">
        {formData.freightType !== "Type"
          ? "Please select what you handle for this particular shipment."
          : "Please choose the required fields to proceed further!"}
      </p>
      {formData.freightType !== "Type" && (
        <ul className="mt-10">
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <label className="block text-sm font-medium leading-6 text-gray-900">
              {formData.freightType === "Import"
                ? "Arrival Notice: "
                : "Booking Confirmation: "}
            </label>
            <Input
              id="isBooking"
              value={formData.isBooking}
              checked={formData.isBooking}
              onChange={handleChange}
              type="checkbox"
            />
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          >
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Invoicing
            </label>
            <Input
              id="isInvoicing"
              value={formData.isInvoicing}
              checked={formData.isInvoicing}
              onChange={handleChange}
              type="checkbox"
            />
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          >
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Delivery Order
            </label>
            <Input
              id="isDeliveryOrder"
              value={formData.isDeliveryOrder}
              checked={formData.isDeliveryOrder}
              onChange={handleChange}
              type="checkbox"
            />
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          >
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Customs Clearance
            </label>
            <Input
              id="isClearance"
              value={formData.isClearance}
              checked={formData.isClearance}
              onChange={handleChange}
              type="checkbox"
            />
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          >
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Delivery
            </label>
            <Input
              id="isDelivery"
              value={formData.isDelivery}
              checked={formData.isDelivery}
              onChange={handleChange}
              type="checkbox"
            />
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          >
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Storage
            </label>
            <Input
              id="isStorage"
              value={formData.isStorage}
              checked={formData.isStorage}
              onChange={handleChange}
              type="checkbox"
            />
          </li>
        </ul>
      )}
      {!!from && (
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
            onClick={(e: FormEvent) => {
              e.preventDefault();
              handleCancel(false);
            }}
            content="Back"
            style={{
              padding: ".5rem 1rem",
              borderRadius: ".3rem",
              backgroundColor: "#e7e7e7e8",
              color: "#000",
            }}
          />
          {formData.freightType !== "Type" && (
            <FormButton
              content="Submit"
              style={{
                padding: ".5rem 1rem",
                borderRadius: ".3rem",
                backgroundColor: "#2b3de7e8",
                color: "#fff",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
