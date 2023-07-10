import { FormEvent } from "react";

interface Props {
  content: string;
  style: object;
  onClick?: (e: FormEvent) => void;
  disabled?: boolean;
}

export default function FormButton({ content, onClick, style, disabled }: Props) {
  if (onClick) {
    return (
      <button style={style} onClick={onClick} disabled={disabled}>
        {content}
      </button>
    );
  } else {
    return (
      <button style={style} type="submit">
        {content}
      </button>
    );
  }
}
