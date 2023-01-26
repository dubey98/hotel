import React from "react";

const defaultProps = {
  services: [
    {
      image: "",
      title: "Airport Pickups",
      iconClass: "fas fa-taxi",
    },
    {
      image: "",
      title: "24x7 Cafe",
      iconClass: "fas fa-coffee",
    },
    {
      image: "",
      title: "Security",
      iconClass: "fas fa-shield-alt",
    },
    {
      image: "",
      title: "Air Conditioner",
      innerHTML: (
        <div>
          <img src="/air-conditioner.png" alt="air conditioner logo" />
        </div>
      ),
    },
    {
      image: "",
      title: "Parking",
      iconClass: "fas fa-parking",
    },
    {
      image: "",
      title: "Restaurant",
      iconClass: "fas fa-utensils",
    },
    {
      image: "",
      title: "Sanitised",
      iconClass: "fas fa-hand-sparkles",
    },
  ],
};

function Services({ services }) {
  return (
    <section className="max-w-5xl mx-auto p-4">
      <div className="text-2xl p-4 text-center font-semibold uppercase">
        Our Services
      </div>
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </div>
    </section>
  );
}

function Service({ service }) {
  return (
    <div className="p-3">
      <div className="h-32 w-32  p-4 flex flex-col shadow-md">
        <div className="h-28 text-4xl text-center flex items-center justify-center">
          {service.iconClass ? (
            <i className={service.iconClass}></i>
          ) : (
            service.innerHTML
          )}
        </div>
        <div className="basis-1/4 text-center pt-2 font-light whitespace-nowrap">
          {service.title}
        </div>
      </div>
    </div>
  );
}

Services.defaultProps = defaultProps;

export default Services;
