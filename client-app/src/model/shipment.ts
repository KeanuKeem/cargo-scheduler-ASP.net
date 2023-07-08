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
    }
  }
}

export class ShipmentResponseValues {
  Ref: string = "";
  FreightType: string = "";
  ShipmentType: string = "";
  Date: string = "";
  Port: string = "";
  Vessel: string = "";
  Voyage: string = "";
  Container: string = "";

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
    }
  }
}