import { ChangeEvent } from "react";

interface Props {
  name: string;
  id: string;
  value: string | Date;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type: string;
  placeholder: string;
  width: string;
}

export default function InputField({
  name,
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
        marginTop: "2rem",
      }}
    >
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {name}
      </label>
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
