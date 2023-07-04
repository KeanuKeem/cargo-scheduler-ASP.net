import { calendarActions } from "../../../store/calendarSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import "./MonthChangeBtn.css";

interface Props {
  month: string;
  year: number;
}

export default function MonthChangeBtn({ month, year }: Props) {
  const { maxYear } = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();
  const increment = () => {
    dispatch(calendarActions.incrementMonth());
  };
  const decrement = () => {
    dispatch(calendarActions.decrementMonth());
  }

  return (
    <div className="monthBtn">
      <p
        onClick={() => {
          if (month === "January" && year === 2023) return;
          decrement();
        }}
      >
        {"<"}
      </p>
      <p
        onClick={() => {
          if (month === "December" && year === maxYear) return;
          increment();
        }}
      >
        {">"}
      </p>
    </div>
  );
}
