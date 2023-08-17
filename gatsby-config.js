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
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-KZQBFGR65B", // Google Analytics / GA
                ],
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: false,
                },
            },
        },
    ],
};
