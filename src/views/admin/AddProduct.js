import React from "react";

// components

import AddProduct from "components/Cards/CardAddProduct.js";
import LineChart2 from "components/Cards/LineChart2";


export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <LineChart2 />
        </div>
   
      </div>
    </>
  );
}
