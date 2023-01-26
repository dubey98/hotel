import React, { useState } from "react";
import Calendar from "../utilities/Calendar";

function RoomAvailability() {
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());

  const handleMonthChange = (choice) => {
    const month = calendarMonth;
    const year = calendarYear;
    if (choice === "prev") {
      setCalendarMonth(month === 0 ? 11 : month - 1);
      setCalendarYear(month === 0 ? year - 1 : year);
    } else {
      setCalendarMonth(month === 11 ? 0 : month + 1);
      setCalendarYear(month === 11 ? year + 1 : year);
    }
  };

  return (
    <div className="space-y-2">
      <div className="text-xl">Room Availability</div>
      <div className="sm:hidden">
        <Calendar year={calendarYear} month={calendarMonth} />
      </div>
      <div className="hidden bg-white p-2 sm:flex">
        <Calendar
          year={calendarYear}
          month={calendarMonth}
          showPrevMonthBtn={true}
          showNextMonthBtn={false}
          btnClicked={handleMonthChange}
        />
        <Calendar
          year={calendarMonth === 11 ? calendarYear + 1 : calendarYear}
          month={calendarMonth === 11 ? 0 : calendarMonth + 1}
          showPrevMonthBtn={false}
          showNextMonthBtn={true}
          btnClicked={handleMonthChange}
        />
      </div>
    </div>
  );
}

export default RoomAvailability;
