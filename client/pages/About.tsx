import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Edmonton Chess Club"
        description="Learn about Edmonton Chess Club's history, mission, and commitment to fostering a welcoming chess community for players of all skill levels in Edmonton, Alberta."
        keywords="Edmonton chess club history, chess community Edmonton, chess club mission, chess lessons Edmonton, chess tournaments Alberta"
        canonical="https://edmontonchess.com/about"
      />
      <section className="container py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
              About Us
            </h1>
            <div className="mt-6 text-lg text-muted-foreground">
              Founded in 1908, the Edmonton Chess Club has been a cornerstone of
              the local chess community for over a century. We provide a
              welcoming environment for players of all ages and skill levels to
              learn, play, and grow in the game of chess.
            </div>
            <div className="mt-4 text-muted-foreground">
              Our club is affiliated with the Chess Federation of Canada (CFC)
              and regularly hosts rated tournaments, coaching sessions, and
              social events. We believe chess is a game for everyone and work to
              make it accessible to all members of our community.
            </div>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h2 className="text-xl font-semibold">What we offer</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc pl-5">
              <li>Weekly club nights and casual play</li>
              <li>FIDE/CFC-rated tournaments and leagues</li>
              <li>Coaching</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
