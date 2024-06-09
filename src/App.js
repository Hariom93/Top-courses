import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar.js";
import Filter from "./Components/Filter.js";
import {apiUrl,filterData} from "./data.js";
import Spiner from "./Components/Spiner.js";
import Cards from "./Components/Cards.js";
import { toast } from "react-toastify";

const App = () =>{
  
  const [courses , setCourses] = useState([]);
  const [loading ,setloading] = useState(true);
  const [Category,setCategory] =useState(filterData[0].title);

  async function fetchData()
  {
   setloading(true);
  try {
    let  respons = await fetch(apiUrl);
    let  output = await respons.json();
    setCourses(output.data);
  }
  catch(error){
      toast.error("network problem");
  }
  setloading(false);
}
useEffect(()=>{
fetchData();
},[])

  return (
  <div className="min-h-screen flex flex-col bg-slate-700">
    <div>
      <Navbar></Navbar>
    </div>
    <div>
      <div>
      <Filter filterData={filterData} 
              Category={Category}
              setCategory={setCategory}  
      ></Filter>
    </div>
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
      loading ? (<Spiner></Spiner>):(<Cards courses={courses} Category={Category}></Cards>)
      }
    </div>
  </div>
  </div>
  );
};
export default App;