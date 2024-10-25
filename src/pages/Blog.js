import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import "../css/blog.css";
import YouTube from 'react-youtube';

function Blog() {
    
    const isVerySmallScreen = window.matchMedia("(max-width: 480px)").matches;
    return (
        <div className="main">
            <Banner route="Blog" />

            <div className="blogs">
                <div className="blog">
                    <div className="blog-video">
                        <YouTube videoId="9mWwVztFBeU" opts={{
                            height: '400',
                            width: isVerySmallScreen ? '300' : '500',
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
                        <p className="name">Mahassweta</p>
                        <p className="designation">Music Teacher & Dancer</p>
                        <p className="date">12th July 2019</p>
                        <p className="title">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>

                    </div>


                </div>
                <div className="blog">
                    <div className="blog-video">
                        <YouTube videoId="MT1-NUBFOG4" opts={{
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
                        <p className="name">Sagar Chawla</p>
                        <p className="designation">Music Student</p>
                        <p className="date">6th June 2023</p>
                        <p className="title">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>

                    </div>


                </div>
                <div className="blog">
                    <div className="blog-video">
                        <YouTube videoId="PAUwdfQxaUY" opts={{
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
                        <p className="name">Asif Khan</p>
                        <p className="designation">Music Teacher</p>
                        <p className="date">17th May 2021</p>
                        <p className="title">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>

                    </div>


                </div>
                <div className="blog">
                    <div className="blog-video">
                        <YouTube videoId="ZQHsi36JnDU" opts={{
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
                        <p className="name">Shalini De</p>
                        <p className="designation">Music Teacher</p>
                        <p className="date">21st December 2021</p>
                        <p className="title">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>

                    </div>


                </div>
                <div className="blog">
                    <div className="blog-video">
                        <YouTube videoId="DfXD2s8IsP4" opts={{
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
                        <p className="name">Asif Khan</p>
                        <p className="designation">Music Teacher</p>
                        <p className="date">17th May 2021</p>
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