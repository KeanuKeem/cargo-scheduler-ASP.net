import { ChangeEvent } from "react";

interface Props {
  id: string;
  value: string | Date;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type: string;
  placeholder: string;
  width: string;
}

export default function InputField({
  id,
  value,
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
        value={value.toString()}
        onChange={onChange}
        type={type}
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
