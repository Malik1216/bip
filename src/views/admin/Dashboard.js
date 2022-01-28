import React , { useState } from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import { toEditorSettings } from "typescript";


export default function Dashboard() {
  // console.log( CardLineChart );

  // fetch('https://api-node-bl.mojodynamics.site/get_dashboard' ,{
  //   method: 'get',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }

  // } ).then(result => result.json())
  //  .then(data => {
  //   // console.log( data.result);
  //     document.getElementById("dash").innerHTML= data.result;     
  //     this.setState({dash: data.result});  
  //     pagedata.dash= data.result;
  //     console.log(pagedata.dash);
  //  });





  function edit()
  {
    var ele = document.getElementsByClassName("remove_btn");
    document.getElementById("edit").style.display = 'none';
    for ( var i=0 ; i< ele.length ; i++)
    {
        ele[i].style.display = 'block';
    }
  }
  function save()
  {
    var ele = document.getElementsByClassName("remove_btn");
    document.getElementById("edit").style.display = 'block';
    for ( var i=0 ; i< ele.length ; i++)
    {
        ele[i].style.display = 'none';
    }
  }
  function remove(ele)
  {
    document.getElementById(ele).style.display = 'none';
  }
  return (
    <>
  
   <div id="dash" >
   <div className="flex flex-wrap">                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4" style={{zIndex:99999}} id="ele_1" >         <button class="bg-red-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 remove_btn" type="button" style={{display:"none"}} onClick={(() => remove("ele_1"))} ><i className="fas fa-trash-alt"></i>&nbsp;Delete</button>           <CardLineChart />         </div>                  <div className="w-full xl:w-4/12 px-4" style={{zIndex:99999}} id="ele_2" >         <button class="bg-red-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 remove_btn" type="button" style={{display:"none"}} onClick={(() => remove("ele_2"))} ><i className="fas fa-trash-alt"></i>&nbsp;Delete</button>           <CardBarChart />         </div>                      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4" style={{zIndex:99999}} id="ele_3" >         <button class="bg-red-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 remove_btn" type="button" style={{display:"none"}} onClick={(() => remove("ele_3"))} ><i className="fas fa-trash-alt"></i>&nbsp;Delete</button>           <CardPageVisits />         </div>                  <div className="w-full xl:w-4/12 px-4" id="ele_4" style={{zIndex:99999}} id="ele_4" >         <button class="bg-red-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 remove_btn" type="button" style={{display:"none"}} onClick={(() => remove("ele_4"))} ><i className="fas fa-trash-alt"></i>&nbsp;Delete</button>           <CardSocialTraffic />         </div>       </div> 
      
    </div>


    <div style={{marginBottom:"50px" , width:"100%"}} >
      <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" id="edit" style={{float:"right" , marginBottom:"30px", height:"40px" , marginRight:"20px" }}  onClick={ () => edit()} ><i className="fas fa-tools"></i>&nbsp;Edit Dashboard</button>
      <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 remove_btn" type="button" id="edit" style={{float:"right" , marginBottom:"30px", height:"40px" , marginRight:"20px" , display:"none" }}  onClick={ () => save()} ><i className="fas fa-check"></i>&nbsp;Save</button>
      <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 remove_btn" type="button" id="edit" style={{float:"right" , marginBottom:"30px", height:"40px" , marginRight:"20px" , display:"none" }}  onClick={ () => edit()} ><i className="fas fa-plus"></i>&nbsp;Add widget</button>
   </div>
    </>
  );
}
