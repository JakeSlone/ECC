import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/membership", label: "Membership" },
  { to: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative p-2 rounded-md bg-primary text-primary-foreground shadow-sm ring-1 ring-black/5">
        {/* Chess Knight */}
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <path
            d="M7 20h10v-2.5a4.5 4.5 0 0 0-4.5-4.5H12l1.5-3-4-2-2 3v4H6a2 2 0 0 0-2 2V20h3z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-serif text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
          Edmonton Chess Club
        </div>
        <div className="text-xs text-muted-foreground">
          Est. 1922 • Edmonton, AB
        </div>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                  isActive && "text-foreground",
                )
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/membership">Join the Club</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
