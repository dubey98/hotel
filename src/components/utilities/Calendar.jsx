import React, { useState, useEffect } from "react";
import { weekDays, monthNames } from "../../constants";
import {
  getCalendarArray,
  convertToISO,
  isTodayOrAfter,
} from "./../../utils/calendarUtils";
import { isAfter, isBefore, parseISO, isSameDay } from "date-fns";

function Calendar({
  month,
  year,
  dateSelectedCB,
  firstDate,
  secondDate,
  selectingFirst,
  showNextMonthBtn,
  showPrevMonthBtn,
  btnClicked,
}) {
  const [dateArray, setDateArray] = useState([]);
  const [monthAndYearText, setMonthAndYearText] = useState("");
  const [currentMonth, setCurrentMonth] = useState(
    month || new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    year || new Date().getFullYear()
  );
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    setCurrentMonth(month);
    setCurrentYear(year);
  }, [month, year]);

  useEffect(() => {
    const _dateArray = getCalendarArray(
      currentYear,
      currentMonth,
      btnClicked === undefined ? false : true
    );
    const _month = monthNames[currentMonth];
    setMonthAndYearText(_month + " " + currentYear);
    setDateArray(_dateArray);
  }, [currentMonth, currentYear]);

  useEffect(() => {
    if (typeof dateSelectedCB === "function" && selectedDate !== null) {
      dateSelectedCB(selectedDate);
    }
  }, [selectedDate]);

  const changeMonth = (choice) => {
    if (btnClicked === undefined) {
      const month = currentMonth;
      const year = currentYear;
      if (choice === "prev") {
        setCurrentMonth(month === 0 ? 11 : month - 1);
        setCurrentYear(month === 0 ? year - 1 : year);
      } else {
        setCurrentMonth(month === 11 ? 0 : month + 1);
        setCurrentYear(month === 11 ? year + 1 : year);
      }
    } else if (typeof btnClicked === "function") {
      btnClicked(choice);
    }
  };

  const handleDateClick = (date) => {
    const parsedFirstDate = parseISO(convertToISO(firstDate));
    const parsedSecondDate = parseISO(convertToISO(secondDate));
    if (selectingFirst) {
      if (secondDate === "") {
        if (isTodayOrAfter(date)) {
          setSelectedDate(date);
        }
      } else {
        if (isTodayOrAfter(date) && isBefore(date, parsedSecondDate)) {
          setSelectedDate(date);
        }
      }
    } else {
      if (isAfter(date, parsedFirstDate)) {
        setSelectedDate(date);
      }
    }
  };

  return (
    <div className="p-2 rounded-lg max-w-fit bg-white min-w-[350px] mx-auto">
      <div>
        <div className="p-2 text-center flex">
          {showPrevMonthBtn === undefined || showPrevMonthBtn === true ? (
            <div onClick={() => changeMonth("prev")}>
              <i className="fas fa-angle-left text-sm p-2 flex items-center justify-center hover:bg-gray-300 rounded-full h-8 w-8"></i>
            </div>
          ) : null}
          <span className="flex-grow">{monthAndYearText}</span>
          {showNextMonthBtn === undefined || showNextMonthBtn === true ? (
            <div onClick={() => changeMonth("next")}>
              <i className="fas fa-angle-right text-sm p-2 flex items-center justify-center hover:bg-gray-300 rounded-full h-8 w-8"></i>
            </div>
          ) : null}
        </div>
        <div className="grid grid-cols-7 grid-rows-1 gap-1">
          {weekDays.map((day, index) => {
            return (
              <div
                key={index}
                className="h-12 w-12 flex justify-center items-center rounded-full text-sm font-light"
              >
                {day}
              </div>
            );
          })}
        </div>
        <div
          className={
            "grid grid-cols-7 gap-1 font-semibold " +
            (dateArray.length <= 35 ? " grid-rows-5 " : " grid-rows-6 ")
          }
        >
          {dateArray.map((date, index) => (
            <div
              key={index}
              className={
                "h-12 w-12 flex justify-center items-center rounded-full " +
                (date.before && !isSameDay(date.date, new Date())
                  ? " opacity-50 "
                  : " hover:border border-black ") +
                (isSameDay(selectedDate, date.date) ? " d " : " ") +
                (firstDate !== "" &&
                isSameDay(date.date, parseISO(convertToISO(firstDate)))
                  ? " bg-gray-600 text-white "
                  : " ") +
                (secondDate !== "" &&
                isSameDay(date.date, parseISO(convertToISO(secondDate)))
                  ? " bg-gray-600 text-white "
                  : " ") +
                (firstDate !== "" &&
                secondDate !== "" &&
                isAfter(date.date, parseISO(convertToISO(firstDate))) &&
                isBefore(date.date, parseISO(convertToISO(secondDate)))
                  ? " bg-gray-500 text-white "
                  : "")
              }
              onClick={
                date.displayDate > 0
                  ? () => handleDateClick(date.date)
                  : () => {}
              }
            >
              {date.displayDate > 0 ? date.displayDate : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
