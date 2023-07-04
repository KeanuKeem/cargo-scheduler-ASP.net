import { ReactNode } from "react";
import "./Modal.css";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/modalSlice";

interface Props {
  children: ReactNode;
}

export default function Modal({ children }: Props) {
  const dispatch = useAppDispatch();
  const handleModal = () => {
    dispatch(modalActions.action());
  }

  return (
    <>
      <div className="shipmentModal">{children}</div>
      <div className="shipmentModal-back" onClick={handleModal}></div>
    </>
  );
}
