export interface Shipment {
  id: string;
  ref: string;
  freightType: string;
  shipmentType: string;
  date: Date;
  port: string;
  vessel: string;
  voyage: string;
  mbl: string;
  hbl: string;
  container: string;
  depot: string;
  note: string;
  isBooking: boolean;
  booking: boolean;
  bookingDate: Date | string;
  isInvoicing: boolean;
  invoicing: boolean;
  invoicingDate: Date | string;
  isDeliveryOrder: boolean;
  deliveryOrder: boolean;
  deliveryOrderDate: Date | string;
  isClearance: boolean;
  clearance: boolean;
  clearanceDate: Date | string;
  isDelivery: boolean;
  delivery: boolean;
  deliveryDate: Date | string;
  isStorage: boolean;
  storageStart: boolean;
  storageEnd: boolean;
  storageStartDate: Date | string;
  storageEndDate: Date | string;
}

export class Shipment implements Shipment {
  constructor(init?: ShipmentFormValues) {
    Object.assign(this, init);
  }
}

export class ShipmentFormValues {
  id?: string = undefined;
  ref: string = "";
  freightType: string = "";
  shipmentType: string = "";
  date: Date | string = "";
  port: string = "";
  vessel: string = "";
  voyage: string = "";
  mbl: string = "";
  hbl: string = "";
  container: string = "";
  depot: string = "";
  note: string = "";
  isBooking: boolean = false;
  booking: boolean = false;
  bookingDate: Date | string = "0001-01-01";
  isInvoicing: boolean = false;
  invoicing: boolean = false;
  invoicingDate: Date | string = "0001-01-01";
  isDeliveryOrder: boolean = false;
  deliveryOrder: boolean = false;
  deliveryOrderDate: Date | string = "0001-01-01";
  isClearance: boolean = false;
  clearance: boolean = false;
  clearanceDate: Date | string = "0001-01-01";
  isDelivery: boolean = false;
  delivery: boolean = false;
  deliveryDate: Date | string = "0001-01-01";
  isStorage: boolean = false;
  storageStart: boolean = false;
  storageEnd: boolean = false;
  storageStartDate: Date | string = "0001-01-01";
  storageEndDate: Date | string = "0001-01-01";

  constructor(shipment?: ShipmentFormValues) {
    if (shipment) {
      this.id = shipment.id;
      this.ref = shipment.ref;
      this.freightType = shipment.freightType;
      this.shipmentType = shipment.shipmentType;
      this.date = shipment.date;
      this.port = shipment.port;
      this.vessel = shipment.vessel;
      this.voyage = shipment.voyage;
      this.mbl = shipment.mbl;
      this.hbl = shipment.hbl;
      this.container = shipment.container;
      this.depot = shipment.depot;
      this.note = shipment.note;
      this.isBooking = shipment.isBooking;
      this.booking = shipment.booking;
      this.bookingDate = shipment.bookingDate;
      this.isInvoicing = shipment.isInvoicing; 
      this.invoicing = shipment.invoicing;
      this.invoicingDate = shipment.invoicingDate;
      this.isDeliveryOrder = shipment.isDeliveryOrder;
      this.deliveryOrder = shipment.deliveryOrder;
      this.deliveryOrderDate = shipment.deliveryOrderDate;
      this.isClearance = shipment.isClearance;
      this.clearance = shipment.clearance;
      this.clearanceDate = shipment.clearanceDate;
      this.isDelivery = shipment.isDelivery;
      this.delivery = shipment.delivery;
      this.deliveryDate = shipment.deliveryDate;
      this.isStorage = shipment.isStorage;
      this.storageStart = shipment.storageStart;
      this.storageEnd = shipment.storageEnd;
      this.storageStartDate = shipment.storageStartDate;
      this.storageEndDate = shipment.storageEndDate;
    }
  }
}

export class ShipmentResponseValues {
  Ref: string = "";
  FreightType: string = "";
  ShipmentType: string = "";
  Date: string | string[] = "";
  Port: string = "";
  Vessel: string = "";
  Voyage: string = "";
  Container: string = "";
  BookingDate: string | string[] = "";
  InvoicingDate: string | string[] = "";
  DeliveryOrderDate: string | string[] = "";
  ClearanceDate: string | string[] = "";
  DeliveryDate: string | string[] = "";
  StorageStartDate: string | string[] = "";
  StorageEndDate: string | string[] = "";

  constructor(shipment?: ShipmentResponseValues) {
    if (shipment) {
      this.Ref = shipment.Ref;
      this.FreightType = shipment.FreightType;
      this.ShipmentType = shipment.ShipmentType;
      this.Date = shipment.Date;
      this.Port = shipment.Port;
      this.Vessel = shipment.Vessel;
      this.Voyage = shipment.Voyage;
      this.Container = shipment.Container;
      this.BookingDate = shipment.BookingDate;
      this.InvoicingDate = shipment.InvoicingDate;
      this.DeliveryOrderDate = shipment.DeliveryOrderDate;
      this.ClearanceDate = shipment.ClearanceDate;
      this.DeliveryDate = shipment.DeliveryDate;
      this.StorageStartDate = shipment.StorageStartDate;
      this.StorageEndDate = shipment.StorageEndDate;
    }
  }
}
