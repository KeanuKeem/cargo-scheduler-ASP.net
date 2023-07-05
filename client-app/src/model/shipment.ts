export interface Shipment {
  id: string;
  ref: string;
  freightType: string;
  shipmentType: string;
  date: Date;
  port: string;
  vessel: string;
  voyage: string;
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
  date: Date | null = null;
  port: string = "";
  vessel: string = "";
  voyage: string = "";
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
      this.container = shipment.container;
      this.depot = shipment.depot;
      this.note = shipment.note;
    }
  }
}
