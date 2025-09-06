import Layout from "@/components/layout/Layout";
import { usePage } from "@/hooks/useStoryblok";
import StoryblokContent from "@/components/StoryblokContent";
import { Skeleton } from "@/components/ui/skeleton";

export default function About() {
  const { data: aboutData, isLoading, error } = usePage("about");
  const aboutContent = aboutData?.story?.content;

  if (isLoading && !error) {
    return (
      <Layout>
        <section className="container py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <Skeleton className="h-12 w-3/4 mb-6" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-3/4" />
            </div>
            <div className="rounded-xl border bg-card p-6">
              <Skeleton className="h-6 w-1/2 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
              {aboutContent?.title || "About the Edmonton Chess Club"}
            </h1>
            <div className="mt-6 text-lg text-muted-foreground">
              <StoryblokContent content={aboutContent?.description} />
            </div>
            {aboutContent?.additional_content && (
              <div className="mt-4 text-muted-foreground">
                <StoryblokContent content={aboutContent.additional_content} />
              </div>
            )}
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h2 className="text-xl font-semibold">
              {aboutContent?.offerings?.title || "What we offer"}
            </h2>
            {aboutContent?.offerings?.list ? (
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <StoryblokContent content={aboutContent.offerings.list} />
              </div>
            ) : (
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc pl-5">
                <li>Weekly club nights and casual play</li>
                <li>USCF/CFC-rated tournaments and leagues</li>
                <li>Coaching, lectures, and analysis sessions</li>
                <li>Junior programs and scholastic events</li>
              </ul>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
