import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {
  generateDateArray,
  generateInitialDateArray,
  getMonthNum,
  months,
} from "../components/script/calendar";

interface CalendarState {
  today: string;
  month: string;
  monthNum: string;
  months: string[][];
  year: number;
  maxYear: number;
  dateArray: string[];
}

const now = new Date();

const initialState: CalendarState = {
  today:
    now.getDate().toString() +
    " " +
    months[now.getMonth()][0] +
    " " +
    now.getFullYear().toString(),
  month: months[new Date().getMonth()][0],
  monthNum: months[new Date().getMonth()][1],
  months,
  year: new Date().getFullYear(),
  maxYear: new Date().getFullYear() + 4,
  dateArray: generateInitialDateArray(),
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    incrementMonth: (state) => {
      if (
        new Date(state.month + " 1, " + state.year.toString()).getMonth() + 1 >
        11
      ) {
        state.month = "January";
        state.monthNum = "1";
        state.year = state.year + 1;
      } else {
        state.month =
          months[
            new Date(state.month + " 1, " + state.year.toString()).getMonth() +
              1
          ][0];
        state.monthNum =
          months[
            new Date(state.month + " 1, " + state.year.toString()).getMonth() +
              1
          ][1];
      }
    },
    decrementMonth: (state) => {
      if (
        new Date(state.month + " 1, " + state.year.toString()).getMonth() - 1 <
        0
      ) {
        state.month = "December";
        state.monthNum = "12";
        state.year = state.year--;
      } else {
        state.month =
          months[
            new Date(state.month + " 1, " + state.year.toString()).getMonth() -
              1
          ][0];
        state.monthNum =
          months[
            new Date(state.month + " 1, " + state.year.toString()).getMonth() -
              1
          ][1];
      }
    },
    setMonth: (state, action: PayloadAction<string>) => {
      state.month = action.payload;
      state.monthNum = getMonthNum(action.payload);
    },
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    getDateArray: (state) => {
      state.dateArray = generateDateArray(state.month, state.year.toString());
    },
  },
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
