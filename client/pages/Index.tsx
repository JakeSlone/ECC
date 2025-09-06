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
import { useHomePage, useEvents } from "@/hooks/useStoryblok";
import StoryblokContent from "@/components/StoryblokContent";
import { Skeleton } from "@/components/ui/skeleton";

export default function Index() {
  const {
    data: homeData,
    isLoading: homeLoading,
    error: homeError,
  } = useHomePage();
  const {
    data: eventsData,
    isLoading: eventsLoading,
    error: eventsError,
  } = useEvents();

  const homeContent = homeData?.story?.content;
  const events = eventsData?.stories?.slice(0, 3) || [];

  // Show loading only if we're actually loading and haven't had an error
  // If there's an error (like 404), show the fallback content instead
  if (homeLoading && !homeError) {
    return (
      <Layout>
        <section className="relative overflow-hidden">
          <div className="container py-20 md:py-28 relative">
            <div className="max-w-3xl">
              <Skeleton className="h-6 w-48 mb-6" />
              <Skeleton className="h-16 w-full mb-6" />
              <Skeleton className="h-6 w-full mb-8" />
              <div className="flex gap-3">
                <Skeleton className="h-12 w-32" />
                <Skeleton className="h-12 w-32" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 chessboard-bg opacity-[0.06]"
          aria-hidden="true"
        />
        <div className="container py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground bg-background/60 backdrop-blur">
              {homeContent?.subtitle || "Edmonton, Alberta • Since 1922"}
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
              {homeContent?.title || "Edmonton Chess Club"}
            </h1>
            <div className="mt-6 text-lg text-muted-foreground max-w-2xl">
              <StoryblokContent content={homeContent?.description} />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {homeContent?.cta_primary && (
                <Button asChild size="lg">
                  <Link to={homeContent.cta_primary.link}>
                    {homeContent.cta_primary.text}
                  </Link>
                </Button>
              )}
              {homeContent?.cta_secondary && (
                <Button asChild variant="outline" size="lg">
                  <Link to={homeContent.cta_secondary.link}>
                    {homeContent.cta_secondary.text}
                  </Link>
                </Button>
              )}
              {!homeContent?.cta_primary && !homeContent?.cta_secondary && (
                <>
                  <Button asChild size="lg">
                    <Link to="/membership">Join the Club</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/events">See Events</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {homeContent?.highlights?.map((highlight: any, index: number) => (
            <div key={index} className="rounded-xl border bg-card p-6">
              <div className="text-sm font-medium text-accent-foreground/80">
                {highlight.title}
              </div>
              <div className="mt-2 text-foreground font-semibold">
                {highlight.subtitle}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          )) || (
            <>
              <div className="rounded-xl border bg-card p-6">
                <div className="text-sm font-medium text-accent-foreground/80">
                  Club Nights
                </div>
                <div className="mt-2 text-foreground font-semibold">
                  Tuesdays & Thursdays
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Casual play, coaching, and analysis. Drop in and play a game.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <div className="text-sm font-medium text-accent-foreground/80">
                  Tournaments
                </div>
                <div className="mt-2 text-foreground font-semibold">
                  Monthly Rated Events
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  CFC-rated classical and rapid events for all sections.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <div className="text-sm font-medium text-accent-foreground/80">
                  Learn & Grow
                </div>
                <div className="mt-2 text-foreground font-semibold">
                  Beginner Friendly
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Intro sessions and lectures to help you improve your game.
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Upcoming events */}
      <section className="container py-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            Upcoming Events
          </h2>
          <Button asChild variant="ghost">
            <Link to="/events">View all</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {eventsLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full" />
                  </CardContent>
                </Card>
              ))
            : events.length > 0
              ? events.map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <CardTitle>
                        {event.content?.title || event.name}
                      </CardTitle>
                      <CardDescription>{event.content?.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {event.content?.description}
                      </p>
                    </CardContent>
                  </Card>
                ))
              : // Fallback to static content if no Storyblok events
                [
                  {
                    title: "Tuesday Rapid League",
                    date: "Every Tuesday • 7:00 PM",
                    desc: "Fast-paced 5+0 rounds with Swiss pairings. All levels welcome.",
                  },
                  {
                    title: "Monthly Classical Open",
                    date: "First Saturday • 10:00 AM",
                    desc: "CFC-rated classical event with multiple sections.",
                  },
                  {
                    title: "Beginner Night",
                    date: "Every Thursday • 6:30 PM",
                    desc: "Coaching and casual games for newcomers to the game.",
                  },
                ].map((e, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{e.title}</CardTitle>
                      <CardDescription>{e.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{e.desc}</p>
                    </CardContent>
                  </Card>
                ))}
        </div>
      </section>

      {/* Visit */}
      <section className="container py-16">
        <div className="rounded-2xl border bg-gradient-to-br from-primary/5 to-accent/10 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
                {homeContent?.visit_section?.title || "Visit the Club"}
              </h3>
              <div className="mt-3 text-muted-foreground max-w-2xl">
                <StoryblokContent
                  content={homeContent?.visit_section?.description}
                />
              </div>
              {homeContent?.visit_section?.tags && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {homeContent.visit_section.tags.map(
                    (tag: string, index: number) => (
                      <div
                        key={index}
                        className="rounded-lg border bg-background px-4 py-2 text-sm"
                      >
                        {tag}
                      </div>
                    ),
                  )}
                </div>
              )}
              {!homeContent?.visit_section?.tags && (
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="rounded-lg border bg-background px-4 py-2 text-sm">
                    Tue & Thu • 6:30–10:00 PM
                  </div>
                  <div className="rounded-lg border bg-background px-4 py-2 text-sm">
                    Casual & Rated Play
                  </div>
                </div>
              )}
            </div>
            <div className="self-center">
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="text-sm text-muted-foreground">
                  {homeContent?.contact_info?.label || "Questions?"}
                </div>
                <div className="mt-1 font-medium">
                  {homeContent?.contact_info?.email ||
                    "contact@edmontonchessclub.ca"}
                </div>
                <Button asChild className="mt-4 w-full">
                  <a
                    href={`mailto:${homeContent?.contact_info?.email || "contact@edmontonchessclub.ca"}`}
                  >
                    {homeContent?.contact_info?.button_text || "Get in touch"}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
