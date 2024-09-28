
import React, { useEffect, useState } from 'react'


function MapForm() {
    const [mapSearch , setMapSearch] = useState({name})


    useEffect(()=>{

        const response = async()=>{
            fetch(API)
            .then((response)=> response.json )
        }
    })

    const handleChange = (e)=>{
        setMapSearch({...mapSearch , [e.target.name] : e.target.value})
    }
  const submit = async(e)=>{
    e.preventDefault()
    console.log("submiited")

    const seacrh = mapSearch.name
    const bbox = '76.839418,28.403108,77.314246,28.883414'; // for delhi search only
    const API = `https://api.mapbox.com/search/geocode/v6/forward?q=${seacrh}&proximity=ip&access_token=pk.eyJ1IjoidGFydW5hMjIyIiwiYSI6ImNtMWtmeHVuYTE1NjAyaXNiNzdxMXlmMmsifQ.qhduclMrOaPJZ414pk5q5A&bbox=${bbox}`

    try {
        const respone = await fetch(API);
        const data = await respone.json()
        console.log("data " , data.features)
    } catch (error) {
        console.log("error ", error)
    }


  }

   
  return (
    <>
    
   
<form class="max-w-xl mx-auto ">   
    <label htmlFor="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search martial arts s</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" name='name' value={mapSearch.name} onChange={handleChange} id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" onClick={submit} class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>



 
    </>
  )
}

export default MapForm;