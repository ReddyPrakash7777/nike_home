import React from "react";
import "./services.css";
import ficon from "../assets/f-icon1.png";
import ficon1 from "../assets/f-icon2.png";
import ficon2 from "../assets/f-icon3.png";
import ficon3 from "../assets/f-icon4.png";

const Services=()=>{
    return(
        <>
        
    <div className="services">
        <li>
            <img className="services_image" src={ficon} alt="icon"/>
            <h5>Free Delivery</h5>
            <p>Free shipping on all order</p>
        </li>
        <li>
            <img className="services_image" src={ficon1} alt="icon"/>
            <h5>Return Policy</h5>
            <p>Free shipping on all order</p>
        </li>
        <li>
            <img className="services_image" src={ficon2} alt="icon"/>
            <h5>24/7 Support</h5>
            <p>Free shipping on all order</p>
        </li>
        <li className="services_last_image">
            <img className="services_image " src={ficon3} alt="icon"/>
            <h5>Secure Payment</h5>
            <p>Free shipping on all order</p>
        </li>
    </div>
        </>
    );
}

export default Services;