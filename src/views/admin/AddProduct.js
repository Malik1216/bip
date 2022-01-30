import React from "react";

// components

import AddProduct from "components/Cards/CardAddProduct.js";
import LineChart2 from "components/Cards/LineChart2";
import LineChart3 from "components/Cards/LineChart3";


export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <LineChart2 />
        </div>
   
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <LineChart3 />
        </div>
   
      </div>
    </>
  );
}
