import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Send, MessageCircle } from 'lucide-react'; // Using MessageCircle for Discord as a generic chat icon
import Link from 'next/link';

export const CommunitySection: FC = () => {
  return (
    <section id="community" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Join the <span className="text-primary">Taskin Studio Community</span>
        </h2>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">
          Be the first to access upcoming tools, get updates, and connect with other makers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button asChild size="lg" className="rounded-lg shadow-md hover:shadow-lg transition-shadow bg-sky-500 hover:bg-sky-600 text-white">
            <a href="#" target="_blank" rel="noopener noreferrer"> {/* Replace # with actual Telegram link */}
              <Send size={20} className="mr-2" />
              Join on Telegram
            </a>
          </Button>
          <Button asChild size="lg" className="rounded-lg shadow-md hover:shadow-lg transition-shadow bg-indigo-500 hover:bg-indigo-600 text-white">
             <a href="#" target="_blank" rel="noopener noreferrer"> {/* Replace # with actual Discord link */}
              <MessageCircle size={20} className="mr-2" />
              Join on Discord
            </a>
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Alternatively, <Link href="/waitlist" className="text-primary hover:underline">join our waitlist</Link> for email updates.
        </p>
      </div>
    </section>
  );
};
