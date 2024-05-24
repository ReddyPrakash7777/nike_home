import React from "react";
import "./latestproducts.css";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";

const Latestproducts = () => {
    return (
        <div className="latest_products">
            <div className="product_title">
                <h2>Latest Products</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum accusamus illo culpa dignissimos at earum
                    <br />voluptas quidem hic saepe esse, deleniti facere fugit et laudantium molestiae corporis ad odio
                    eveniet?
                </p>
            </div>
            <div className="products">
                <div>
                    <img src={p1} alt="products"/>
                    <h5>ADDIDAS NEW HAMMER SOLE<br /> FOR SPORTS PERSON</h5>
                </div>
                <div>
                    <img src={p2} alt="products"/>
                    <h5>ADDIDAS NEW HAMMER SOLE <br />FOR SPORTS PERSON</h5>
                </div>
                <div>
                    <img src={p3} alt="products"/>
                    <h5>ADDIDAS NEW HAMMER SOLE <br />FOR SPORTS PERSON</h5>
                </div>
                <div>
                    <img src={p4} alt="products"/>
                    <h5>ADDIDAS NEW HAMMER SOLE <br />FOR SPORTS PERSON</h5>
                </div>
                <div>
                    <img src={p5} alt="products"/>
                    <h5>ADDIDAS NEW HAMMER SOLE <br />FOR SPORTS PERSON</h5>
                </div>
                <div>
                    <img src={p6} alt="products"/>
                    <h5>ADDIDAS NEW HAMMER SOLE <br />FOR SPORTS PERSON</h5>
                </div>
                <div>
                    <img src={p7} alt="products"/>
                    <h5>ADDIDAS NEW HAMMER SOLE <br />FOR SPORTS PERSON</h5>
                </div>
                <div>
                    <img src={p8} alt="products"/>
                    <h5>ADDIDAS NEW HAMMER SOLE <br />FOR SPORTS PERSON</h5>
                </div>
            </div>
        </div>

    );
}

export default Latestproducts;