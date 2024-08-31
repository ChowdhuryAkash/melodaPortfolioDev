import React from "react";
import { Outlet, Link } from "react-router-dom";

function Banner({route}) {

    var title="Where Every Note Finds a Home";
    var subTitle="Learn, Play, and Create with Meloda House";
    var bannerImage = require("../images/banner-home.png");

    switch(route){
        case "Home":
            title="Where Every Note Finds a Home";
            subTitle="Learn, Play, and Create with Meloda House";
            bannerImage = require("../images/banner-home.png");
            break;
        case "Blog":
            title="Choose Your Path, Master Your Craft";
            subTitle="Select Your Course at Meloda House.";
            bannerImage = require("../images/banner-blog.png");
            break;
        case "Career":
            title="Career Guidance: Spread Your Rhythm with Meloda House";
            subTitle="Learn Tabla and Let the Beats Speak.";
            bannerImage = require("../images/banner-career.png");
            break;
        case "Support":
            title="Support";
            subTitle="We are here to help you";
            bannerImage = require("../images/banner-home.png");
            break;
            case "About":
            title="Discover the Heartbeat of Music";
            subTitle="Learn, Grow, and Create with Meloda House.";
            bannerImage = require("../images/banner-about.png");
            break;
        default:
            title="Where Every Note Finds a Home";
            subTitle="Learn, Play, and Create with Meloda House";
            bannerImage = require("../images/banner-home.png");
    }

    return (
        <div className="banner"  style={{
            backgroundImage: `url(${bannerImage})`
        }}>
            <div className="nav">
                <Link to="/" className="logo">
                    <img src=
                        {require("../images/white_logo.png")}
                        id="nav_logo"
                        alt="banner" />
                </Link>
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Courses</Link>
                    </li>
                    <li>
                        <Link to="/Blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/Support">Support</Link>
                    </li>
                    <li>
                        <Link to="/Career">Career</Link>
                    </li>
                    <li>
                        <a href="contact.html" id="loginButton">
                            Login
                        </a>
                    </li>
                    <li>
                        <Link to="/" id="bookFreeButton">
                            Book free trail
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="textContent">
                <p className="title">{title}</p>
                <p className="subTitle">{
                    subTitle                    
                    }</p>
                <a href="contact.html" id="bookFreeTrialButton">
                    Book free trail
                </a>
            </div>
        </div>
    )
}
export default Banner;