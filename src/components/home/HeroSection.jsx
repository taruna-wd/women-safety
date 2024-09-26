import React from "react";

function HeroSection() {
  return (
    <div>
      <section className=" mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-teal-600 mb-4  uppercase ">
              <span className="">Empower Yourself </span> <br />
              <span className="">Defend Yourself</span>
            </h2>
            <p className="text-gray-700 mb-8">
              Empowering women and girls with the knowledge and skills to
              protect themselves. Learn self-defense, martial arts, and access
              local support services for mental and physical well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-500 to-blue-500 group-hover:from-teal-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get Started
                </span>
              </button>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-500 to-blue-500 group-hover:from-teal-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Learn More
                </span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-teal-500 rounded-lg  mx-auto flex justify-center text-white font-bold text-center">
              <img
                src="src\assets\bg.jpeg"
                className="w-3/4"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
