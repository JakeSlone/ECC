import Layout from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEvents, usePage } from "@/hooks/useStoryblok";
import StoryblokContent from "@/components/StoryblokContent";
import { Skeleton } from "@/components/ui/skeleton";

export default function Events() {
  const { data: eventsData, isLoading: eventsLoading } = useEvents();
  const { data: pageData, isLoading: pageLoading } = usePage("events");

  const pageContent = pageData?.story?.content;
  const events = eventsData?.stories || [];

  if (pageLoading) {
    return (
      <Layout>
        <section className="container py-20">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-2/3 mb-10" />
          <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container py-20">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
          {pageContent?.title || "Events & Tournaments"}
        </h1>
        <div className="mt-4 text-muted-foreground max-w-2xl">
          <StoryblokContent content={pageContent?.description} />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                      {event.content?.location && (
                        <p className="text-xs text-muted-foreground mt-2">
                          📍 {event.content.location}
                        </p>
                      )}
                      {event.content?.registration_required && (
                        <p className="text-xs text-primary mt-2 font-medium">
                          Registration Required
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))
              : // Fallback to static content if no Storyblok events
                [
                  {
                    title: "Tuesday Rapid League",
                    date: "Every Tuesday • 7:00 PM",
                    desc: "5+0 rapid games. All levels welcome. Swiss pairings.",
                  },
                  {
                    title: "Monthly Rated Tournament",
                    date: "First Saturday • 10:00 AM",
                    desc: "CFC-rated classical event. Registration required.",
                  },
                  {
                    title: "Beginner Night & Coaching",
                    date: "Every Thursday • 6:30 PM",
                    desc: "Friendly instruction and casual games for newcomers.",
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
    </Layout>
  );
}
