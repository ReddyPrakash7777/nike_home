import React, { useState } from "react";
import logo from "../assets/logo.png";
import bannerimg from "../assets/banner-img.png"
import "./home.css";

const Home = () => {
    const[toggle, setToggle] = useState(false);

    const clickHandler = () =>{
        setToggle(()=>
            !toggle
        );
    }
    return (
        <>
            <div className="nav-bar" id="home">
                <img className="logo" src={logo} alt="logo" />
                <nav className= {toggle? "small-devices mobile" : "small-devices"}>
                    <li><a href="/">HOME</a></li>
                    <li><a href="#shop">SHOP</a></li>
                    <li><a href="#blog">BLOG</a></li>
                    <li><a href="#exclusive_products">PRODUCTS</a></li>

                </nav>
                <div className="icon" onClick={clickHandler}>
                    icon
                </div>
            </div>

            <div className="header">
                <div className="content">
                    <h1>Nike New <br /> Colleciton!</h1>
                    <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laudantium rem aliquam consequuntur
                        molestias distinctio praesentium necessitatibus libero voluptates, aspernatur illum odit perspiciatis
                        est nesciunt animi quia quibusdam beatae? Consectetur.</p>
                    <div className="sub-content">
                        <p>log</p>
                        <p>ADD TO BAG</p>
                    </div>
                </div>
                <img className="show_in_header" src={bannerimg} alt="bannerimg" />
            </div>
        </>
    );
}

export default Home;