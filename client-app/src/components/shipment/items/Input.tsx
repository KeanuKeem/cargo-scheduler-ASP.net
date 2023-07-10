import { ChangeEvent } from "react";

interface Props {
  id: string;
  value: string | Date | boolean;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type: string;
  placeholder?: string;
  width?: string;
}

export default function Input({
  id,
  value,
  checked,
  onChange,
  type,
  placeholder,
  width,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".6rem",
      }}
    >
      <input
        name={id}
        value={value!.toString()}
        onChange={onChange}
        type={type}
        checked={checked}
        placeholder={placeholder}
        style={{
          width: width,
          border: "1px solid #dfdfdf",
          borderRadius: ".3rem",
          padding: ".3rem .7rem",
        }}
      />
    </div>
  );
}
