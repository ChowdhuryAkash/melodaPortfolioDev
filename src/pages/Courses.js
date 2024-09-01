import react from "react";
import '../css/courses.css'
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Courses() {
    return (
        <>
            <Banner route="Courses" />
            <div className="coursesPagecourses">
                <p className="coursesPagetitle">COURSES</p>
                <div className="coursesPagemainCourses">
                    <div className="coursesPagecoursesDevide coursesLeft">
                        <p className="coursesPagesubTitle">Instruments</p>
                        <div className="coursesPagecoursesList">
                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/guitarCourse.png")}
                                    className="coursesPagecourseImage"
                                    alt="guitar"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Guitar</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to play the guitar with our expert instructors.
                                    </p>
                                    <a href="about.html" className="coursesPagecourseButton">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/guitarCourse.png")}
                                    className="coursesPagecourseImage"
                                    alt="guitar"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Guitar</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to play the guitar with our expert instructors.
                                    </p>
                                    <a href="about.html" className="coursesPagecourseButton">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/guitarCourse.png")}
                                    className="coursesPagecourseImage"
                                    alt="guitar"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Guitar</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to play the guitar with our expert instructors.
                                    </p>
                                    <a href="about.html" className="coursesPagecourseButton">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/guitarCourse.png")}
                                    className="coursesPagecourseImage"
                                    alt="guitar"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Guitar</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to play the guitar with our expert instructors.
                                    </p>
                                    <a href="about.html" className="coursesPagecourseButton">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/guitarCourse.png")}
                                    className="coursesPagecourseImage"
                                    alt="guitar"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Guitar</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to play the guitar with our expert instructors.
                                    </p>
                                    <a href="about.html" className="coursesPagecourseButton">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/guitarCourse.png")}
                                    className="coursesPagecourseImage"
                                    alt="guitar"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Guitar</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to play the guitar with our expert instructors.
                                    </p>
                                    <a href="about.html" className="coursesPagecourseButton">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="coursesPagecoursesDevide coursesRight">
                        <p className="coursesPagesubTitle">Singing</p>
                        <div className="coursesPagecoursesList">
                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/guitarCourse.png")}
                                    className="coursesPagecourseImage"
                                    alt="guitar"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Guitar</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to play the guitar with our expert instructors.
                                    </p>
                                    <a href="about.html" className="coursesPagecourseButton">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/guitarCourse.png")}
                                    className="coursesPagecourseImage"
                                    alt="guitar"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Guitar</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to play the guitar with our expert instructors.
                                    </p>
                                    <a href="about.html" className="coursesPagecourseButton">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="coursesPagecourse">
                                <img
                                    src={require("../images/guitarCourse.png")}
                                    className="coursesPagecourseImage"
                                    alt="guitar"
                                />
                                <div className="coursesPageright">
                                    <p className="coursesPagecourseName">Guitar</p>
                                    <p className="coursesPagecourseDescription">
                                        Learn to play the guitar with our expert instructors.
                                    </p>
                                    <a href="about.html" className="coursesPagecourseButton">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
export default Courses;