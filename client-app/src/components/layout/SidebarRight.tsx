import { ReactNode, SetStateAction } from "react";

interface Props {
  children: ReactNode;
}

export default function SidebarRight({ children }: Props) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translatey(-50%)",
          zIndex: "-1",
          width: "40%",
          height: "80vh",
          background: "#fff",
          borderTopLeftRadius: ".3rem",
          borderBottomLeftRadius: ".3rem",
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: "-2",
          width: "100%",
          height: "100vh",
          background: "rgba(23, 23, 23, 0.55)",
        }}
      ></div>
    </>
  );
}
