interface Props {
  content: string;
  color: string;
  fcolor: string;
}

export default function FormButton({ content, color, fcolor }: Props) {
  return (
    <button
      style={{
        padding: ".5rem 1rem",
        backgroundColor: color,
        color: fcolor,
        borderRadius: ".3rem",
      }}
    >
      {content}
    </button>
  );
}
