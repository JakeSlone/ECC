import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function SEO({
  title = "Edmonton Chess Club - Premier Chess Community in Edmonton, AB",
  description = "Join Edmonton's premier chess club! We offer chess lessons, tournaments, and a welcoming community for players of all skill levels. Located at 10840 124 St #204, Edmonton, AB. Club nights: Tuesday & Thursday 6:30-10:00 PM.",
  keywords = "Edmonton chess club, chess lessons Edmonton, chess tournaments Alberta, chess community Edmonton, chess classes, chess players, lichess team, chess events, chess membership",
  canonical = "https://edmontonchess.com",
  ogImage = "https://edmontonchess.com/og-image.jpg",
  noindex = false,
}: SEOProps) {
  const fullTitle = title.includes("Edmonton Chess Club")
    ? title
    : `${title} | Edmonton Chess Club`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Edmonton Chess Club" />
      <meta property="og:locale" content="en_CA" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}
