import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-serif text-lg">Edmonton Chess Club</div>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            A welcoming community for chess players of all ages and levels in
            Edmonton and beyond.
          </p>
        </div>
        <div>
          <div className="font-medium mb-3">Visit Us</div>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>3rd Floor, Annex Building</li>
            <li>118 Avenue NW, Edmonton, AB</li>
            <li>Club Nights: Tue & Thu 6:30–10:00 PM</li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Connect</div>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              <a
                href="mailto:contact@edmontonchessclub.ca"
                className="hover:text-foreground"
              >
                contact@edmontonchessclub.ca
              </a>
            </li>
            <li>
              <Link to="/membership" className="hover:text-foreground">
                Membership
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-foreground">
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Edmonton Chess Club. All rights reserved.
      </div>
    </footer>
  );
}
