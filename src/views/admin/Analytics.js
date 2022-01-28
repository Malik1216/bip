import React from "react";

// components

import MapExample from "components/Maps/MapExample.js";
import MapUsers from "components/Maps/MapUsers.js";

import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// import LineChart2 from "components/Cards/LineChart2.js";

export default function Maps() {
  return (
    <>
    {/* <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 xl:w-12/12">
          <LineChart2 />
        </div>
      </div> */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 xl:w-12/12">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" style={{padding:"0px" }} >
            <div className="rounded-t mb-0 px-4 py-3 border-0" >
                <h1 className="font-semibold text-base text-blueGray-700" >SALES</h1> 
            </div>
             <MapExample  />
          </div>
        </div>
    
        {/* <div className="w-full px-4"> 
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          
            <MapExample  />
          </div>
        </div> */}
   
      </div>
      <div className="flex flex-wrap">
      <div className="w-full lg:w-6/12 xl:w-6/12 px-4" style={{marginTop:"20px" }} >
                <CardPageVisits />    
        </div>
        <div className="w-full lg:w-6/12 xl:w-6/12 px-4" style={{marginTop:"20px" }} >
                <CardSocialTraffic />    
        </div>
        {/* <div className="w-full px-4"> 
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          
            <MapExample  />
          </div>
        </div> */}
   
      </div>
      <div className="flex flex-wrap">
   
      <div className="w-full lg:w-12/12 xl:w-12/12">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" style={{padding:"0px" }} >
            <div className="rounded-t mb-0 px-4 py-3 border-0" >
                <h1 className="font-semibold text-base text-blueGray-700" >VISITORS</h1> 
            </div>
             <MapUsers  />
          </div>
        </div>
      </div>
    
  
   
    
    </>
  );
}
