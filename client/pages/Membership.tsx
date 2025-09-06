import Layout from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMembershipTiers, usePage } from "@/hooks/useStoryblok";
import StoryblokContent from "@/components/StoryblokContent";
import { Skeleton } from "@/components/ui/skeleton";

export default function Membership() {
  const { data: tiersData, isLoading: tiersLoading } = useMembershipTiers();
  const { data: pageData, isLoading: pageLoading } = usePage("membership");

  const pageContent = pageData?.story?.content;
  const tiers = tiersData?.stories || [];

  if (pageLoading) {
    return (
      <Layout>
        <section className="container py-20">
          <div className="max-w-2xl">
            <Skeleton className="h-12 w-1/2 mb-4" />
            <Skeleton className="h-6 w-3/4" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/5" />
                  </div>
                  <Skeleton className="h-10 w-full mt-6" />
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
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
            {pageContent?.title || "Membership"}
          </h1>
          <div className="mt-4 text-muted-foreground">
            <StoryblokContent content={pageContent?.description} />
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiersLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="flex flex-col">
                  <CardHeader>
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                      <Skeleton className="h-4 w-4/5" />
                    </div>
                    <Skeleton className="h-10 w-full mt-6" />
                  </CardContent>
                </Card>
              ))
            : tiers.length > 0
              ? tiers.map((tier) => (
                  <Card
                    key={tier.id}
                    className={`flex flex-col ${tier.content?.featured ? "ring-2 ring-primary" : ""}`}
                  >
                    <CardHeader>
                      <CardTitle>{tier.content?.name || tier.name}</CardTitle>
                      <CardDescription>{tier.content?.price}</CardDescription>
                      {tier.content?.description && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {tier.content.description}
                        </p>
                      )}
                    </CardHeader>
                    <CardContent className="flex-1">
                      {tier.content?.perks ? (
                        <div className="text-sm text-muted-foreground">
                          <StoryblokContent content={tier.content.perks} />
                        </div>
                      ) : (
                        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                          {tier.content?.perks_list?.map(
                            (perk: string, index: number) => (
                              <li key={index}>{perk}</li>
                            ),
                          )}
                        </ul>
                      )}
                      <Button className="mt-6 w-full">
                        {tier.content?.button_text ||
                          `Join ${tier.content?.name || tier.name}`}
                      </Button>
                    </CardContent>
                  </Card>
                ))
              : // Fallback to static content if no Storyblok tiers
                [
                  {
                    name: "Adult",
                    price: "$60 / year",
                    perks: [
                      "Access to club nights",
                      "League participation",
                      "Discounted tournaments",
                    ],
                  },
                  {
                    name: "Student",
                    price: "$40 / year",
                    perks: ["All Adult perks", "Junior coaching included"],
                  },
                  {
                    name: "Family",
                    price: "$120 / year",
                    perks: [
                      "Up to 4 household members",
                      "All club benefits included",
                    ],
                  },
                ].map((t, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{t.name}</CardTitle>
                      <CardDescription>{t.price}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        {t.perks.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                      <Button className="mt-6 w-full">Join {t.name}</Button>
                    </CardContent>
                  </Card>
                ))}
        </div>
      </section>
    </Layout>
  );
}
