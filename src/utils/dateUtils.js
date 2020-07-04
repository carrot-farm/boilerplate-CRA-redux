import { addZero } from "./numberUtils";

/**
 * Date 객체를 지정된 날짜 포맷으로 리턴한다.
 * @param {Date} _date Date 객체
 * @param {string} _format 포맷
 * @return {string} 날짜
 * @example
 * * 지정된 날짜 리턴
 * const date = dateFormat(new Date("2020.01.02"), "yyyy-MM-dd");
 * console.log(data); // 2020-01-02
 */
export const dateFormat = (_date, _format) => {
  const date = _date || new Date();
  const format = _format || "yyyy-MM-dd";
  if (format === "yyyy-MM-dd") {
    return (
      date.getFullYear() +
      "-" +
      addZero(date.getMonth() + 1, 2) +
      "-" +
      addZero(date.getDate(), 2)
    );
  } else if (format === "yy-MM-dd") {
    const a = date.getYear();
    const yy = a >= 100 ? a - 100 : a;
    return (
      yy +
      "." +
      addZero(date.getMonth() + 1, 2) +
      "." +
      addZero(date.getDate(), 2)
    );
  } else if (format === "MM-dd") {
    return addZero(date.getMonth() + 1, 2) + "-" + addZero(date.getDate(), 2);
  } else if (format === "HH:mm") {
    return addZero(date.getHours(), 2) + ":" + addZero(date.getMinutes(), 2);
  }
};
const date = dateFormat(new Date("2020.01.02"), "yyyy-MM-dd");
console.log(date); //
