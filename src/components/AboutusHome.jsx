import React from "react";
import images from "./../data/images.json";

function AboutusHome() {
  return (
    <section className="max-w-6xl mx-auto p-4">
      <div className="p-4 sm:flex sm:h-screen">
        <div
          className="w-full h-96 sm:h-full sm:basis-1/2 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${images["lobby-1"]})` }}
        ></div>
        <div className="flex items-center sm:basis-1/2">
          <div>
            <div className="text-2xl font-semibold p-2">Heading</div>
            <div className="p-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit id
              aliquid quia, debitis dolore amet harum commodi aliquam
              reprehenderit, sunt quos nisi placeat ea consequuntur eum,
              accusantium distinctio? Dolores, ab!
            </div>
            <div className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem deleniti consectetur provident omnis consequatur et?
              Voluptas, ratione eaque repellat necessitatibus cum, qui nobis,
              ipsum impedit error amet ex beatae minus.
            </div>
            <div className="p-2 flex justify-end sm:justify-start">
              <div className="p-2 bg-sky-600 w-32 text-center rounded-full text-white">
                Read More...
              </div>
            </div>
            <div
              className="h-48 w-full sm:-ml-20 sm:mt-10 bg-center bg-cover bg-no-repeat shadow-xl border-2 border-white"
              style={{ backgroundImage: `url(${images["homepage-1"]})` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutusHome;
