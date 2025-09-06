import Layout from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function Membership() {
  return (
    <Layout>
      <SEO
        title="Chess Club Membership - Join Edmonton Chess Club"
        description="Join Edmonton Chess Club! Choose from our membership tiers and enjoy access to chess lessons, tournaments, club facilities, and a vibrant chess community in Edmonton, Alberta."
        keywords="chess club membership Edmonton, join chess club, chess lessons membership, chess club benefits, chess community membership, Edmonton chess club join"
        canonical="https://edmontonchess.com/membership"
      />
      <section className="container py-20">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
            Membership
          </h1>
          <div className="mt-4 text-muted-foreground">
            No membership required for your first visit.
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Adult</CardTitle>
              <CardDescription>$25 / year</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Access to casual nights</li>
                <li>Weekly tournament access</li>
                <li>Access to the club's Lichess team</li>
              </ul>
              <Button className="mt-6 w-full">Drop by to join</Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col ">
            <CardHeader>
              <CardTitle>Junior</CardTitle>
              <CardDescription>$15 / year</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Access to casual nights</li>
                <li>Weekly tournament access</li>
                <li>Access to the club's Lichess team</li>
              </ul>
              <Button className="mt-6 w-full">Drop by to join</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
