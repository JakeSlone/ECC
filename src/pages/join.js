import React from "react";
import { AboutSection, Page } from "gatsby-theme-portfolio-minimal";

import "../index.css";

import trophy from "../../content/images/trophy.jpg";

export default function Membership() {
    return (
        <>
            <Page useSplashScreenAnimation>
                <div className="membership-section">
                    <div className="membership-section-text">
                        <h3>Join</h3>
                        <p>
                            Please come check out the club anytime during our
                            operating hours free of charge to see what we are
                            about. Then if you feel like joining, get in contact
                            with ECC staff! Membership is 25$ annually for
                            adults and 15$ annualy for juniors.
                        </p>
                    </div>
                    <img src={trophy} alt="trophy" />
                </div>
            </Page>
        </>
    );
}
