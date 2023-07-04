import DropdownField from "./DropdownField";
import FormButton from "./FormButton";
import InputField from "./InputField";

export default function AddForm() {
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
          defaultOption="Type"
          options={["Import", "Export"]}
          name="Freight Type"
          width="50%"
        />
        <DropdownField
          defaultOption="Type"
          options={["AIR", "BROKERAGE", "FAK", "FCL", "LCL"]}
          name="Shipment Type"
          width="50%"
        />
      </div>
      <InputField
        width="70%"
        name="Estimate Time of Arrival (ETA)"
        id="ref"
        type="date"
        placeholder=""
      />
      <InputField
        width="70%"
        name="Place of Discharge (POD)"
        id="ref"
        type="text"
        placeholder="Auckland"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <InputField
          width="100%"
          name="Vessel"
          id="ref"
          type="text"
          placeholder="NYK FUTAGO"
        />
        <InputField
          width="100%"
          name="Voyage"
          id="ref"
          type="text"
          placeholder="111S"
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <InputField
          width="100%"
          name="MBL"
          id="ref"
          type="text"
          placeholder="MBLNUMBER123456"
        />
        <InputField
          width="100%"
          name="HBL"
          id="ref"
          type="text"
          placeholder="HBLNUMBER123456"
        />
      </div>
      <InputField
        width="70%"
        name="Container Number"
        id="ref"
        type="text"
        placeholder="CONT1234567"
      />
      <InputField
        width="70%"
        name="Place of Discharge (POD)"
        id="ref"
        type="text"
        placeholder="Auckland"
      />
      <InputField
        width="70%"
        name="Handling Depot"
        id="ref"
        type="text"
        placeholder="Tapper"
      />
      <div style={{ display: "flex", gap: "1rem", paddingTop: "4rem", paddingBottom: "4rem", float: "right"}}>
        <FormButton content="Cancel" fcolor="#000" color="#e7e7e7e8" />
        <FormButton content="Submit" fcolor="#fff" color="#2b3de7e8" />
      </div>
    </form>
  );
}
