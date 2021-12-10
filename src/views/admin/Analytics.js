import React from "react";

// components

import MapExample from "components/Maps/MapExample.js";
import MapUsers from "components/Maps/MapUsers.js";

import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardStats from "components/Cards/CardStats.js";
import CardEmpty from "components/Cards/CardEmpty.js";
export default function Maps() {
  return (
    <>
   
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" style={{padding:"0px" }} >
            <div className="rounded-t mb-0 px-4 py-3 border-0" >
                <h1 className="font-semibold text-base text-blueGray-700" >SALE IN LAST 30 MINUTES.</h1> 
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
      <div className="w-full lg:w-4/12 xl:w-4/12" >
          <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 xl:w-12/12 px-4" style={{marginTop:"20px" }} >
                <CardStats
                  statSubtitle="VIEWS IN LAST 30 MINUTES"
                  statTitle="45"
                  statArrow="up"
                  statPercent="10"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last 30 minutes"
                  statIconName="fas fa-users"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-12/12 xl:w-12/12 px-4" style={{marginTop:"20px" }} >
                <CardStats
                  statSubtitle="VIEWS IN THIS WEEK"
                  statTitle="19"
                  statArrow="down"
                  statPercent="5"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-12/12 xl:w-12/12 px-4" style={{marginTop:"20px" }} >
                <CardStats
                  statSubtitle="VIEWS IN THIS MONTH"
                  statTitle="1050"
                  statArrow="down"
                  statPercent="3"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-users"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-12/12 xl:w-12/12 px-4" style={{marginTop:"20px" }} >
                <CardEmpty
                  statSubtitle="TOTAL USERS"
                  statTitle="3012"
                  statArrow="down"
                  statPercent="3"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-users"
                  statIconColor="bg-orange-500"
                />
              </div>
        
          
            </div>
      </div>
      <div className="w-full lg:w-8/12 xl:w-8/12">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" style={{padding:"0px" }} >
            <div className="rounded-t mb-0 px-4 py-3 border-0" >
                <h1 className="font-semibold text-base text-blueGray-700" >VIEWS IN LAST 30 MINUTES.</h1> 
            </div>
             <MapUsers  />
          </div>
        </div>
      </div>
      <div className="w-full mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
   
    
    </>
  );
}
