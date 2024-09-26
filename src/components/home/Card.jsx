import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Card() {
    const[quotes , setQuotes] = useState([])

  

  return (
    <>
      <section className="bg-white dark:bg-gray-900 border md:pb-32 md:pt-16">
        <h2 className=" text-center lg:py-3 text-3xl font-mono font-bold">
          Wellness Tips
        </h2>


 <div className="flex justify-between items-center px-8 gap-6">
        <Link className="w-1/3 mx-2 bg-white  text-gray-900 hover:text-white hover:bg-teal-800 text-center p-4 rounded-2xl border shadow-md hover:scale-105 transition-all ease-in-out duration-100">
             <div className="">
             <i className="fa-brands fa-bluesky text-2xl   " ></i>
             </div>
             <div className="flex flex-col gap-2">
             <h5 className="text-2xl font-extrabold">Mentally Strong:
             </h5>
             <p className="mb-2 text-xl font-medium">A strong mind builds resilience, even in the toughest storms.</p>

             </div>
        </Link>
        <Link className="w-1/3 mx-2 bg-white  text-gray-900 hover:text-white hover:bg-teal-800 text-center p-4 rounded-2xl border shadow-md hover:scale-105 transition-all ease-in-out duration-100">
             <div className="">
             <i className="fa-brands fa-bluesky text-2xl   " ></i>
             </div>
             <div className="flex flex-col gap-2">
             <h5 className="text-2xl font-extrabold">Physically Strong</h5>
             <p className="mb-2 text-xl font-medium">Train your body daily; strength is built one step ahead.</p>

             </div>
        </Link>
        <Link className="w-1/3 mx-2 bg-white  text-gray-900 hover:text-white hover:bg-teal-800 text-center p-4 rounded-2xl border shadow-md hover:scale-105 transition-all ease-in-out duration-100">
             <div className="">
             <i className="fa-brands fa-bluesky text-2xl   " ></i>
             </div>
             <div className="flex flex-col gap-2">
             <h5 className="text-2xl font-extrabold">Socially Strong</h5>
             <p className="mb-2 text-xl font-medium px-4">Confidence grows when you surround yourself with uplifting, empowering people.</p>

             </div>
        </Link>
        </div>
      </section>
    </>
  );
}

export default Card;
