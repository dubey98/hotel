import isBefore from "date-fns/isBefore";
import getDaysInMonth from "date-fns/getDaysInMonth";
import getDay from "date-fns/getDay";
import { isAfter, isSameDay } from "date-fns";

/**
 * returns the whole array to be displayed in calendar
 * @param {Number} year Full Year
 * @param {Number} month month starting with index 0
 */
function getCalendarArray(year, month, onlyCurrentMonth) {
  const daysInMonth = getDaysInMonth(new Date(year, month));
  const startOfMonth = getDay(new Date(year, month, 1));
  const daysInPrevMonth = getDaysInMonth(new Date(year, month - 1));
  const _dateArray = [];
  // pushing days of prev month
  for (let i = daysInPrevMonth - startOfMonth + 1; i <= daysInPrevMonth; i++) {
    _dateArray.push({
      displayDate: onlyCurrentMonth ? 0 : i,
      before: isBefore(new Date(year, month - 1, i), new Date()),
      date: onlyCurrentMonth ? undefined : new Date(year, month - 1, i),
    });
  }
  // days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    _dateArray.push({
      displayDate: i,
      before: isBefore(new Date(year, month, i), new Date()),
      date: new Date(year, month, i),
    });
  }
  // days in the upcoming month
  const length = _dateArray.length;
  if (length <= 35) {
    for (let i = 1; i <= 35 - length; i++) {
      _dateArray.push({
        displayDate: onlyCurrentMonth ? 0 : i,
        before: isBefore(new Date(year, (month + 1) % 12, i), new Date()),
        date: onlyCurrentMonth ? undefined : new Date(year, month + 1, i),
      });
    }
  } else {
    for (let i = 1; i <= 42 - length; i++) {
      _dateArray.push({
        displayDate: onlyCurrentMonth ? 0 : i,
        before: isBefore(new Date(year, (month + 1) % 12, i), new Date()),
        date: onlyCurrentMonth ? undefined : new Date(year, month + 1, i),
      });
    }
  }
  return _dateArray;
}

function convertToISO(dateString) {
  if (dateString && dateString.length > 0) {
    const dateParts = dateString.split("-");
    return dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
  }
}

function isTodayOrAfter(date) {
  return isSameDay(date, new Date()) || isAfter(date, new Date());
}

export { getCalendarArray, convertToISO, isTodayOrAfter };
