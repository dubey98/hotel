import React from "react";

function PriceDetails() {
  return (
    <div>
      <div className="font-semibold text-2xl">Price Details</div>
      <table className="table-fixed w-full space-y-1 font-light">
        <tr className="">
          <td className="">1X Delxe Room</td>
          <td className="text-right">&#8377;5000</td>
        </tr>
        <tr className="">
          <td className="">1X Delxe Room</td>
          <td className="text-right">&#8377;5000</td>
        </tr>
        <tr className="">
          <td className="">1X Delxe Room</td>
          <td className="text-right">&#8377;5000</td>
        </tr>
        <tr className="">
          <td className="">1X Delxe Room</td>
          <td className="text-right">&#8377;5000</td>
        </tr>
        <tr className="">
          <td className="">1X Delxe Room</td>
          <td className="text-right">&#8377;5000</td>
        </tr>
        <tr className="text-xl p-2 font-normal border border-t-black">
          <td className="">Total</td>
          <td className="text-right">&#8377;15000</td>
        </tr>
      </table>
    </div>
  );
}

export default PriceDetails;
