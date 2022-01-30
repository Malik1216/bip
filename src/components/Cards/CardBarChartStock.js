import React from "react";
import Chart from "chart.js";

export default function CardBarChart() {


    fetch('https://api-node-bl.mojodynamics.site/get_stock' ,{
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }

    } ).then(result => result.json())
     .then(data => {
         var size = data.result.length;
      
         var datas = [];
     
         for (var i=0 ; i<size ; i++)
         {
            let maxVal = 0xFFFFFF; // 16777215
            let randomNumber = Math.random() * maxVal; 
            randomNumber = Math.floor(randomNumber);
            randomNumber = randomNumber.toString(16);
            let randColor = randomNumber.padStart(6, 0);   
            var color =  '#'+randColor.toUpperCase();
            datas.push(  {
                label: data.result[i]['mcat_name'],
                backgroundColor:color,
                borderColor: color,
                data: [data.result[i]['count']],
                fill: true,
                barThickness: 50,
              });
         }
      
      let config = {
        type: "bar",
        data: {
          labels: [
            "Stock",
          
          ],
          datasets: datas,
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Orders Chart",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          legend: {
            labels: {
              fontColor: "rgba(0,0,0,.4)",
            },
            align: "end",
            position: "bottom",
          },
          scales: {
            xAxes: [
              {
                display: false,
                scaleLabel: {
                  display: true,
                  labelString: "Month",
                },
                gridLines: {
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(33, 37, 41, 0.3)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                },
                gridLines: {
                  borderDash: [2],
                  drawBorder: false,
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.2)",
                  zeroLineColor: "rgba(33, 37, 41, 0.15)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          },
        },
      };
      let ctx = document.getElementById("bar-chart").getContext("2d");
      window.myBar = new Chart(ctx, config);
   
  });
      



 




  // React.useEffect(() => {
  //   let config = {
  //     type: "bar",
  //     data: {
  //       labels: [
  //         "January",
  //         "February",
  //         "March",
  //         "April",
  //         "May",
  //         "June",
  //         "July", 
  //         "August",
  //         "September",
  //         "October",
  //         "November",
  //         "December",
  //       ],
  //       datasets: [
  //         {
  //           label: new Date().getFullYear(),
  //           backgroundColor: "#ed64a6",
  //           borderColor: "#ed64a6",
  //           data: [0, 0, 0, 0, 0, 0, 0 , 0 ,0 ,0 , 0, 0],
  //           fill: false,
  //           barThickness: 8,
  //         },
  //         {
  //           label: new Date().getFullYear() - 1,
  //           fill: false,
  //           backgroundColor: "#4c51bf",
  //           borderColor: "#4c51bf",
  //           data: [0, 0, 0, 0, 0, 0, 0 , 0 ,0 ,0 , 0, 0],
  //           barThickness: 8,
  //         },
  //       ],
  //     },
  //     options: {
  //       maintainAspectRatio: false,
  //       responsive: true,
  //       title: {
  //         display: false,
  //         text: "Orders Chart",
  //       },
  //       tooltips: {
  //         mode: "index",
  //         intersect: false,
  //       },
  //       hover: {
  //         mode: "nearest",
  //         intersect: true,
  //       },
  //       legend: {
  //         labels: {
  //           fontColor: "rgba(0,0,0,.4)",
  //         },
  //         align: "end",
  //         position: "bottom",
  //       },
  //       scales: {
  //         xAxes: [
  //           {
  //             display: false,
  //             scaleLabel: {
  //               display: true,
  //               labelString: "Month",
  //             },
  //             gridLines: {
  //               borderDash: [2],
  //               borderDashOffset: [2],
  //               color: "rgba(33, 37, 41, 0.3)",
  //               zeroLineColor: "rgba(33, 37, 41, 0.3)",
  //               zeroLineBorderDash: [2],
  //               zeroLineBorderDashOffset: [2],
  //             },
  //           },
  //         ],
  //         yAxes: [
  //           {
  //             display: true,
  //             scaleLabel: {
  //               display: false,
  //               labelString: "Value",
  //             },
  //             gridLines: {
  //               borderDash: [2],
  //               drawBorder: false,
  //               borderDashOffset: [2],
  //               color: "rgba(33, 37, 41, 0.2)",
  //               zeroLineColor: "rgba(33, 37, 41, 0.15)",
  //               zeroLineBorderDash: [2],
  //               zeroLineBorderDashOffset: [2],
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   };
  //   let ctx = document.getElementById("bar-chart").getContext("2d");
  //   window.myBar = new Chart(ctx, config);
  // }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
              Product Analysis
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Main Catagory Views
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
