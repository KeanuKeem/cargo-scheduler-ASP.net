export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getFirstDay(month: string, year: string) {
  const dateString = month + " 1," + year;
  return new Date(dateString).toString().split(" ")[0];
}

function isLeapYear(year: number) {
  if (year % 400 === 0) return true;
  else if (year % 100 === 0) return false;
  else if (year % 4 === 0) return true;
}

function fillEmptyDates(dates: string[]) {
  const loops = 42 - dates.length;
  for (let i = 7; i < 7 + loops; i++) {
    dates.push("no " + i.toString());
  }
  return dates;
}

function getDayinMonth(month: string, year: string) {
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      return 31;
    case "February":
      if (isLeapYear(Number(year))) return 29;
      return 28;
    case "April":
    case "June":
    case "September":
    case "November":
      return 30;
  }
}

export function generateDateArray(month: string, year: string) {
  let initialArray: string[];
  const firstDay = getFirstDay(month, year);
  if (firstDay === "Sun") initialArray = [];
  else if (firstDay === "Mon") initialArray = ["no 1"];
  else if (firstDay === "Tue") initialArray = ["no 1", "no 2"];
  else if (firstDay === "Wed") initialArray = ["no 1", "no 2", "no 3"];
  else if (firstDay === "Thu") initialArray = ["no 1", "no 2", "no 3", "no 4"];
  else if (firstDay === "Fri")
    initialArray = ["no 1", "no 2", "no 3", "no 4", "no 5"];
  else initialArray = ["no 1", "no 2", "no 3", "no 4", "no 5", "no 6"];
  for (let i = 1; i <= getDayinMonth(month, year)!; i++) {
    initialArray.push("yes " + i.toString());
  }
  return fillEmptyDates(initialArray);
}

export function generateYearArray() {
  let yearArray = [2023];
  for (let i = 2024; i < new Date().getFullYear() + 5; i++) {
    yearArray.push(i);
  }
  return yearArray;
}

export function generateInitialDateArray() {
  let dateArray: string[] = [];
  for (let i = 0; i < 42; i++) {
    dateArray.push("no " + i.toString());
  }
  return dateArray;
}
