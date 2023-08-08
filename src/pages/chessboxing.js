import React from "react";
import { Page } from "gatsby-theme-portfolio-minimal";

import "../index.css";

import boxing from "../../content/images/chessboxing.png";

export default function Chessboxing() {
    return (
        <>
            <Page useSplashScreenAnimation>
                <div className="membership-section">
                    <div className="membership-section-text">
                        <h3>Chess Boxing</h3>
                        <p>
                            Join us this October for an event like no other.
                            Find out all the info here{" "}
                            <a href="https://edmontonchessboxing.com/">
                                https://edmontonchessboxing.com/
                            </a>
                        </p>
                    </div>
                    <img src={boxing} alt="boxing" />
                </div>
            </Page>
        </>
    );
}
