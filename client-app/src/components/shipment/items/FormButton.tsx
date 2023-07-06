import { FormEvent } from "react";

interface Props {
  content: string;
  style: object;
  onClick?: (e: FormEvent) => void;
}

export default function FormButton({ content, onClick, style }: Props) {
  if (onClick) {
    return (
      <button style={style} onClick={onClick}>
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
