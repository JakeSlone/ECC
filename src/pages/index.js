import React from "react";
import {
    AboutSection,
    HeroSection,
    Page,
    Seo,
} from "gatsby-theme-portfolio-minimal";

import "../index.css";

export default function IndexPage() {
    return (
        <>
            <Seo />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <div className="updates-section" id="updates">
                    <h3>Recent Updates</h3>
                    <br />
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTheEdmontonChessClub&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                        width="500"
                        height="500"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                </div>
                <AboutSection sectionId="about" heading="About us" />
            </Page>
        </>
    );
}