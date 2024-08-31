import react from "react";
import "../css/career.css";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Career = () => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const isVerySmallScreen = window.matchMedia("(max-width: 480px)").matches;
    return (
        <div className="main">
            <Banner route="Career" />
            <div className="whoWeAre">
                {/* ---------1st */}

                <svg
                    width="100%"   // Ensures the SVG takes up the full width of its container
                    height="auto"  // Automatically adjusts height based on width to maintain aspect ratio
                    viewBox="0 0 1408 739"  // Defines the coordinate system and aspect ratio
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        position: "absolute",  // Positions the SVG absolutely within its container
                        top: "0",  // Adjust based on your layout
                        left: "0",  // Aligns the SVG to the left
                        zIndex: 2,  // Ensures the SVG is on top of other elements
                        display: isVerySmallScreen ? 'none' : 'block',  // Hides the SVG on very small screens
                        maxWidth: "150%",  // Increase the maximum width of the SVG
                        height: "auto",  // Maintains aspect ratio by adjusting height
                        overflow: "hidden",  // Ensures no overflow from the SVG
                    }}
                    preserveAspectRatio="xMidYMid meet"  // Keeps the SVG centered and maintains its aspect ratio
                >
                    <path
                        d="M-15 -5.87697e-05H1429V259.842V504.785C1429 504.785 1180.2 -28.0107 820.393 195.746C820.393 195.746 785.636 203.821 595.533 401.324C387.068 651.989 328.919 698.209 252.957 727.546C203.655 740.316 143.959 745.131 86.782 727.546C26.1469 708.897 22.6014 706.584 5.55695 698.209C-11.4875 689.834 -14.9999 698.209 -15 654.791C-15.0001 611.373 -13.9421 4.76936 -15 -5.87697e-05Z"
                        fill="#F1F5F9"
                    />
                </svg>







                <div className="textContent">
                    <p className="title">Career Guidance</p>
                    <p className="subTitle">
                        Meloda House, we are a passionate community of musicians, educators, and music enthusiasts dedicated to making the world of music accessible to everyone.
                    </p>
                </div>
                <img
                    src={require("../images/career_guidance.jpeg")}
                    alt="whoweare"
                    style={{
                        position: "absolute",
                        top: "10%",
                        right: "-10%",
                        width: "100%",
                        // height: "100%",
                        zIndex: 1,
                        display: isSmallScreen ? 'none' : 'block'
                    }}
                />
            </div>

            {/* =========howitworks */}

            <div className="howItWorks">
                <div className="title">How It Works</div>
                <div className="steps">
                    <div className="step" id="step1">
                        <img src={require("../images/careerHowItWorks1.png")} />
                        <p className="stepTitle">Register</p>
                    </div>
                    <div className="step" id="step2">
                        <img src={require("../images/careerHowItWorks2.png")} />
                        <p className="stepTitle">Verification</p>
                    </div>
                    <div className="step" id="step3">
                        <img src={require("../images/careerHowItWorks3.png")} />
                        <p className="stepTitle">Take classes</p>
                    </div>
                </div>
            </div>

            {/* ==============contact us============ */}
            <div className="contactUs" id="contact">

                <div className="form">
                    <p className="title">Registration</p>
                    <p className="subTitle">Write an application with the proper name and email and also attach your resume with it.</p>
                    <div className='inputs'>
                        <div className='nameandmails'>
                            <div className='input'>
                                <label for='name'>Name</label><br />
                                <input type='text' id='name' placeholder='Enter your name' />
                            </div>
                            <div className='input'>
                                <label for='email'>Email</label><br />
                                <input type='email' id='email' placeholder='Enter your email' />
                            </div>

                        </div>
                        <div className='textArea'>
                            {/* <label for='message'>Message</label><br/> */}
                            <textarea id='message' placeholder='Enter your message'></textarea>
                        </div>
                        <input type="file" id="file" />
                        <button id="fileButton" onClick={()=>{
                            document.getElementById('file').click();
                        }}>Attach Resume</button>
                        <p id="fileName">No file chosen</p>
                        <button id="submitButton">submit</button>
                    </div>
                </div>
                {/* ------3rd */}
                <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 1408 284"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        position: "absolute",
                        bottom: "-50px",
                        left: 0,
                        display: isVerySmallScreen ? 'none' : 'block',
                        maxWidth: "100%",  // Ensures the SVG doesn't exceed its container width
                        height: "auto",  // Makes the height responsive
                        preserveAspectRatio: "xMidYMid meet",  // Ensures the SVG scales proportionally
                    }}
                >
                    <path
                        d="M1426 283.022C862.925 283.022 547.232 283.022 -15.8428 283.022V211.28C-15.8428 211.28 -16 101.09 344 211.28C704 321.47 1265.12 -56.4574 1426 8.53455V242.833V283.022Z"
                        fill="#475569"
                    />
                </svg>


            </div>

            <Footer />

        </div>
    );
}
export default Career;