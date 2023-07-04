import "./Button.css";

interface Props {
  content: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ content, onClick }: Props) {
  return (
    <>
      <button className="addBtn" onClick={onClick}>{content}</button>
    </>
  );
}
