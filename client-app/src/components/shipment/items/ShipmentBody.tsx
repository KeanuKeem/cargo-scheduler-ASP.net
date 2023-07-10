import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import {
  ShipmentFormValues,
  ShipmentResponseValues,
} from "../../../model/shipment";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Textarea from "./Textarea";

interface Props {
  shipment: ShipmentFormValues;
  isEdit: boolean;
  freightType: string;
  shipmentType: string;
  setFreightType: (type: string) => void;
  setShipmentType: (type: string) => void;
  formData: ShipmentFormValues;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  errors: ShipmentResponseValues;
}

export default function ShipmentBody({
  shipment,
  isEdit,
  freightType,
  shipmentType,
  setFreightType,
  setShipmentType,
  formData,
  handleChange,
  errors,
}: Props) {
  const dateString = shipment.date.toString();
  const date =
    dateString.split("-")[2] +
    " / " +
    dateString.split("-")[1] +
    " / " +
    dateString.split("-")[0];

  return (
    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        {isEdit && (
          <>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Freight Type:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <Dropdown
                  option={
                    freightType === "" ? shipment.freightType : freightType
                  }
                  setOption={setFreightType}
                  options={["Import", "Export"]}
                  width="30%"
                />
              </dd>
              <dd>{errors.FreightType && errors.FreightType[0]}</dd>
              <dt></dt>
              <dd
                className="block text-sm font-medium leading-6 text-gray-900 ml-2"
                style={{ color: "red", fontStyle: "italic" }}
              >
                {errors.FreightType && "- " + errors.FreightType[0]}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Shipment Type:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <Dropdown
                  option={
                    shipmentType === "" ? shipment.shipmentType : shipmentType
                  }
                  setOption={setShipmentType}
                  options={["AIR", "FAK", "FCL", "LCL"]}
                  width="30%"
                />
              </dd>
              <dt></dt>
              <dd
                className="block text-sm font-medium leading-6 text-gray-900 ml-2"
                style={{ color: "red", fontStyle: "italic" }}
              >
                {errors.ShipmentType && "- " + errors.ShipmentType[0]}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Reference Number:
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <Input
                  id="ref"
                  value={formData.ref}
                  onChange={handleChange}
                  type="text"
                  width="50%"
                  placeholder=""
                />
              </dd>
              <dt></dt>
              <dd
                className="block text-sm font-medium leading-6 text-gray-900 ml-2"
                style={{ color: "red", fontStyle: "italic" }}
              >
                {errors.Ref && "- " + errors.Ref[0]}
              </dd>
            </div>
          </>
        )}
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            {formData.freightType === "Import"
              ? "Estimate Time of Arrival (ETA):"
              : "Estimate Time of Departure (ETD):"}
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {isEdit ? (
              <Input
                id="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
                width="50%"
                placeholder=""
              />
            ) : (
              date
            )}
          </dd>
          <dt></dt>
          <dd
            className="block text-sm font-medium leading-6 text-gray-900 ml-2"
            style={{ color: "red", fontStyle: "italic" }}
          >
            {errors.Date && "- " + errors.Date[0]}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            {formData.freightType === "Import"
              ? "Port of Arrival (POA):"
              : "Port of Departure (POD):"}
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {isEdit ? (
              <Input
                id="port"
                value={formData.port}
                onChange={handleChange}
                type="text"
                width="50%"
                placeholder=""
              />
            ) : (
              shipment.port
            )}
          </dd>
          <dt></dt>
          <dd
            className="block text-sm font-medium leading-6 text-gray-900 ml-2"
            style={{ color: "red", fontStyle: "italic" }}
          >
            {errors.Port && "- " + errors.Port[0]}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            {formData.shipmentType === "AIR" ? "Flight:" : "Vessel:"}
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {isEdit ? (
              formData.shipmentType === "AIR" ? (
                <>
                  <Input
                    id="vessel"
                    value={formData.vessel}
                    onChange={handleChange}
                    type="text"
                    width="50%"
                    placeholder=""
                  />
                  <p
                    className="block text-sm font-medium leading-6 text-gray-900 ml-2"
                    style={{ color: "red", fontStyle: "italic" }}
                  >
                    {errors.Vessel && "- " + errors.Vessel[0]}
                  </p>
                </>
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    width: "80%",
                  }}
                >
                  <Input
                    id="vessel"
                    value={formData.vessel}
                    onChange={handleChange}
                    type="text"
                    width="100%"
                    placeholder=""
                  />
                  <Input
                    id="voyage"
                    value={formData.voyage}
                    onChange={handleChange}
                    type="text"
                    width="100%"
                    placeholder=""
                  />
                  <p
                    className="block text-sm font-medium leading-6 text-gray-900 ml-2"
                    style={{ color: "red", fontStyle: "italic" }}
                  >
                    {errors.Vessel && "- " + errors.Vessel[0]}
                  </p>
                  <p
                    className="block text-sm font-medium leading-6 text-gray-900 ml-2"
                    style={{ color: "red", fontStyle: "italic" }}
                  >
                    {errors.Voyage && "- " + errors.Voyage[0]}
                  </p>
                </div>
              )
            ) : shipment.shipmentType === "AIR" ? (
              shipment.vessel
            ) : (
              shipment.vessel + " " + shipment.voyage
            )}
          </dd>
        </div>

        {(shipment.mbl || isEdit) && (
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              MBL:
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {isEdit ? (
                <Input
                  id="mbl"
                  value={formData.mbl}
                  onChange={handleChange}
                  type="text"
                  width="50%"
                  placeholder=""
                />
              ) : (
                shipment.mbl
              )}
            </dd>
          </div>
        )}
        {(shipment.hbl || isEdit) && (
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              HBL:
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {isEdit ? (
                <Input
                  id="hbl"
                  value={formData.hbl}
                  onChange={handleChange}
                  type="text"
                  width="50%"
                  placeholder=""
                />
              ) : (
                shipment.hbl
              )}
            </dd>
          </div>
        )}
        {formData.shipmentType !== "AIR" && (
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Container:
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {isEdit ? (
                <Input
                  id="container"
                  value={formData.container}
                  onChange={handleChange}
                  type="text"
                  width="50%"
                  placeholder=""
                />
              ) : (
                shipment.container
              )}
            </dd>
            <dt></dt>
            <dd
              className="block text-sm font-medium leading-6 text-gray-900 ml-2"
              style={{ color: "red", fontStyle: "italic" }}
            >
              {errors.Container && "- " + errors.Container[0]}
            </dd>
          </div>
        )}
        {(shipment.depot || isEdit) && (
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Handling Depot
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {isEdit ? (
                <Input
                  id="depot"
                  value={formData.depot}
                  onChange={handleChange}
                  type="text"
                  width="50%"
                  placeholder=""
                />
              ) : (
                shipment.depot
              )}
            </dd>
          </div>
        )}
        {(shipment.note || isEdit) && (
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Note
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {isEdit ? (
                <Textarea
                  id="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows={3}
                  width="50%"
                  placeholder=""
                />
              ) : (
                shipment.note
              )}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
