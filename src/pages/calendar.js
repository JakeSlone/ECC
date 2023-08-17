import React from "react";
import { Page } from "gatsby-theme-portfolio-minimal";

import "../index.css";

export default function Calendar() {
    return (
        <>
            <Page useSplashScreenAnimation>
                <div className="membership-section calendar">
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FEdmonton&src=ZjVlZmE2YmNkMjRhY2I3NDgzY2VjYWZiZTc3YWRhNWRiZTAyYmZmZWI1YzBkOThkYzdjY2RiMTBiNzRmZmFiYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
                        width="800"
                        height="600"
                        frameborder="0"
                        scrolling="no"
                    ></iframe>
                </div>
            </Page>
        </>
    );
}
