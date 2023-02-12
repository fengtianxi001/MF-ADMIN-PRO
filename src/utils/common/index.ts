import dayjs from "dayjs";

export function dateFormater(date: any, format = "YYYY-MM-DD HH:mm:ss") {
  return dayjs(date).format(format);
}
