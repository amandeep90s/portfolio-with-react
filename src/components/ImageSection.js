import React from "react";
import about from "../images/about.png";

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>

            <div className="about-info">
                <h4>
                    I am <span>Lorem ipsum</span>
                </h4>
                <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae totam earum facere, accusamus voluptatem a.
                    Lorem ipsum dolor sit.
                </p>

                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: John Doe</p>
                        <p>: 30</p>
                        <p>: Indian</p>
                        <p>: English, Punjabi</p>
                        <p>: Model Town, Pathankot, Punjab 145001</p>
                        <p>: India</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    );
};

export default ImageSection;
