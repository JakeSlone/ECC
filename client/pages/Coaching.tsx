import Layout from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import coachesData from "@shared/coaches.json";

interface Coach {
  id: number;
  name: string;
  title: string;
  rating: string;
  specialties: string[];
  experience: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
  hourlyRate: string;
}

export default function Coaching() {
  const coaches: Coach[] = coachesData.coaches;

  return (
    <Layout>
      <SEO
        title="Chess Coaching - Local Chess Instruction"
        description="Learn from experienced chess coaches at Edmonton Chess Club."
        keywords="chess coaching Edmonton, chess lessons, chess instruction, chess teachers, chess training, chess education, chess titled coaches"
        canonical="https://edmontonchess.com/coaching"
      />
      <section className="container py-20">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
            Chess Coaching
          </h1>
          <div className="mt-4 text-lg text-muted-foreground">
            Learn from local coaches who will help you improve your game.
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Want to be a coach?</strong>
              <br /> If you'd like to be featured here please reach out to
              contact@edmontonchess.com
              <br />
              ECC Membership is required.
            </p>
          </div>
        </div>

        {/* Coaches Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {coaches.map((coach) => (
            <Card key={coach.id} className="overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={coach.image}
                  alt={`${coach.name} - ${coach.title}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{coach.name}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground">
                      {coach.title}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {coach.rating}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {coach.experience}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {coach.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {coach.bio}
                </p>
                <div className="pt-2 space-y-1">
                  <div className="text-sm">
                    <span className="font-medium">Rate:</span>{" "}
                    <span className="text-foreground font-medium">
                      {coach.hourlyRate}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href={`mailto:${coach.email}`}
                      className="text-primary hover:underline"
                    >
                      {coach.email}
                    </a>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Phone:</span>{" "}
                    <a
                      href={`tel:${coach.phone.replace(/[^\d]/g, "")}`}
                      className="text-primary hover:underline"
                    >
                      {coach.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
