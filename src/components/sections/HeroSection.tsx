import type { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export const HeroSection: FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Tools that do <span className="text-primary">one thing</span>.
          <br />
          Exceptionally well.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          TaskIn Studio builds simple AI tools to save time, automate work, and
          unlock creativity.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href="#tools">
              Explore Tools
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href="#community">
              Join Community
              <Users size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
