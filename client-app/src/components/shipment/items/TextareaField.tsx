import { ChangeEvent } from "react";

interface Props {
  name: string;
  id: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  rows: number;
  placeholder?: string;
  width: string;
}

export default function TextareaField({
  name,
  id,
  value,
  onChange,
  rows,
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
      <textarea
        name={id}
        value={value}
        onChange={onChange}
        rows={rows}
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
