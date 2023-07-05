interface Props {
  name: string;
  id: string;
  rows: number;
  placeholder: string;
  width: string;
}

export default function TextareaField({
  name,
  id,
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
        name={name}
        id={id}
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
