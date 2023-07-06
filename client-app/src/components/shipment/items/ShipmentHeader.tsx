import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { ShipmentFormValues } from "../../../model/shipment";
import FormButton from "./FormButton";
import NotificationModal from "./NotificationModal";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { modalActions } from "../../../store/modalSlice";

interface Props {
  shipment: ShipmentFormValues;
  isEdit: boolean;
  setFreightType: (type: string) => void;
  setShipmentType: (type: string) => void;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setFormData: Dispatch<SetStateAction<ShipmentFormValues>>;
  handleEdit: (event: FormEvent) => void;
}

export default function ShipmentHeader({
  shipment,
  isEdit,
  setFreightType,
  setShipmentType,
  setIsEdit,
  setFormData,
  handleEdit,
}: Props) {
  const dispatch = useAppDispatch();
  const deleteBtnHandler = () => {
    dispatch(modalActions.notificationAction());
  };

  return (
    <div className="px-4 sm:px-0">
      <h3 className="pl-3 text-base font-semibold leading-7 text-gray-900">
        {isEdit
          ? "[" +
            shipment.freightType +
            "] [" +
            shipment.shipmentType +
            "] " +
            shipment.ref +
            " - (Editing)"
          : "[" +
            shipment.freightType +
            "] [" +
            shipment.shipmentType +
            "] " +
            shipment.ref}
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          marginTop: "1rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <FormButton
            content={isEdit ? "Update" : "Edit"}
            style={{
              padding: ".5rem 1rem",
              borderRadius: ".3rem",
              border: "3px solid #d6d6cb",
              backgroundColor: "#fff",
              color: "#000",
              width: "20%",
            }}
            onClick={
              isEdit
                ? handleEdit
                : () => {
                    setIsEdit(true);
                    setFreightType(shipment.freightType);
                    setShipmentType(shipment.shipmentType);
                  }
            }
          />
          <FormButton
            content={isEdit ? "Cancel" : "Delete"}
            style={{
              padding: ".5rem 1rem",
              borderRadius: ".3rem",
              border: "3px solid #ff1500",
              backgroundColor: "#fff",
              width: "20%",
            }}
            onClick={
              isEdit
                ? () => {
                    setFormData(shipment);
                    setIsEdit(false);
                  }
                : () => deleteBtnHandler()
            }
          />
        </div>
        {!isEdit && (
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              paddingRight: "2rem",
            }}
          >
            <FormButton
              content="Progress"
              style={{
                padding: ".5rem 1rem",
                borderRadius: ".3rem",
                backgroundColor: "#2b3de7e8",
                color: "#fff",
                width: "30%",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
