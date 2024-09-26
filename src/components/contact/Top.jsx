
import React from 'react'
import Form from './Form'

function Top() {
  return (
    <div>
         <section className="w-full md:p-28 p-5     call border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-4xl  text-center font-bold text-black dark:text-white">Contact us    </h5>
    <p className="mb-5 text-base  text-center text-gray sm:text-lg dark:text-gray-400 w-1/2 mx-auto">Receive daily tips on self-defense techniques, mental wellness strategies, and important safety advice. Empower yourself with small steps every day!</p>
    <div className="md:flex  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">

    <Form/>

    </div>
</section>

    </div>
  )
}

export default Top