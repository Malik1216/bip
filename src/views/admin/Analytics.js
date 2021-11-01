import React from "react";

// components

import MapExample from "components/Maps/MapExample.js";

import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardLineChart from "components/Cards/CardLineChart.js";

export default function Maps() {
  return (
    <>
   
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" style={{padding:"10px" }} >
             <h1>Sales in last 30 minutes.</h1> 
          </div>
        </div>
        <div className="w-full px-4"> 
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          
            <MapExample  />
          </div>
        </div>
   
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
      <div className="w-full mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
    
    </>
  );
}
