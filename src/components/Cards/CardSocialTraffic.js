import React from "react";

// components

export default function CardSocialTraffic() {
  fetch('https://api-node-bl.mojodynamics.site/get_sale_locations' ,{
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  
  } ).then(result => result.json())
   .then(data => {
        document.getElementById("tbody_productd_location").innerHTML = data.result;
   });
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded" style={{minHeight:"379px" , maxHeight:"379px" }} >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Products Sold
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
         
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Location
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  total products Sold
                </th>
               
              </tr>
            </thead>
            <tbody id="tbody_productd_location" >
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
