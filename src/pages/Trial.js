import React from "react";
import TrialCss from "../css/Trial.module.css";

function Trial() {
    return (
        <div className={TrialCss.main}>
            <div className={TrialCss.left}>
                <p className={TrialCss.title}>Book a free trial</p>
                <p className={TrialCss.subTitle}>Learn, Play, and Create with Meloda House</p>
            </div>
            <div className={TrialCss.right}>
                <div className={TrialCss.form}>
                    <div className={TrialCss.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name here"
                        />
                    </div>
                    <div className={TrialCss.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter your email address here"
                        />
                    </div>
                    <div className={TrialCss.formGroup}>
                        <label>Gender</label>
                        {/* Create a custom gender selector */}
                        <div className={TrialCss.genderSelecter}>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                id="male"
                                class="radioInput"
                            />
                            <label htmlFor="male">Male</label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                id="female"
                                class="radioInput"
                            />
                            <label htmlFor="female">Female</label>
                            <input
                                type="radio"
                                name="gender"
                                value="others"
                                id="others"
                                class="radioInput"
                            />
                            <label htmlFor="others">Others</label>
                        </div>
                    </div>
                    <div className={TrialCss.formGroup}>
                        <label>Category</label>
                        <select name="category" id={TrialCss.courses}>
                            <option value="none">Select</option>
                            <option value="acousticguitar">Acoustic Guitar</option>
                            <option value="electricguitar">Electric Guitar</option>
                            <option value="piano">Piano</option>
                            <option value="violin">Violin</option>
                            <option value="drums">Drums</option>
                        </select>
                    </div>
                    <input
                        type="submit"
                        id={TrialCss.submitButton}
                        value="Send"
                    />
                </div>
            </div>
        </div>
    );
}

export default Trial;
