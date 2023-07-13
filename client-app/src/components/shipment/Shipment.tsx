import {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  SetStateAction,
} from "react";
import api from "../../api/api";
import {
  ShipmentFormValues,
  ShipmentResponseValues,
} from "../../model/shipment";
import ShipmentHeader from "./items/ShipmentHeader";
import ShipmentBody from "./items/ShipmentBody";
import { useNavigate } from "react-router-dom";
import exit from "../../assets/circle-xmark-regular.svg";
import left from "../../assets/circle-left.svg";
import HandlingForm from "./form/HandlingForm";
import { useAppDispatch } from "../../store/hooks";
import { shipmentActions } from "../../store/shipmentSlice";
import { checkValidity, inputValidator } from "../script/validator";

interface Props {
  shipment: ShipmentFormValues;
  formData: ShipmentFormValues;
  setFormData: (data: SetStateAction<ShipmentFormValues>) => void;
  setIsProgress: (event: SetStateAction<boolean>) => void;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function Shipment({
  shipment,
  formData,
  setFormData,
  setIsProgress,
  handleChange,
}: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [freightType, setFreightType] = useState("");
  const [shipmentType, setShipmentType] = useState("");
  const [errors, setErrors] = useState(new ShipmentResponseValues());
  const [isEditProgress, setIsEditProgress] = useState(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const refresh = () => dispatch(shipmentActions.doRefresh());

  const handleEdit = (event: FormEvent) => {
    event.preventDefault();
    const errorsFront = inputValidator(formData);
    if (!checkValidity(errorsFront)) setErrors(errorsFront);
    else {
      if (formData.date === "") formData.date = "1500-01-01";
      api.Shipment.edit(shipment.id!, formData)
        .then(() => {
          setIsEditProgress(false);
          setIsEdit(false);
          refresh();
        })
        .catch((err) => {
          setErrors(err);
          if (err.Date) formData.date = "";
        });
    }
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      freightType: freightType,
      shipmentType: shipmentType,
    }));
  }, [freightType, shipmentType]);

  return (
    <div
      className="calendar"
      style={{ padding: "3rem", position: "relative", marginBottom: "3rem" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: ".5rem",
          margin: "-1rem 0 2rem 0",
        }}
      >
        {isEdit && (
          <img
            src={left}
            onClick={() => {
              setFormData(shipment);
              if (isEditProgress) {
                setIsEditProgress(false);
              } else {
                setIsEdit(false);
                setFormData(shipment);
              }
            }}
            alt="left"
            style={{ width: "1rem", cursor: "pointer" }}
          />
        )}
        <img
          src={exit}
          onClick={() => {
            setFormData(shipment);
            navigate("/scheduler/calendar");
          }}
          alt="exit"
          style={{ width: "1rem", cursor: "pointer" }}
        />
      </div>

      {shipment && (
        <>
          <ShipmentHeader
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setShipmentType={setShipmentType}
            setFreightType={setFreightType}
            shipment={shipment}
            setFormData={setFormData}
            handleEdit={handleEdit}
            isEditProgress={isEditProgress}
            setIsEditProgress={setIsEditProgress}
            setIsProgress={setIsProgress}
            setErrors={setErrors}
          />
          {!isEditProgress ? (
            <ShipmentBody
              isEdit={isEdit}
              shipment={shipment}
              freightType={freightType}
              shipmentType={shipmentType}
              setShipmentType={setShipmentType}
              setFreightType={setFreightType}
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
          ) : (
            <HandlingForm
              handleChange={handleChange}
              handleCancel={() => setIsEditProgress(false)}
              formData={formData}
            />
          )}
        </>
      )}
    </div>
  );
}
