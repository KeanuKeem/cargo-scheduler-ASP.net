import { useState } from "react";
import DropdownField from "./DropdownField";
import FormButton from "./FormButton";
import InputField from "./InputField";
import TextareaField from "./TextareaField";

export default function AddForm() {
  const [freightType, setFreightType] = useState("Type");
  const [shipmentType, setShipmentType] = useState("Type");

  return (
    <form style={{ width: "50%", margin: "0 auto", marginTop: "2rem" }}>
      <p className="text-base font-semibold leading-7 text-gray-900 mb-10">
        Create your shipment:
      </p>
      <InputField
        width="70%"
        name="Shipment ID"
        id="ref"
        type="text"
        placeholder="S00123456"
      />
      <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        <DropdownField
          option={freightType}
          setOption={setFreightType}
          options={["Import", "Export"]}
          name="Freight Type"
          width="50%"
        />
        <DropdownField
          option={shipmentType}
          setOption={setShipmentType}
          options={["AIR", "BROKERAGE", "FAK", "FCL", "LCL"]}
          name="Shipment Type"
          width="50%"
        />
      </div>
      <InputField
        width="70%"
        name="Departure / Arrival Date"
        id="date"
        type="date"
        placeholder=""
      />
      <InputField
        width="70%"
        name="Departuring / Arriving Port"
        id="port"
        type="text"
        placeholder="Auckland"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <InputField
          width="100%"
          name="Vessel"
          id="vessel"
          type="text"
          placeholder="NYK FUTAGO"
        />
        <InputField
          width="100%"
          name="Voyage"
          id="voyage"
          type="text"
          placeholder="111S"
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <InputField
          width="100%"
          name="MBL"
          id="mbl"
          type="text"
          placeholder="MBLNUMBER123456"
        />
        <InputField
          width="100%"
          name="HBL"
          id="hbl"
          type="text"
          placeholder="HBLNUMBER123456"
        />
      </div>
      <InputField
        width="70%"
        name="Container Number"
        id="container"
        type="text"
        placeholder="CONT1234567"
      />
      <InputField
        width="70%"
        name="Freight Handling Depot"
        id="depot"
        type="text"
        placeholder="Tapper"
      />
      <TextareaField
        width="100%"
        name="Notes"
        id="note"
        rows={3}
        placeholder="Tapper"
      />
      <div style={{ display: "flex", gap: "1rem", paddingTop: "4rem", paddingBottom: "4rem", float: "right"}}>
        <FormButton content="Cancel" fcolor="#000" color="#e7e7e7e8" />
        <FormButton content="Submit" fcolor="#fff" color="#2b3de7e8" />
      </div>
    </form>
  );
}
