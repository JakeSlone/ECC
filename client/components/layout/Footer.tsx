import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-serif text-lg">Edmonton Chess Club</div>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            Edmonton's premier chess club.
          </p>
        </div>
        <div>
          <div className="font-medium mb-3">Visit Us</div>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>10840 124 St #204</li>
            <li>Edmonton, AB T5M 0H3</li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Connect</div>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>
              <a
                href="mailto:contact@edmontonchess.com"
                className="hover:text-foreground"
              >
                contact@edmontonchess.com
              </a>
            </li>
            <li>
              <a href="tel:780-424-0283" className="hover:text-foreground">
                780-424-0283
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
            <li>
              <a
                href="https://www.facebook.com/TheEdmontonChessClub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground inline-flex items-center gap-1"
              >
                Facebook
              </a>
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
