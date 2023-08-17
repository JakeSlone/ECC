module.exports = {
    plugins: [
        {
            resolve: "gatsby-theme-portfolio-minimal",
            options: {
                siteUrl: "https://edmontonchessclub.com/", // Used for sitemap generation
                manifestSettings: {
                    favicon: "./content/images/favicon.png", // Path is relative to the root
                    siteName: "Edmonton Chess Club", // Used in manifest.json
                    shortName: "ECC", // Used in manifest.json
                    startUrl: "/", // Used in manifest.json
                    backgroundColor: "#FFFFFF", // Used in manifest.json
                    themeColor: "#000000", // Used in manifest.json
                    display: "minimal-ui", // Used in manifest.json
                },
                contentDirectory: "./content",
                blogSettings: {
                    path: "/blog", // Defines the slug for the blog listing page
                    usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "G-KZQBFGR65B",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: false,
                // Setting this parameter is also optional
                respectDNT: false,
                // defaults to false
                enableWebVitalsTracking: true,
            },
        },
    ],
};
