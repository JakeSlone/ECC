import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: ", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="container py-24 text-center">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
          Error 404
        </div>
        <h1 className="mt-6 font-serif text-5xl tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
