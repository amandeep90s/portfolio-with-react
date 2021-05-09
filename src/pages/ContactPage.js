import React from "react";
import ContactItem from "../components/ContactItem";
import phone from "../images/phone.svg";
import email from "../images/emailme.svg";
import location from "../images/location.svg";
import Title from "../components/Title";

const ContactPage = () => {
    return (
        <>
            <div className="title">
                <Title title={"Contact"} span={"Contact"} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26988.613333239824!2d75.63434586402174!3d32.26947052946553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f5d473c84b3%3A0x5335739bee705d89!2sPathankot%2C%20Punjab%20145001!5e0!3m2!1sen!2sin!4v1620574712258!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="Pathankot"
                    ></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem
                        icon={phone}
                        text1={"+257 7756110718"}
                        text2={"+0333 6782 8792"}
                        title={"Phone"}
                    />
                    <ContactItem
                        icon={email}
                        text1={"loremipusum@hmail.com"}
                        text2={"abcloremipsum@gmail.com"}
                        title={"Email"}
                    />
                    <ContactItem
                        icon={location}
                        text1={"25 Paramount St, PN4 8H9 London"}
                        text2={"United Kingdom"}
                        title={"Address"}
                    />
                </div>
            </div>
        </>
    );
};

export default ContactPage;
