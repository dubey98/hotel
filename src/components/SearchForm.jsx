import React, { useState } from "react";
import Calendar from "./../components/utilities/Calendar";
import { format, setISOWeekYear } from "date-fns";

function SearchForm({
  widget,
  hideIntroOnHero,
  propCheckIn,
  propCheckOut,
  propAdults,
  propChildren,
}) {
  const navigate = {}// useNavigate();
  const isSmallScreen =false// useMediaQuery({ query: "(max-width:1280px)" });
  const isDeskTop =true// useMediaQuery({ query: "(min-width:1280px)" });

  const [checkIn, setCheckIn] = useState(propCheckIn || "");
  const [checkOut, setCheckOut] = useState(propCheckOut || "");
  const [adults, setAdults] = useState(propAdults || 2);
  const [children, setChildren] = useState(propChildren || 0);
  const [showingCalendar, setShowingCalendar] = useState(false);
  const [calendarHeading, setCalendarHeading] = useState("");
  const [selectingCheckIn, setSelectingCheckIn] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());

  const handleFocus = (e) => {
    if (e.target.name === "checkin") {
      setSelectingCheckIn(true);
      setShowingCalendar(true);
      setCalendarHeading("Select Check In Date");
    } else {
      setSelectingCheckIn(false);
      setShowingCalendar(true);
      setCalendarHeading("Select Check Out Date");
    }
    if (hideIntroOnHero) {
      hideIntroOnHero(true);
    }
  };

  const handleBlur = (e) => {};

  const closeCalendar = () => {
    setShowingCalendar(false);
    if (!selectingCheckIn && hideIntroOnHero) {
      hideIntroOnHero(false);
    }
  };

  const handleDateChange = (e) => {
    console.log(e);
  };

  const handleSelect = (e) => {
    if (e.target.name === "adults") {
      setAdults(e.target.value);
    } else {
      setChildren(e.target.value);
    }
  };

  const renderSelectionArray = (start, end) => {
    const array = [];
    for (let i = start; i <= end; i++) {
      array.push(
        <option value={i} key={i} className="p-3 md:p-2 text-sm">
          {i}
        </option>
      );
    }
    return array;
  };

  const handleSearch = () => {
    if (checkIn && checkOut && adults) {
      let newLocation = `/rooms?checkin=${checkIn}&checkout=${checkOut}&adults=${adults}&children=${children}`;
      navigate(newLocation);
    }
  };

  function handleDateSelected(date) {
    if (selectingCheckIn) {
      setCheckIn(format(date, "dd-MM-yyyy"));
    } else {
      setCheckOut(format(date, "dd-MM-yyyy"));
    }
  }

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
    <div className={" font-light max-w-6xl relative "}>
      <div>
        <div
          className={
            "p-4 md:p-2 rounded-2xl bg-white" +
            (widget ? " " : " sm:flex ") +
            (showingCalendar ? " hidden " : "")
          }
        >
          <div
            className={
              "p-2 sm:flex-grow sm:basis-1/4 relative " +
              (widget ? " space-y-2" : " md:flex")
            }
          >
            <div className="text-sm sm:whitespace-nowrap md:flex md:items-center md:pr-2">
              Check-in
            </div>
            <input
              className="p-3 md:p-2 rounded-lg text-sm border-2 w-full bg-sky-100 min-w-[250px] sm:min-w-0 outline-none"
              type="text"
              placeholder="Check in Date"
              name="checkin"
              id="checkin"
              value={checkIn}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleDateChange}
              autoComplete={"off"}
            />
            <i
              className={
                "far fa-calendar absolute right-6 top-10 pointer-events-none  " +
                (widget ? "top-10" : "md:top-5")
              }
            ></i>
          </div>
          <div
            className={
              "p-2 sm:flex-grow sm:basis-1/4 relative " +
              (widget ? "space-y-2" : "md:flex")
            }
          >
            <div className="text-sm sm:whitespace-nowrap md:flex md:items-center md:pr-2">
              Check-out
            </div>
            <input
              className="p-3 md:p-2 rounded-lg text-sm border-2 w-full bg-sky-100 outline-none"
              type="text"
              placeholder="Check out date"
              name="checkout"
              id="checkout"
              value={checkOut}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleDateChange}
              autoComplete={"off"}
            />
            <i
              className={
                "far fa-calendar absolute right-6 top-10 pointer-events-none " +
                (widget ? "" : "md:top-5")
              }
            ></i>
          </div>
          <div className="p-2 flex sm:flex-grow sm:basis-1/4 ">
            <div
              className={
                "basis-1/2 pr-2  " + (widget ? "space-y-2" : "md:flex")
              }
            >
              <div className="text-sm md:flex md:items-center md:pr-2">
                Adults
              </div>
              <select
                name="adults"
                id="adults"
                className="rounded-lg border-2 p-3 md:p-2 text-sm w-full bg-sky-100 outline-none max-h-[100px]"
                onChange={handleSelect}
                value={adults}
              >
                {renderSelectionArray(1, 10)}
              </select>
            </div>
            <div
              className={"basis-1/2 pr-2 " + (widget ? "space-y-2" : "md:flex")}
            >
              <div className="text-sm md:flex md:items-center md:pr-2">
                Children
              </div>
              <select
                name="children"
                id="children"
                className="rounded-lg border-2 p-3 md:p-2 text-sm w-full bg-sky-100 outline-none max-h-[100px]"
                onChange={handleSelect}
                value={children}
              >
                {renderSelectionArray(0, 10)}
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <button
              className="p-2 w-full bg-sky-600 text-white rounded-2xl text-xl md:px-6 sm:px-4"
              onClick={handleSearch}
            >
              <i className="fas fa-search px-2"></i>
              <span className={widget ? "px-2 " : "px-2 sm:hidden"}>
                Search
              </span>
            </button>
          </div>
        </div>
        <div
          className={
            "max-w-6xl sm:rounded-lg sm:mt-2 transition-all ease-in-out " +
            (showingCalendar ? " h-fit visible " : " h-0 invisible")
          }
        >
          <div className="mx-auto w-fit sm:rounded-lg bg-white relative">
            <div className="py-2 text-center font-semibold">
              {calendarHeading}
            </div>
            {widget || isSmallScreen ? (
              <div className={""}>
                <Calendar
                  dateSelectedCB={handleDateSelected}
                  year={calendarYear}
                  month={calendarMonth}
                  firstDate={checkIn}
                  secondDate={checkOut}
                  selectingFirst={selectingCheckIn}
                />
              </div>
            ) : null}
            {!widget && (
              <div className={"bg-white p-2 hidden lg:flex "}>
                <Calendar
                  dateSelectedCB={handleDateSelected}
                  year={calendarYear}
                  month={calendarMonth}
                  firstDate={checkIn}
                  secondDate={checkOut}
                  selectingFirst={selectingCheckIn}
                  showPrevMonthBtn={true}
                  showNextMonthBtn={false}
                  btnClicked={handleMonthChange}
                />
                <Calendar
                  dateSelectedCB={handleDateSelected}
                  year={calendarMonth === 11 ? calendarYear + 1 : calendarYear}
                  month={calendarMonth === 11 ? 0 : calendarMonth + 1}
                  firstDate={checkIn}
                  secondDate={checkOut}
                  selectingFirst={selectingCheckIn}
                  showPrevMonthBtn={false}
                  showNextMonthBtn={true}
                  btnClicked={handleMonthChange}
                />
              </div>
            )}
            <div
              className="text-center sm:m-1 sm:py-2 py-1"
              onClick={() => closeCalendar("closeDirectly")}
            >
              <button className="text-center px-6 py-1 rounded-2xl font-semibold w-full">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
