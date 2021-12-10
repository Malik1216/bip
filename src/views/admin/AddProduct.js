import React from "react";

// components

import AddProduct from "components/Cards/CardAddProduct.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <AddProduct />
        </div>
   
      </div>
    </>
  );
}
