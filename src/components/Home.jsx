import React from "react";
import logo from "../assets/logo.png";
import bannerimg from "../assets/banner-img.png"
import "./home.css";

const Home = () => {
    return (
        <>
            <div className="nav-bar">
                <img className="logo" src={logo} alt="logo"/>
                    <nav>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">PAGES</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </nav>
            </div>

            <div className="header">
                <div className="content">
                    <h1>Nike New <br /> Colleciton!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laudantium rem aliquam consequuntur
                        molestias distinctio praesentium necessitatibus libero voluptates, aspernatur illum odit perspiciatis
                        est nesciunt animi quia quibusdam beatae? Consectetur.</p>
                    <div className="sub-content">
                        <p>log</p>
                        <p>ADD TO BAG</p>
                    </div>
                </div>
                <img className="show_in_header" src={bannerimg} alt="bannerimg"/>
            </div>
        </>
    );
}

export default Home;