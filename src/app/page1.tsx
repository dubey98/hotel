"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const images = {
  "homepage-1": "https://i.ibb.co/tKcTXNg/homepage-1.jpg",
  "lobby-1": "https://i.ibb.co/1JJsctL/lobby-1.jpg",
  "spa-1": "https://i.ibb.co/YZwQq2K/spa-1.jpg",
  "res-2": "https://i.ibb.co/3dCRFpv/res-2.jpg",
  "res-1": "https://i.ibb.co/PFhJd7k/res-1.jpg",
  "pool-1": "https://i.ibb.co/BqXbVgR/pool-1.jpg",
  "homepage-2": "https://i.ibb.co/dKLcVq1/homepage-2.jpg",
  "gym-1": "https://i.ibb.co/h811kfN/gym-1.jpg",
  "about-11": "https://i.ibb.co/T2CgGjF/about-11.jpg",
  "about-1": "https://i.ibb.co/7jm9pnS/about-1.jpg",
  "about-2": "https://i.ibb.co/HKG2D6S/about-2.jpg",
  "about-3": "https://i.ibb.co/mRvMNpY/about-3.jpg",
  "about-4": "https://i.ibb.co/0FZxyc2/about-4.jpg",
  "about-5": "https://i.ibb.co/Rpykngp/about-5.jpg",
  "about-6": "https://i.ibb.co/vZghWYJ/about-6.jpg",
  "about-7": "https://i.ibb.co/HYtQJ0W/about-7.jpg",
  "about-8": "https://i.ibb.co/qnTYSG2/about-8.jpg",
  "about-9": "https://i.ibb.co/9q1KvhH/about-9.jpg",
  "about-10": "https://i.ibb.co/Wfmp2yw/about-10.jpg",
  "room-1": "https://i.ibb.co/rsMKdZb/room-1.jpg",
  "room-2": "https://i.ibb.co/2ng6x3k/room-2.jpg",
  "room-3": "https://i.ibb.co/2669gQ5/room-3.jpg",
  "location-1": "https://i.ibb.co/yqdZT7K/location-1.jpg",
  "location-2": "https://i.ibb.co/WWpVftb/location-2.jpg",
  "location-3": "https://i.ibb.co/ysVnsrD/location-3.jpg",
};

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const monthNames = [
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



export default function Home() {
  return (
    <div>
      {/* <Hero />
      <AboutusHome />
      <Services />
      <RoomsWidget />
      <Around />
      <Locations />
      <Testimonials /> */}
    </div>
  );
}

// function Hero() {
//   const [searchActive, setSearchActive] = useState(false);
//   const [hideIntro, setHideIntro] = useState(false);

//   function toggleSearchActivation() {
//     setSearchActive(!searchActive);
//   }

//   return (
//     <header
//       className="flex flex-col justify-center items-center h-screen w-full bg-cover bg-no-repeat bg-center relative"
//       style={{ backgroundImage: `url(${images["homepage-2"]})` }}
//     >
//       <div
//         className={
//           "text-center flex flex-col justify-center pt-8 text-white text-shadow " +
//           (hideIntro ? " hidden" : "")
//         }
//       >
//         <div className="text-6xl p-4 font-bold">Welcome to the Continental</div>
//         <div className="p-2 max-w-2xl mx-auto">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
//           repudiandae, molestias et debitis distinctio animi vero
//         </div>
//       </div>
//       <div
//         className={
//           "hidden sm:block sm:basis-1/2 sm:p-4 transition-all ease-in-out absolute duration-200  " +
//           (hideIntro ? " top-[10vh] " : " top-[75vh]")
//         }
//       >
//         <SearchForm hideIntroOnHero={setHideIntro} />
//       </div>
//       <div className="basis-1/4 flex items-center sm:hidden">
//         <button
//           className="p-4 px-8 rounded-lg bg-white"
//           onClick={() => toggleSearchActivation()}
//         >
//           Check Room Availability
//         </button>
//       </div>
//       <MobileBottomModal
//         active={searchActive}
//         toggleActivation={toggleSearchActivation}
//       >
//         <SearchForm />
//       </MobileBottomModal>
//     </header>
//   );
// }

// function AboutusHome() {
//   return (
//     <section className="max-w-6xl mx-auto p-4">
//       <div className="p-4 sm:flex sm:h-screen">
//         <div
//           className="w-full h-96 sm:h-full sm:basis-1/2 bg-center bg-cover bg-no-repeat"
//           style={{ backgroundImage: `url(${images["lobby-1"]})` }}
//         ></div>
//         <div className="flex items-center sm:basis-1/2">
//           <div>
//             <div className="text-2xl font-semibold p-2">Heading</div>
//             <div className="p-2">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit id
//               aliquid quia, debitis dolore amet harum commodi aliquam
//               reprehenderit, sunt quos nisi placeat ea consequuntur eum,
//               accusantium distinctio? Dolores, ab!
//             </div>
//             <div className="p-2">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Voluptatem deleniti consectetur provident omnis consequatur et?
//               Voluptas, ratione eaque repellat necessitatibus cum, qui nobis,
//               ipsum impedit error amet ex beatae minus.
//             </div>
//             <div className="p-2 flex justify-end sm:justify-start">
//               <div className="p-2 bg-sky-600 w-32 text-center rounded-full text-white">
//                 Read More...
//               </div>
//             </div>
//             <div
//               className="h-48 w-full sm:-ml-20 sm:mt-10 bg-center bg-cover bg-no-repeat shadow-xl border-2 border-white"
//               style={{ backgroundImage: `url(${images["homepage-1"]})` }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Services() {
//   const services = [
//     {
//       image: "",
//       title: "Airport Pickups",
//       iconClass: "fas fa-taxi",
//     },
//     {
//       image: "",
//       title: "24x7 Cafe",
//       iconClass: "fas fa-coffee",
//     },
//     {
//       image: "",
//       title: "Security",
//       iconClass: "fas fa-shield-alt",
//     },
//     {
//       image: "",
//       title: "Air Conditioner",
//       innerHTML: (
//         <div>
//           <img src={ac} alt="air conditioner logo" />
//         </div>
//       ),
//     },
//     {
//       image: "",
//       title: "Parking",
//       iconClass: "fas fa-parking",
//     },
//     {
//       image: "",
//       title: "Restaurant",
//       iconClass: "fas fa-utensils",
//     },
//     {
//       image: "",
//       title: "Sanitised",
//       iconClass: "fas fa-hand-sparkles",
//     },
//   ];

//   return (
//     <section className="max-w-5xl mx-auto p-4">
//       <div className="text-2xl p-4 text-center font-semibold uppercase">
//         Our Services
//       </div>
//       <div className="flex flex-wrap justify-center">
//         {services.map((service, index) => (
//           <Service service={service} key={index} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function Service({ service }) {
//   return (
//     <div className="p-3">
//       <div className="h-32 w-32  p-4 flex flex-col shadow-md">
//         <div className="h-28 text-4xl text-center flex items-center justify-center">
//           {service.iconClass ? (
//             <i className={service.iconClass}></i>
//           ) : (
//             service.innerHTML
//           )}
//         </div>
//         <div className="basis-1/4 text-center pt-2 font-light whitespace-nowrap">
//           {service.title}
//         </div>
//       </div>
//     </div>
//   );
// }

// function RoomsWidget({ title, roomList }) {
//   return (
//     <div className="p-4 max-w-5xl mx-auto">
//       <div className="text-2xl font-semibold text-center uppercase p-4">
//         {title}
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {roomList.map((room, index) => (
//           <Room room={room} widget={true} key={index} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function Around() {
//   return (
//     <section className="p-4 max-w-6xl mx-auto box-border">
//       <div className="p-4 text-2xl font-semibold text-center">
//         Around the Hotel
//       </div>
//       <div className="p-3 space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-3 md:grid-cols-4">
//         <div className="w-full h-72 md:row-span-2 md:col-span-2 md:h-full">
//           <div className="h-full w-full">
//             <img
//               className="object-cover h-full w-full"
//               src={images["res-1"]}
//               alt="restaurant"
//             />
//           </div>
//         </div>
//         <div className="w-full h-72 md:col-span-2">
//           <div className="h-full w-full">
//             <img
//               className="object-cover h-full w-full"
//               src={images["pool-1"]}
//               alt="pool"
//             />
//           </div>
//         </div>
//         <div className="w-full h-72">
//           <div className=" h-full w-full">
//             <img
//               className="object-cover h-full w-full"
//               src={images["gym-1"]}
//               alt="Gym"
//             />
//           </div>
//         </div>
//         <div className="w-full h-72">
//           <div className="bg-blue-400 h-full w-full">
//             <img
//               className="object-cover h-full w-full"
//               src={images["spa-1"]}
//               alt="spa"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Locations({ title, locations }) {
//   return (
//     <section className="max-w-5xl mx-auto p-4">
//       <div className="w-full ">
//         <div className="text-2xl font-semibold text-center p-4 uppercase">
//           {title}
//         </div>
//         <div className="p-2 flex flex-wrap">
//           {locations.map((location, index) => (
//             <Location location={location} key={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Location({ location }) {
//   const [active, setActive] = useState(false);
//   // const navigation = useNavigate();

//   function resolveImage(name) {
//     return name === "location1"
//       ? images["location-1"]
//       : name === "location2"
//       ? images["location-2"]
//       : images["location-3"];
//   }

//   // const handleBookingClick = (slug) => {
//   //   navigation("/rooms?location=" + slug);
//   // };

//   return (
//     <div className="w-full sm:w-1/2 md:w-1/3">
//       <div
//         className="h-96 flex flex-col justify-end m-2 bg-cover bg-no-repeat bg-center relative "
//         onMouseEnter={() => setActive(true)}
//         onMouseLeave={() => setActive(false)}
//         style={{ backgroundImage: `url(${resolveImage(location.image)})` }}
//       >
//         <Opacity controller={active} />
//         <div className="text-center p-4 m-2 rounded-lg bg-white w-3/4 mx-auto z-20">
//           <div className="font-semibold text-lg uppercase">
//             {location.title}
//           </div>
//           <div
//             className={
//               " transition-opacity ease-in-out duration-1000 " +
//               (active
//                 ? "  visible h-auto opacity-100"
//                 : " invisible h-0 opacity-0")
//             }
//           >
//             <div className="font-light mb-2">{location.description}</div>
//             <button
//               className="border-2 p-2 w-3/4 mx-auto rounded-lg bg-sky-600 text-white font-semibold cursor-pointer"
//               onClick={() => handleBookingClick(location.slug)}
//             >
//               {location.buttonText}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Testimonials({ testimonies }) {
//   return (
//     <section className="p-4">
//       <div className="p-4 text-2xl font-semibold text-center uppercase">
//         What our guests Say
//       </div>
//       <div className="max-w-2xl mx-auto p-2">
//         <Carousal sideButtons>
//           {testimonies.map((testimony, index) => (
//             <CarousalItem key={index}>
//               <TestiMony testimony={testimony} />
//             </CarousalItem>
//           ))}
//         </Carousal>
//       </div>
//     </section>
//   );
// }

// function TestiMony({ testimony }) {
//   return (
//     <div className="p-2 pt-12 whitespace-normal">
//       <div className="w-full rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 max-w-md">
//         <div className="w-full pt-1 pb-5">
//           <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
//             <img
//               src="https://randomuser.me/api/portraits/men/15.jpg"
//               alt={testimony.imageAlt}
//             />
//           </div>
//         </div>
//         <div className="w-full mb-10">
//           <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
//             “
//           </div>
//           <p className="text-sm text-gray-600 text-center px-5">
//             {testimony.comment}
//           </p>
//           <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
//             ”
//           </div>
//         </div>
//         <div className="w-full">
//           <p className="text-md text-indigo-500 font-bold text-center">
//             {testimony.author}
//           </p>
//           <p className="text-xs text-gray-500 text-center">
//             {testimony.date.toDateString()}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// function SearchForm({
//   widget,
//   hideIntroOnHero,
//   propCheckIn,
//   propCheckOut,
//   propAdults,
//   propChildren,
// }) {
//   // const navigate = useNavigate();
//   const isSmallScreen = false//useMediaQuery({ query: "(max-width:1280px)" });
//   const isDeskTop = true//useMediaQuery({ query: "(min-width:1280px)" });

//   const [checkIn, setCheckIn] = useState(propCheckIn || "");
//   const [checkOut, setCheckOut] = useState(propCheckOut || "");
//   const [adults, setAdults] = useState(propAdults || 2);
//   const [children, setChildren] = useState(propChildren || 0);
//   const [showingCalendar, setShowingCalendar] = useState(false);
//   const [calendarHeading, setCalendarHeading] = useState("");
//   const [selectingCheckIn, setSelectingCheckIn] = useState(false);
//   const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
//   const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());

//   const handleFocus = (e) => {
//     if (e.target.name === "checkin") {
//       setSelectingCheckIn(true);
//       setShowingCalendar(true);
//       setCalendarHeading("Select Check In Date");
//     } else {
//       setSelectingCheckIn(false);
//       setShowingCalendar(true);
//       setCalendarHeading("Select Check Out Date");
//     }
//     if (hideIntroOnHero) {
//       hideIntroOnHero(true);
//     }
//   };

//   const handleBlur = (e) => {};

//   const closeCalendar = () => {
//     setShowingCalendar(false);
//     if (!selectingCheckIn && hideIntroOnHero) {
//       hideIntroOnHero(false);
//     }
//   };

//   const handleDateChange = (e) => {
//     console.log(e);
//   };

//   const handleSelect = (e) => {
//     if (e.target.name === "adults") {
//       setAdults(e.target.value);
//     } else {
//       setChildren(e.target.value);
//     }
//   };

//   const renderSelectionArray = (start, end) => {
//     const array = [];
//     for (let i = start; i <= end; i++) {
//       array.push(
//         <option value={i} key={i} className="p-3 md:p-2 text-sm">
//           {i}
//         </option>
//       );
//     }
//     return array;
//   };

//   const handleSearch = () => {
//     if (checkIn && checkOut && adults) {
//       let newLocation = `/rooms?checkin=${checkIn}&checkout=${checkOut}&adults=${adults}&children=${children}`;
//       navigate(newLocation);
//     }
//   };

//   function handleDateSelected(date) {
//     if (selectingCheckIn) {
//       setCheckIn(format(date, "dd-MM-yyyy"));
//     } else {
//       setCheckOut(format(date, "dd-MM-yyyy"));
//     }
//   }

//   const handleMonthChange = (choice) => {
//     const month = calendarMonth;
//     const year = calendarYear;
//     if (choice === "prev") {
//       setCalendarMonth(month === 0 ? 11 : month - 1);
//       setCalendarYear(month === 0 ? year - 1 : year);
//     } else {
//       setCalendarMonth(month === 11 ? 0 : month + 1);
//       setCalendarYear(month === 11 ? year + 1 : year);
//     }
//   };

//   return (
//     <div className={" font-light max-w-6xl relative "}>
//       <div>
//         <div
//           className={
//             "p-4 md:p-2 rounded-2xl bg-white" +
//             (widget ? " " : " sm:flex ") +
//             (showingCalendar ? " hidden " : "")
//           }
//         >
//           <div
//             className={
//               "p-2 sm:flex-grow sm:basis-1/4 relative " +
//               (widget ? " space-y-2" : " md:flex")
//             }
//           >
//             <div className="text-sm sm:whitespace-nowrap md:flex md:items-center md:pr-2">
//               Check-in
//             </div>
//             <input
//               className="p-3 md:p-2 rounded-lg text-sm border-2 w-full bg-sky-100 min-w-[250px] sm:min-w-0 outline-none"
//               type="text"
//               placeholder="Check in Date"
//               name="checkin"
//               id="checkin"
//               value={checkIn}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               onChange={handleDateChange}
//               autoComplete={"off"}
//             />
//             <i
//               className={
//                 "far fa-calendar absolute right-6 top-10 pointer-events-none  " +
//                 (widget ? "top-10" : "md:top-5")
//               }
//             ></i>
//           </div>
//           <div
//             className={
//               "p-2 sm:flex-grow sm:basis-1/4 relative " +
//               (widget ? "space-y-2" : "md:flex")
//             }
//           >
//             <div className="text-sm sm:whitespace-nowrap md:flex md:items-center md:pr-2">
//               Check-out
//             </div>
//             <input
//               className="p-3 md:p-2 rounded-lg text-sm border-2 w-full bg-sky-100 outline-none"
//               type="text"
//               placeholder="Check out date"
//               name="checkout"
//               id="checkout"
//               value={checkOut}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               onChange={handleDateChange}
//               autoComplete={"off"}
//             />
//             <i
//               className={
//                 "far fa-calendar absolute right-6 top-10 pointer-events-none " +
//                 (widget ? "" : "md:top-5")
//               }
//             ></i>
//           </div>
//           <div className="p-2 flex sm:flex-grow sm:basis-1/4 ">
//             <div
//               className={
//                 "basis-1/2 pr-2  " + (widget ? "space-y-2" : "md:flex")
//               }
//             >
//               <div className="text-sm md:flex md:items-center md:pr-2">
//                 Adults
//               </div>
//               <select
//                 name="adults"
//                 id="adults"
//                 className="rounded-lg border-2 p-3 md:p-2 text-sm w-full bg-sky-100 outline-none max-h-[100px]"
//                 onChange={handleSelect}
//                 value={adults}
//               >
//                 {renderSelectionArray(1, 10)}
//               </select>
//             </div>
//             <div
//               className={"basis-1/2 pr-2 " + (widget ? "space-y-2" : "md:flex")}
//             >
//               <div className="text-sm md:flex md:items-center md:pr-2">
//                 Children
//               </div>
//               <select
//                 name="children"
//                 id="children"
//                 className="rounded-lg border-2 p-3 md:p-2 text-sm w-full bg-sky-100 outline-none max-h-[100px]"
//                 onChange={handleSelect}
//                 value={children}
//               >
//                 {renderSelectionArray(0, 10)}
//               </select>
//             </div>
//           </div>
//           <div className="flex flex-col justify-center items-center p-2">
//             <button
//               className="p-2 w-full bg-sky-600 text-white rounded-2xl text-xl md:px-6 sm:px-4"
//               onClick={handleSearch}
//             >
//               <i className="fas fa-search px-2"></i>
//               <span className={widget ? "px-2 " : "px-2 sm:hidden"}>
//                 Search
//               </span>
//             </button>
//           </div>
//         </div>
//         <div
//           className={
//             "max-w-6xl sm:rounded-lg sm:mt-2 transition-all ease-in-out " +
//             (showingCalendar ? " h-fit visible " : " h-0 invisible")
//           }
//         >
//           <div className="mx-auto w-fit sm:rounded-lg bg-white relative">
//             <div className="py-2 text-center font-semibold">
//               {calendarHeading}
//             </div>
//             {widget || isSmallScreen ? (
//               <div className={""}>
//                 <Calendar
//                   dateSelectedCB={handleDateSelected}
//                   year={calendarYear}
//                   month={calendarMonth}
//                   firstDate={checkIn}
//                   secondDate={checkOut}
//                   selectingFirst={selectingCheckIn}
//                 />
//               </div>
//             ) : null}
//             {!widget && (
//               <div className={"bg-white p-2 hidden lg:flex "}>
//                 <Calendar
//                   dateSelectedCB={handleDateSelected}
//                   year={calendarYear}
//                   month={calendarMonth}
//                   firstDate={checkIn}
//                   secondDate={checkOut}
//                   selectingFirst={selectingCheckIn}
//                   showPrevMonthBtn={true}
//                   showNextMonthBtn={false}
//                   btnClicked={handleMonthChange}
//                 />
//                 <Calendar
//                   dateSelectedCB={handleDateSelected}
//                   year={calendarMonth === 11 ? calendarYear + 1 : calendarYear}
//                   month={calendarMonth === 11 ? 0 : calendarMonth + 1}
//                   firstDate={checkIn}
//                   secondDate={checkOut}
//                   selectingFirst={selectingCheckIn}
//                   showPrevMonthBtn={false}
//                   showNextMonthBtn={true}
//                   btnClicked={handleMonthChange}
//                 />
//               </div>
//             )}
//             <div
//               className="text-center sm:m-1 sm:py-2 py-1"
//               onClick={() => closeCalendar("closeDirectly")}
//             >
//               <button className="text-center px-6 py-1 rounded-2xl font-semibold w-full">
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// function MobileBottomModal({ children, active, toggleActivation }) {
//   const handleClose = () => {
//     toggleActivation();
//   };

//   useEffect(() => {
//     // TODO: BUG: after page refresh this event fires the first time checkin is clicked
//     // function handleWindowClick(e) {
//     //   if (active && e.target.id === "mobileModal") {
//     //     handleClose();
//     //   }
//     // }
//     // window.addEventListener("click", handleWindowClick);
//     // return () => {
//     //   window.removeEventListener("click", handleWindowClick);
//     // };
//   }, [active]);

//   return (
//     <div
//       className={"fixed h-screen w-full z-0 " + (active ? "" : "hidden")}
//       id="mobileModal"
//     >
//       <div
//         className={"fixed bottom-0 left-0 w-full bg-white rounded-t-2xl z-10 "}
//         id="mobileModal"
//       >
//         {children}
//         <div className="flex justify-center text-xl py-2">
//           <div
//             onClick={handleClose}
//             className="hover:bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center"
//           >
//             &times;
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// function Calendar({
//   month,
//   year,
//   dateSelectedCB,
//   firstDate,
//   secondDate,
//   selectingFirst,
//   showNextMonthBtn,
//   showPrevMonthBtn,
//   btnClicked,
// }) {
//   const [dateArray, setDateArray] = useState([]);
//   const [monthAndYearText, setMonthAndYearText] = useState("");
//   const [currentMonth, setCurrentMonth] = useState(
//     month || new Date().getMonth()
//   );
//   const [currentYear, setCurrentYear] = useState(
//     year || new Date().getFullYear()
//   );
//   const [selectedDate, setSelectedDate] = useState(null);

//   useEffect(() => {
//     setCurrentMonth(month);
//     setCurrentYear(year);
//   }, [month, year]);

//   useEffect(() => {
//     const _dateArray = getCalendarArray(
//       currentYear,
//       currentMonth,
//       btnClicked === undefined ? false : true
//     );
//     const _month = monthNames[currentMonth];
//     setMonthAndYearText(_month + " " + currentYear);
//     setDateArray(_dateArray);
//   }, [currentMonth, currentYear]);

//   useEffect(() => {
//     if (typeof dateSelectedCB === "function" && selectedDate !== null) {
//       dateSelectedCB(selectedDate);
//     }
//   }, [selectedDate]);

//   const changeMonth = (choice) => {
//     if (btnClicked === undefined) {
//       const month = currentMonth;
//       const year = currentYear;
//       if (choice === "prev") {
//         setCurrentMonth(month === 0 ? 11 : month - 1);
//         setCurrentYear(month === 0 ? year - 1 : year);
//       } else {
//         setCurrentMonth(month === 11 ? 0 : month + 1);
//         setCurrentYear(month === 11 ? year + 1 : year);
//       }
//     } else if (typeof btnClicked === "function") {
//       btnClicked(choice);
//     }
//   };

//   const handleDateClick = (date) => {
//     const parsedFirstDate = parseISO(convertToISO(firstDate));
//     const parsedSecondDate = parseISO(convertToISO(secondDate));
//     if (selectingFirst) {
//       if (secondDate === "") {
//         if (isTodayOrAfter(date)) {
//           setSelectedDate(date);
//         }
//       } else {
//         if (isTodayOrAfter(date) && isBefore(date, parsedSecondDate)) {
//           setSelectedDate(date);
//         }
//       }
//     } else {
//       if (isAfter(date, parsedFirstDate)) {
//         setSelectedDate(date);
//       }
//     }
//   };

//   return (
//     <div className="p-2 rounded-lg max-w-fit bg-white min-w-[350px] mx-auto">
//       <div>
//         <div className="p-2 text-center flex">
//           {showPrevMonthBtn === undefined || showPrevMonthBtn === true ? (
//             <div onClick={() => changeMonth("prev")}>
//               <i className="fas fa-angle-left text-sm p-2 flex items-center justify-center hover:bg-gray-300 rounded-full h-8 w-8"></i>
//             </div>
//           ) : null}
//           <span className="flex-grow">{monthAndYearText}</span>
//           {showNextMonthBtn === undefined || showNextMonthBtn === true ? (
//             <div onClick={() => changeMonth("next")}>
//               <i className="fas fa-angle-right text-sm p-2 flex items-center justify-center hover:bg-gray-300 rounded-full h-8 w-8"></i>
//             </div>
//           ) : null}
//         </div>
//         <div className="grid grid-cols-7 grid-rows-1 gap-1">
//           {weekDays.map((day, index) => {
//             return (
//               <div
//                 key={index}
//                 className="h-12 w-12 flex justify-center items-center rounded-full text-sm font-light"
//               >
//                 {day}
//               </div>
//             );
//           })}
//         </div>
//         <div
//           className={
//             "grid grid-cols-7 gap-1 font-semibold " +
//             (dateArray.length <= 35 ? " grid-rows-5 " : " grid-rows-6 ")
//           }
//         >
//           {dateArray.map((date, index) => (
//             <div
//               key={index}
//               className={
//                 "h-12 w-12 flex justify-center items-center rounded-full " +
//                 (date.before && !isSameDay(date.date, new Date())
//                   ? " opacity-50 "
//                   : " hover:border border-black ") +
//                 (isSameDay(selectedDate, date.date) ? " d " : " ") +
//                 (firstDate !== "" &&
//                 isSameDay(date.date, parseISO(convertToISO(firstDate)))
//                   ? " bg-gray-600 text-white "
//                   : " ") +
//                 (secondDate !== "" &&
//                 isSameDay(date.date, parseISO(convertToISO(secondDate)))
//                   ? " bg-gray-600 text-white "
//                   : " ") +
//                 (firstDate !== "" &&
//                 secondDate !== "" &&
//                 isAfter(date.date, parseISO(convertToISO(firstDate))) &&
//                 isBefore(date.date, parseISO(convertToISO(secondDate)))
//                   ? " bg-gray-500 text-white "
//                   : "")
//               }
//               onClick={
//                 date.displayDate > 0
//                   ? () => handleDateClick(date.date)
//                   : () => {}
//               }
//             >
//               {date.displayDate > 0 ? date.displayDate : ""}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }