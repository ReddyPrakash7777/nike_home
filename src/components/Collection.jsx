import React from "react";
import "./collection.css";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg"

const Collection = () => {
    return (
        <div className="collection">
            <div className="collection_first">
                <div className="first">
                    <img src={c1} alt="categories"/>
                        <img src={c2} alt="categories"/>
                        </div>
                        <div className="second">
                            <img src={c3} alt="categories"/>
                                <img src={c4} alt="categories"/>
                                </div>
                        </div>
                        <div className="collection_second">
                            <img className="collection_img" src={c5} alt="categories"/>
                        </div>
                </div>
                );
}

                export default Collection;