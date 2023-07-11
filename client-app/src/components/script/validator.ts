import {
  ShipmentFormValues,
  ShipmentResponseValues,
} from "../../model/shipment";

export function inputValidator(data: ShipmentFormValues) {
  const result = new ShipmentResponseValues();
  if (data.ref === "") result["Ref"] = "Shipment ID must not be empty.";
  if (data.freightType === "Type")
    result["FreightType"] = "Freight Type must not be empty.";
  if (data.shipmentType === "Type")
    result["ShipmentType"] = "Shipment Type must not be empty.";
  if (data.date === "") result["Date"] = ["Date must not be empty."];
  if (data.port === "")
    data.freightType === "Type"
      ? (result["Port"] = "Please fill out Freight Type.")
      : data.freightType === "Import"
      ? (result["Port"] = "Arriving Port must not be empty.")
      : (result["Port"] = "Departuring Port must not be empty.");
  if (data.vessel === "")
    data.shipmentType === "Type"
      ? (result["Vessel"] = "Please fill out Shipment Type.")
      : data.shipmentType === "AIR"
      ? (result["Vessel"] = "Flight must not be empty.")
      : (result["Vessel"] = "Vessel must not be empty.");
  if (data.voyage === "")
    data.shipmentType === "Type"
      ? (result["Voyage"] = "Please fill out Shipment Type.")
      : data.shipmentType !== "AIR"
      ? (result["Voyage"] = "Voyage must not be empty.")
      : (result["Voyage"] = "");
  if (data.container === "")
    data.shipmentType === "Type"
      ? (result["Container"] = "Please fill out Shipment Type.")
      : data.shipmentType !== "AIR"
      ? (result["Container"] = "Container Number must not be empty.")
      : (result["Container"] = "");

  return result;
}

export function checkValidity(errors: ShipmentResponseValues) {
  if (
    errors.Ref === "" &&
    errors.FreightType === "" &&
    errors.ShipmentType === "" &&
    errors.Date === "" &&
    errors.Port === "" &&
    errors.Vessel === "" &&
    errors.Voyage === "" &&
    errors.Container === ""
  )
    return true;
  return false;
}

export function HandlingValidator(forms: ShipmentFormValues) {
  const result = new ShipmentResponseValues();
  if (forms.booking && forms.bookingDate === "0001-01-01")
    forms.shipmentType === "Import"
      ? (result["BookingDate"] = ["Arrival Notice Date must not be empty."])
      : (result["BookingDate"] = [
          "Booking Confirmation Date must not be empty.",
        ]);
  if (forms.invoicing && forms.invoicingDate === "0001-01-01")
    result["InvoicingDate"] = ["Invoicing Date must not be empty."];
  if (forms.deliveryOrder && forms.deliveryOrderDate === "0001-01-01")
    result["DeliveryOrderDate"] = ["Delivery Order Date must not be empty."];
  if (forms.clearance && forms.clearanceDate === "0001-01-01")
    result["ClearanceDate"] = ["Customs Clearance Date must not be empty."];
  if (forms.delivery && forms.deliveryDate === "0001-01-01")
    result["DeliveryDate"] = ["Delivery Date must not be empty."];
  if (forms.storageStart && forms.storageStartDate === "0001-01-01")
    result["StorageStartDate"] = ["Storage Start Date must not be empty."];
  if (forms.storageEnd && forms.storageEndDate === "0001-01-01")
    result["StorageEndDate"] = ["Storage End Date must not be empty."];

  return result;
}

export function checkHandlingValidator(errors: ShipmentResponseValues) {
  if (
    errors.BookingDate === "" &&
    errors.InvoicingDate === "" &&
    errors.DeliveryOrderDate === "" &&
    errors.ClearanceDate === "" &&
    errors.DeliveryDate === "" &&
    errors.StorageStartDate === "" &&
    errors.StorageEndDate === ""
  )
    return true;
  return false;
}
