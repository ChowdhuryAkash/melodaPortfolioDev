import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import "../css/blog.css";
import YouTube from 'react-youtube';

function Blog() {
    return (
        <div className="main">
            <Banner route="Blog" />

            <div className="blogs">
                <div className="blog">
                    <div className="blog-video">
                    <YouTube videoId="5fgSI7kh8jQ" opts={{
                        height: '400',
                        width: '500',
                        playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                            rel: 0,  // Prevents related videos from other channels
                            modestbranding: 1,  // Minimizes YouTube branding
                            showinfo: 0,  // Deprecated, but might still reduce info visibility
                            iv_load_policy: 3,  // Hides video annotations
                        },
                    }} />
                        </div>
                    <div className="blog-texts">
                        <p className="name">Anamika Samanta</p>
                        <p className="designation">Music Teacher</p>
                        <p className="date">12th July 2021</p>
                        <p className="title">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>

                    </div>


                </div>
                <div className="blog">
                    <div className="blog-video">
                    <YouTube videoId="5fgSI7kh8jQ" opts={{
                        height: '400',
                        width: '500',
                        playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                            rel: 0,  // Prevents related videos from other channels
                            modestbranding: 1,  // Minimizes YouTube branding
                            showinfo: 0,  // Deprecated, but might still reduce info visibility
                            iv_load_policy: 3,  // Hides video annotations
                        },
                    }} />
                        </div>
                    <div className="blog-texts">
                        <p className="name">Anamika Samanta</p>
                        <p className="designation">Music Teacher</p>
                        <p className="date">12th July 2021</p>
                        <p className="title">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>

                    </div>


                </div>
                <div className="blog">
                    <div className="blog-video">
                    <YouTube videoId="5fgSI7kh8jQ" opts={{
                        height: '400',
                        width: '500',
                        playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                            rel: 0,  // Prevents related videos from other channels
                            modestbranding: 1,  // Minimizes YouTube branding
                            showinfo: 0,  // Deprecated, but might still reduce info visibility
                            iv_load_policy: 3,  // Hides video annotations
                        },
                    }} />
                        </div>
                    <div className="blog-texts">
                        <p className="name">Anamika Samanta</p>
                        <p className="designation">Music Teacher</p>
                        <p className="date">12th July 2021</p>
                        <p className="title">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>

                    </div>


                </div>
                <div className="blog">
                    <div className="blog-video">
                    <YouTube videoId="5fgSI7kh8jQ" opts={{
                        height: '400',
                        width: '500',
                        playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                            rel: 0,  // Prevents related videos from other channels
                            modestbranding: 1,  // Minimizes YouTube branding
                            showinfo: 0,  // Deprecated, but might still reduce info visibility
                            iv_load_policy: 3,  // Hides video annotations
                        },
                    }} />
                        </div>
                    <div className="blog-texts">
                        <p className="name">Anamika Samanta</p>
                        <p className="designation">Music Teacher</p>
                        <p className="date">12th July 2021</p>
                        <p className="title">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>

                    </div>


                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Blog;