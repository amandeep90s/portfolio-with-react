import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am <span>Lorem ipsum</span>
                </h1>

                <p className="h-sub-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vero quasi enim quis labore neque sint explicabo consectetur
                    iusto eligendi ipsum tempora cumque, dolore incidunt quo
                    sed. Iure, quibusdam. Temporibus, tempora.
                </p>

                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="icon fb"
                        />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt" />
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default HomePage;
