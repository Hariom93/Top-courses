import React from "react";
import "./Spiner.css"
const Spiner = () =>{
return(
    <div className="flex flex-col items-center space-y-2">
        <div class="spinner"></div>
        <p className="text-white text-lg font-semibold">Loading...</p>
    </div>
)
}
export default Spiner;