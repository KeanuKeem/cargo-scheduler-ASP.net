import { Dictionary } from "@reduxjs/toolkit";
import { Shipment, ShipmentFormValues, ShipmentResponseValues } from "../../model/shipment";

export const months: string[][] = [
  ["January", "1"],
  ["February", "2"],
  ["March", "3"],
  ["April", "4"],
  ["May", "5"],
  ["June", "6"],
  ["July", "7"],
  ["August", "8"],
  ["September", "9"],
  ["October", "10"],
  ["November", "11"],
  ["December", "12"],
];

export function getMonthNum(month: string) {
  return months[months.findIndex((item) => item[0] === month)][1];
}

function getFirstDay(month: string, year: string) {
  const dateString = month + " 1," + year;
  return new Date(dateString).toString().split(" ")[0];
}

function isLeapYear(year: number) {
  if (year % 400 === 0) return true;
  else if (year % 100 === 0) return false;
  else if (year % 4 === 0) return true;
}

function fillEmptyDates(dates: string[]) {
  const loops = 42 - dates.length;
  for (let i = 7; i < 7 + loops; i++) {
    dates.push("no " + (i*100).toString());
  }
  return dates;
}

function getDayinMonth(month: string, year: string) {
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      return 31;
    case "February":
      if (isLeapYear(Number(year))) return 29;
      return 28;
    case "April":
    case "June":
    case "September":
    case "November":
      return 30;
  }
}

export function generateDateArray(month: string, year: string) {
  let initialArray: string[];
  const firstDay = getFirstDay(month, year);
  if (firstDay === "Sun") initialArray = [];
  else if (firstDay === "Mon") initialArray = ["no 100"];
  else if (firstDay === "Tue") initialArray = ["no 100", "no 200"];
  else if (firstDay === "Wed") initialArray = ["no 100", "no 200", "no 300"];
  else if (firstDay === "Thu") initialArray = ["no 100", "no 200", "no 300", "no 400"];
  else if (firstDay === "Fri")
    initialArray = ["no 100", "no 200", "no 300", "no 400", "no 500"];
  else initialArray = ["no 100", "no 200", "no 300", "no 400", "no 500", "no 600"];
  for (let i = 1; i <= getDayinMonth(month, year)!; i++) {
    initialArray.push("yes " + i.toString());
  }
  return fillEmptyDates(initialArray);
}

export function generateYearArray() {
  let yearArray = [2023];
  for (let i = 2024; i < new Date().getFullYear() + 5; i++) {
    yearArray.push(i);
  }
  return yearArray;
}

export function generateInitialDateArray() {
  let dateArray: string[] = [];
  for (let i = 0; i < 42; i++) {
    dateArray.push("no " + i.toString());
  }
  return dateArray;
}

export function getGroupedShipments(shipmentsArray: Shipment[]) {
  let shipmentsObject: Dictionary<Shipment[]> = {};
  shipmentsArray.map((shipment: Shipment) => {
    let date = shipment.date.toString().split("-")[2];
    if (date[0] === "0") date = date[1];
    shipmentsObject[date]
      ? shipmentsObject[date]!.push(shipment)
      : (shipmentsObject[date] = [shipment]);
  });
  return shipmentsObject;
}

export function makeDateDefault(data: ShipmentFormValues) {
  const defaultDate = "0001-01-01";
  if (data.date === "") data.date = defaultDate;
  if (data.bookingDate === "" || !data.booking) data.bookingDate = defaultDate;
  if (data.invoicingDate === "" || !data.invoicing) data.invoicingDate = defaultDate;
  if (data.deliveryOrderDate === "" || !data.deliveryOrder) data.deliveryOrderDate = defaultDate;
  if (data.clearanceDate === "" || !data.clearance) data.clearanceDate = defaultDate;
  if (data.deliveryDate === "" || !data.delivery) data.deliveryDate = defaultDate;
  if (data.storageStartDate === "" || !data.storageStart) data.storageStartDate = defaultDate;
  if (data.storageEndDate === "" || !data.storageEnd) data.storageEndDate = defaultDate;
}

export function makeDateDefaultForResponse(data: ShipmentFormValues) {
  const defaultDate = "";
  if (data.bookingDate === "0001-01-01") data.bookingDate = defaultDate;
  if (data.invoicingDate === "0001-01-01") data.invoicingDate = defaultDate;
  if (data.deliveryOrderDate === "0001-01-01") data.deliveryOrderDate = defaultDate;
  if (data.clearanceDate === "0001-01-01") data.clearanceDate = defaultDate;
  if (data.deliveryDate === "0001-01-01") data.deliveryDate = defaultDate;
  if (data.storageStartDate === "0001-01-01") data.storageStartDate = defaultDate;
  if (data.storageEndDate === "0001-01-01") data.storageEndDate = defaultDate;
}

export function makeDateDefaultForErrors(errors: any, data: ShipmentFormValues) {
  const defaultDate = "";
  if (errors.bookingDate) data.bookingDate = defaultDate;
  if (errors.invoicingDate) data.invoicingDate = defaultDate;
  if (errors.deliveryOrderDate) data.deliveryOrderDate = defaultDate;
  if (errors.clearanceDate) data.clearanceDate = defaultDate;
  if (errors.deliveryDate) data.deliveryDate = defaultDate;
  if (errors.storageStartDate) data.storageStartDate = defaultDate;
  if (errors.storageEndDate) data.storageEndDate = defaultDate;
}