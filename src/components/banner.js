import React from "react";

function Banner() {

    return (
        <div className="banner">
            <div className="nav">
                <a href="index.html" className="logo">
                    <img src=
                        {require("../images/white_logo.png")}
                        id="nav_logo"
                        alt="banner" />
                </a>
                <ul className="menu">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html">Courses</a>
                    </li>
                    <li>
                        <a href="services.html">Blog</a>
                    </li>
                    <li>
                        <a href="contact.html">Support</a>
                    </li>
                    <li>
                        <a href="contact.html">Career</a>
                    </li>
                    <li>
                        <a href="contact.html" id="loginButton">
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="contact.html" id="bookFreeButton">
                            Book free trail
                        </a>
                    </li>
                </ul>
            </div>
            <div className="textContent">
                <p className="title">Where Every Note Finds a Home</p>
                <p className="subTitle">Learn, Play, and Create with Meloda House</p>
                <a href="contact.html" id="bookFreeTrialButton">
                    Book free trail
                </a>
            </div>
        </div>
    )
}
export default Banner;