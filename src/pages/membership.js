import React from "react";
import { AboutSection, Page } from "gatsby-theme-portfolio-minimal";

import "../index.css";

import dripgod from "../../content/images/dripgod.jpg";

export default function Membership() {
    return (
        <>
            <Page useSplashScreenAnimation>
                <div className="membership-section">
                    <div className="membership-section-text">
                        <h3>Membership</h3>
                        <p>
                            Please come check out the club anytime during our
                            operating hours free of charge to see what we are
                            about. Then if you feel like joining, get in contact
                            with Dustin or Robert to join the club! Membership
                            is 25$ annually.
                        </p>
                    </div>
                    <img src={dripgod} alt="drip god" />
                </div>
            </Page>
        </>
    );
}
