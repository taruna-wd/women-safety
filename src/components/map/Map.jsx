
import React, { useEffect , useRef } from 'react'
import conf from "../../varibleImport/configu";
import mapboxgl from 'mapbox-gl';
import  MapForm from './MapForm';

function Map() {
    const mapContainerRef = useRef(null);
    useEffect(()=>{
        mapboxgl.accessToken = conf.mapAccessToken;
        const map = new mapboxgl.Map({
            container:  mapContainerRef.current, 
            center: [77.1025, 28.7041], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 9 // starting zoom
        });
        return () => map.remove();

    },[])
   
  return (
    <>
    
<section className="w-full md:p-10 p-5  my-3 mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
   <MapForm/>

<div className='flex justify-between mx-auto items-center w-5/6 my-4 border p-3'>
<div className='w-2/5 border justify-center flex items-center'>
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0 rounded-full">
self-defense centers
</span>
</button>
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-opacity-0 rounded-full">
martial arts centers</span>
</button>
</div>
<div className='w-3/5 h-48' ref={mapContainerRef} >
</div>
</div>
 
</section>
    </>
  )
}

export default Map