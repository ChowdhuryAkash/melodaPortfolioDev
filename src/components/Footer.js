import React from "react";
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className='footerTop'>
                <div className='footerTopCol' id="footerTopColLogo">
                    <ul className='footerMenu'>
                        <li className='footerMenuItem'>
                            <a href='index.html' style={{
                            }}>
                                <img src={require('../images/white_logo.png')} alt='logo' id="footer_logo" />

                            </a>
                        </li>
                    </ul>

                </div>
                <div className='footerTopCol'>
                    <ul className='footerMenu'>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Home</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Brain Storming</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Ideation</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Ideation</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Ideation</a>
                        </li>

                    </ul>
                </div>
                <div className='footerTopCol'>
                    <ul className='footerMenu'>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Courses</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Instruments</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Singing</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Tutorials</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>FAQ</a>
                        </li>

                    </ul>
                </div>
                <div className='footerTopCol'>
                    <ul className='footerMenu'>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Support</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Contact us</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Developers</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Documentation</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Integrations</a>
                        </li>

                    </ul>
                </div>
                <div className='footerTopCol'>
                    <ul className='footerMenu'>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Company</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>About</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Press</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Events</a>
                        </li>
                        <li className='footerMenuItem'>
                            <a href='index.html'>Request demo</a>
                        </li>

                    </ul>
                </div>

            </div>
            <div className='footerBottom'>
                <div className='footerBottomLeft'>
                    <p className='footerBottomText'>© 2024 Meloda House. All rights reserved</p>
                </div>
                <div className='footerBottomRight'>
                    <ul className='footerBottomMenu'>
                        <li className='footerBottomMenuItem'>
                            <a href='index.html'>Terms</a>
                        </li>
                        <li className='footerBottomMenuItem'>
                            <a href='index.html'>Privacy</a>
                        </li>
                        <li className='footerBottomMenuItem'>
                            <a href='index.html'>Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
export default Footer;
