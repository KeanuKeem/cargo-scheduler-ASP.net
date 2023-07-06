import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <div
      style={{
        width: "85%",
        height: "100vh",
        backgroundColor: "#f3f3f3",
        position: "absolute",
        top: "0",
        right: "0",
        zIndex: "-2",
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
}