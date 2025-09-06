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
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-blue-600 mt-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-blue-800 font-medium mb-1">
                Stay updated on Facebook!
              </p>
              <p className="text-sm text-blue-700 mb-3">
                Follow us on Facebook for real-time event updates, last-minute
                changes, and special announcements about tournaments and club
                activities.
              </p>
              <a
                href="https://www.facebook.com/TheEdmontonChessClub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow for Updates
              </a>
            </div>
          </div>
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
