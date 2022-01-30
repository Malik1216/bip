import React from "react";

// components

import CardBarChartStock from "components/Cards/CardBarChartStock";
import CardBarChartStock2 from "components/Cards/CardBarChartStock2";


export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardBarChartStock color="light" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardBarChartStock2 color="light" />
        </div>
     
        
      </div>
    </>
  );
}
