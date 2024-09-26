
import React from 'react'


function CallToAction() {
  return (
    <div>
        

<section className="w-full md:p-28 p-5  text-center call border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-3xl font-bold text-black dark:text-white">Become Stronger Every Day</h5>
    <p className="mb-5 text-base text-gray sm:text-lg dark:text-gray-400 w-1/2 mx-auto">Receive daily tips on self-defense techniques, mental wellness strategies, and important safety advice. Empower yourself with small steps every day!</p>
    <div className="md:flex  items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">

    <button className="relative inline-flex items-center justify-center p-0.5 s me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-500 to-blue-500 group-hover:from-teal-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Explore More Tips
                </span>
              </button>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-500 to-blue-500 group-hover:from-teal-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Subscribe                </span>
              </button>

    </div>
</section>


    </div>
  )
}

export default CallToAction