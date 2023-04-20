import React from "react";

function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 lg:p-20 md:p-16 sm:p-6">
        <div className="lg:mt-12 md:mt-2 sm:mt-1">
          <h3 className="lg:text-7xl md:text-7xl sm:text-5xl text-center font-ray font-extralight">
            Welcome
          </h3>
          <h3 className="lg:text-7xl md:text-7xl sm:text-5xl text-center font-ray font-extralight">
            To{" "}
          </h3>
          <h3 className="lg:text-7xl md:text-7xl sm:text-5xl text-center font-ray font-extralight">
            The
          </h3>
          <h3 className="lg:text-7xl md:text-7xl sm:text-5xl text-center font-ray font-extralight">
            Future
          </h3>
          <h3 className="text- text-center font-ray font-extralight mt-10">
            Building sustainable communities and promoting economic growth
          </h3>
          <h3 className="text- text-center font-ray font-extralight">
            through innovative creativity
          </h3>
        </div>

        <div>
          <img src="/images/summit.jpg" alt="" className="rounded-2xl mt-4" />
        </div>
      </div>

      <div className="flex justify-center cursor-pointer">
        <div className="w-72 mb-5 p-3 bg-neutral-500 text-white flex justify-center font-ray rounded-md">
          <h3>Intrested? Come and join us</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
