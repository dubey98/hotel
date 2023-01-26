import React, { useState, useEffect } from "react";

const defaultProps = {
  steps: [
    {
      title: "Search Rooms",
      completed: true,
    },
    {
      title: "Review Booking",
      completed: true,
    },
    {
      title: "Provide Details",
      completed: true,
    },
    {
      title: "Complete Payment",
      completed: false,
    },
    {
      title: "Confirmation",
      completed: false,
    },
  ],
};

function ProgressSteps({ steps }) {
  const [completedSteps, setCompletedSteps] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);

  useEffect(() => {
    if (Array.isArray(steps)) {
      setCompletedSteps(steps.filter((step) => step.completed === true).length);
      setTotalSteps(steps.length);
    }
  }, [steps]);

  // TODO: make it work better in the mobile view with whitespace and growth fixed
  return (
    <div className="p-0 text-xs sm:p-4">
      <div className="relative flex justify-center">
        <div
          className={"absolute h-1 mt-2 rounded-full border border-amber-600 "}
          style={{
            width: `${((totalSteps * 2 - 2) * 100) / (2 * totalSteps)}%`,
          }}
        >
          <div
            className={"h-full border-2 border-amber-600"}
            style={{
              width: `${((completedSteps - 1) * 100) / (totalSteps - 1)}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="flex">
        {steps.map((step, index) => {
          return (
            <div className="flex-grow" key={index}>
              <div className="flex justify-center">
                <div
                  className={
                    "border-amber-600 rounded-full p-2 w-fit z-20 bg-white border " +
                    (step.completed ? "bg-amber-600" : "")
                  }
                ></div>
              </div>
              <div className="py-1 px-2 sm:px-3 text-center">{step.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ProgressSteps.defaultProps = defaultProps;
export default ProgressSteps;
