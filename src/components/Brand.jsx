import React from "react";
import "./brand.css";
import brand1 from "../assets/1.png";
import brand2 from "../assets/2.png";
import brand3 from "../assets/3.png";
import brand4 from "../assets/4.png";
import brand5 from "../assets/5.png";


const Brand = ()=>{
    return(
        <div className="brand"  id="shop">
        <img src={brand1} alt="brand" />
        <img src={brand2} alt="brand" />
        <img src={brand3} alt="brand" />
        <img src={brand4} alt="brand" />
        <img src={brand5} alt="brand" />
    </div>
    );
}

export default Brand;