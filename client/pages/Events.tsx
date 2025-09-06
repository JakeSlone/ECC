import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

export default function Events() {
  return (
    <Layout>
      <SEO
        title="Chess Events & Calendar - Edmonton Chess Club"
        description="View upcoming chess events, tournaments, and club meetings at Edmonton Chess Club. Join us for weekly games, tournaments, and special chess events in Edmonton, Alberta."
        keywords="chess events Edmonton, chess tournaments Alberta, chess calendar, chess meetings, chess competitions, chess club events"
        canonical="https://edmontonchess.com/events"
      />
      <section className="container py-20">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
          Events & Tournaments
        </h1>
        <div className="mt-4 text-muted-foreground max-w-2xl">
          Join us for regular club nights, rated tournaments, and special events
          throughout the year. All events are open to members and visitors.
        </div>
        <div className="mt-10 flex justify-center">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FEdmonton&src=ZjVlZmE2YmNkMjRhY2I3NDgzY2VjYWZiZTc3YWRhNWRiZTAyYmZmZWI1YzBkOThkYzdjY2RiMTBiNzRmZmFiYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457"
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            className="rounded-lg border shadow-lg"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
