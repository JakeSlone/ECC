import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Placeholder({ title }: { title: string }) {
  return (
    <section className="container py-20">
      <div className="max-w-2xl">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-muted-foreground">
          This page is ready to be customized. Tell me what content and features
          you want here and I'll build it.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
