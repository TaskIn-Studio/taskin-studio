import type { FC } from 'react';
import Image from 'next/image';

export const AboutSection: FC = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary">Taskin Studio</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              At Taskin Studio, we believe in the power of simplicity. In a world
              cluttered with complex software, we craft fast, focused AI tools that
              solve single pain points with elegance and precision.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Each utility is designed to be intuitive, reliable, and a joy to use,
              helping you reclaim your time and focus on what matters most.
            </p>
            <div className="p-6 rounded-2xl bg-primary/10 text-primary-foreground shadow-lg">
              <p className="text-xl font-semibold text-primary">
                We’re on a mission to empower 100,000 makers with delightful,
                single-purpose utilities.
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Taskin Studio Philosophy"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl object-cover"
              data-ai-hint="abstract tech"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
