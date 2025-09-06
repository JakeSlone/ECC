import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function Index() {
  return (
    <Layout>
      <SEO
        title="Edmonton Chess Club - Premier Chess Community in Edmonton, AB"
        description="Join Edmonton's premier chess club! We offer chess lessons, tournaments, and a welcoming community for players of all skill levels. Located at 10840 124 St #204, Edmonton, AB. Club nights: Tuesday & Thursday 6:30-10:00 PM."
        keywords="Edmonton chess club, chess lessons Edmonton, chess tournaments Alberta, chess community Edmonton, chess classes, chess players, lichess team, chess events, chess membership"
        canonical="https://edmontonchess.com/"
      />
      {/* Hero */}
      <section className="relative overflow-hidden" role="banner">
        <div
          className="absolute inset-0 chessboard-bg opacity-[0.06]"
          aria-hidden="true"
        />
        <div className="container py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground bg-background/60 backdrop-blur">
              Edmonton, Alberta • Since 1908
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Edmonton Chess Club
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              A welcoming home for players of all ages and levels. Whether
              you're a beginner looking to learn or an experienced player
              seeking competition, our club offers something for everyone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/membership">Join the Club</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/events">See Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="container py-14" role="main">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            Weekly Events
          </h2>
          <Button asChild variant="ghost">
            <Link to="/events">View all</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Monday Casual Play</CardTitle>
              <CardDescription>6:30 PM - 11:00 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Friendly casual play, great for first timers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lichess Tournament</CardTitle>
              <CardDescription>7:00 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Online blitz tournament for members of the club.
              </p>
              <br />
              <Button asChild>
                <a
                  target="_blank"
                  href="https://lichess.org/tournament/e6i22MqF"
                >
                  Lichess
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Thursday Tournament</CardTitle>
              <CardDescription>6:30 PM</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                CFC-rated classical tournament.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visit */}
      <section className="container py-16">
        <div className="rounded-2xl border bg-gradient-to-br from-primary/5 to-accent/10 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
                Visit the Club
              </h3>
              <div className="mt-3 text-muted-foreground max-w-2xl">
                Join us for weekly club nights and tournaments. We welcome
                players of all ages and skill levels.
              </div>
              <div className="mt-6 flex flex-wrap gap-3"></div>
            </div>
            <div className="self-center">
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="text-sm text-muted-foreground">Questions?</div>
                <div className="mt-1 font-medium">
                  contact@edmontonchess.com
                </div>
                <Button asChild className="mt-4 w-full">
                  <a href="mailto:contact@edmontonchess.com">Get in touch</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
