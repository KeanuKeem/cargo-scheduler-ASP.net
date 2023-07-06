import warning from "../../../assets/triangle-exclamation-solid.svg";
import { FormEvent } from "react";

interface Props {
  heading: string;
  text: string;
  submitText: string;
  cancelText: string;
  canceler: () => void;
  submitter: (e: FormEvent) => void;
}

interface PropsBack {
  canceler: () => void;
}

export function NotificationModalBack({canceler}: PropsBack) {

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#151515e8",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "20",
      }}
      onClick={canceler}
    ></div>
  );
}

export default function NotificationModal({
  heading,
  text,
  cancelText,
  submitText,
  canceler,
  submitter
}: Props) {
  return (
    <>
      <div
        style={{
          width: "40%",
          borderRadius: ".5rem",
          backgroundColor: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "22",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 6fr",
            padding: "2rem 1rem 0 1rem",
          }}
        >
          <div
            style={{
              marginLeft: "1rem",
              backgroundColor: "#d3d3d3",
              width: "3rem",
              borderRadius: "50%",
              height: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={warning}
              alt="warning"
              style={{
                width: "1.5rem",
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              {heading}
            </h3>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 6fr",
            padding: "0 1rem 2rem 1rem",
          }}
        >
          <p></p>
          <p className="text-sm text-gray-500">{text}</p>
        </div>
        <div
          style={{
            textAlign: "right",
            borderBottomLeftRadius: ".5rem",
            borderBottomRightRadius: ".5rem",
            backgroundColor: "#e9e9e9",
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            gap: ".5rem",
            padding: "1rem 2rem 1rem 1rem",
          }}
        >
          <button
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={canceler}
          >
            {cancelText}
          </button>
          <button
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            onClick={submitter}
          >
            {submitText}
          </button>
        </div>
      </div>
      <NotificationModalBack canceler={canceler} />
    </>
  );
}
