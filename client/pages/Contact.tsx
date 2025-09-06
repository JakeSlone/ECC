import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Edmonton Chess Club - Get in Touch"
        description="Contact Edmonton Chess Club for membership inquiries, chess lessons, or general questions. Located at 10840 124 St #204, Edmonton, AB. Call 780-424-0283 or email contact@edmontonchess.com."
        keywords="contact Edmonton chess club, chess club phone number, chess club email, chess club address, chess club contact info, Edmonton chess club location"
        canonical="https://edmontonchess.com/contact"
      />
      <section className="container py-20 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
          Contact Us
        </h1>
        <div className="mt-4 text-muted-foreground">
          Get in touch with us for questions about membership, events, or
          general inquiries. We'd love to hear from you!
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-card p-6">
            <div className="font-medium">Email</div>
            <a
              className="text-sm text-muted-foreground hover:text-foreground"
              href="mailto:contact@edmontonchess.com"
            >
              contact@edmontonchess.com
            </a>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <div className="font-medium">Phone</div>
            <a
              className="text-sm text-muted-foreground hover:text-foreground"
              href="tel:780-424-0283"
            >
              780-424-0283
            </a>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <div className="font-medium">Visit</div>
            <div className="text-sm text-muted-foreground">
              10840 124 St #204, Edmonton, AB T5M 0H3
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
