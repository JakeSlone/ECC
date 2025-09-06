import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { usePage } from "@/hooks/useStoryblok";
import StoryblokContent from "@/components/StoryblokContent";
import { Skeleton } from "@/components/ui/skeleton";

export default function Contact() {
  const { data: contactData, isLoading } = usePage("contact");
  const contactContent = contactData?.story?.content;

  if (isLoading) {
    return (
      <Layout>
        <section className="container py-20 max-w-3xl">
          <Skeleton className="h-12 w-1/2 mb-4" />
          <Skeleton className="h-6 w-3/4 mb-8" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6">
              <Skeleton className="h-6 w-16 mb-2" />
              <Skeleton className="h-4 w-48" />
            </div>
            <div className="rounded-xl border bg-card p-6">
              <Skeleton className="h-6 w-16 mb-2" />
              <Skeleton className="h-4 w-64" />
            </div>
          </div>
          <div className="mt-8">
            <Skeleton className="h-10 w-32" />
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container py-20 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
          {contactContent?.title || "Contact Us"}
        </h1>
        <div className="mt-4 text-muted-foreground">
          <StoryblokContent content={contactContent?.description} />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {contactContent?.contact_methods?.map(
            (method: any, index: number) => (
              <div key={index} className="rounded-xl border bg-card p-6">
                <div className="font-medium">{method.title}</div>
                {method.type === "email" ? (
                  <a
                    className="text-sm text-muted-foreground hover:text-foreground"
                    href={`mailto:${method.value}`}
                  >
                    {method.value}
                  </a>
                ) : method.type === "phone" ? (
                  <a
                    className="text-sm text-muted-foreground hover:text-foreground"
                    href={`tel:${method.value}`}
                  >
                    {method.value}
                  </a>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    {method.value}
                  </div>
                )}
              </div>
            ),
          ) || (
            <>
              <div className="rounded-xl border bg-card p-6">
                <div className="font-medium">Email</div>
                <a
                  className="text-sm text-muted-foreground hover:text-foreground"
                  href="mailto:contact@edmontonchessclub.ca"
                >
                  contact@edmontonchessclub.ca
                </a>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <div className="font-medium">Visit</div>
                <div className="text-sm text-muted-foreground">
                  118 Avenue NW, Edmonton, AB • Tue & Thu 6:30–10:00 PM
                </div>
              </div>
            </>
          )}
        </div>
        <div className="mt-8">
          <Button asChild>
            <a
              href={`mailto:${contactContent?.primary_email || "contact@edmontonchessclub.ca"}`}
            >
              {contactContent?.cta_text || "Send us an email"}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
