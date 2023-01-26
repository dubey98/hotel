import React from "react";

const defaultProps = {
  bookingDetails: [
    {
      key: "Location",
      value: "Jungle Safari",
    },
    {
      key: "Check In",
      value: "22/03/2022",
    },
    {
      key: "Check Out",
      value: "25/03/2022",
    },
    {
      key: "Adults",
      value: 2,
    },
    {
      key: "Children",
      value: 2,
    },
    {
      key: "Rooms",
      value: "1xDeluxe",
    },
  ],
  priceDetails: [
    {
      key: "1xDeluxe",
      value: "2000",
    },
    {
      key: "Hotel Discount",
      value: "-300",
    },
    {
      key: "Coupon Discount",
      value: "300",
    },
    {
      key: "Taxes",
      value: "200",
    },
    {
      key: "Taxes",
      value: "200",
    },
    {
      key: "Total Price",
      value: "1500",
    },
  ],
};

function SideSummaryPanel({ bookingDetails, priceDetails }) {
  const bgColor = "bg-red-100";
  return (
    <div className="w-full px-1 mx-auto border rounded-lg max-w-lg">
      <div className="mb-2">
        <div className="px-2 py-1 text-lg">Booking Details</div>
        <div className="">
          <table className="table-auto w-full">
            <tbody>
              {bookingDetails.map((item, index) => (
                <tr
                  className={
                    "border border-b " + (index % 2 == 0 ? bgColor : "")
                  }
                  key={index}
                >
                  <td className="px-2">{item.key}</td>
                  <td className="text-right px-2 py-1">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="py-1">
        <div className="px-2 py-1 text-lg">Price Summary</div>
        <div className="">
          <table className="table-auto w-full">
            <tbody>
              {priceDetails.map((item, index) => (
                <tr
                  className={
                    "border border-b " + (index % 2 == 0 ? bgColor : "")
                  }
                  key={index}
                >
                  <td className="px-2">{item.key}</td>
                  <td className="text-right px-2 py-1">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

SideSummaryPanel.defaultProps = defaultProps;
export default SideSummaryPanel;
