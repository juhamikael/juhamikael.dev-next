import { format } from "date-fns";

export const parseDate = (date: Date) => {
  const parsedDate = new Date(date);
  const day = ("0" + parsedDate.getDate()).slice(-2);
  const month = ("0" + (parsedDate.getMonth() + 1)).slice(-2);
  const year = parsedDate.getFullYear();
  const monthName = format(new Date(date), "MMM");
  const prettifyDate = `${day}/${month}/${year}`;
  return { month, year, monthName, prettifyDate };
};

export const isDateLaterThanNow = (date: Date): boolean => {
  const parsedDate = new Date(date);
  const now = new Date();
  return parsedDate > now;
};
