import React from "react";
import "./exclusiveproducts.css";
import exclusive from "../assets/exclusive.jpg";
import prev from "../assets/prev.png";
import ep1 from "../assets/e-p1.png";
import next from "../assets/next.png";

const Exclusiveproducts = () => {
    return (

        <div id="exclusive_products">
            <div id="exclusive_products1">
                <img className="exclusive_img" src={exclusive} alt="exclusive" />
            </div>
            <div>
                <div id="exclusive_products2" >
                    <img  src={prev} alt="prev" />
                    <img className="exclusive_img" src={ep1} alt="exclusive" />
                    <img  src={next} alt="next" />
                </div>
                <h5 className="exclusive_h5">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON</h5>
            </div>
        </div >

    );
}

export default Exclusiveproducts