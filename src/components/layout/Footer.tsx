import Link from 'next/link';
import type { FC } from 'react';
import { Github, Twitter, Send, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/Logo';

export const Footer: FC = () => {
  return (
    <footer className="bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">
              Simple AI tools for builders.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Tools</h3>
            <ul className="space-y-2">
              <li><a href="https://converter.taskin.studio" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">Currency Converter</a></li>
              <li><a href="https://creator.taskin.studio" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">Social Post Generator</a></li>
              <li><span className="text-sm text-muted-foreground">Document Formatter (Soon)</span></li>
              <li><span className="text-sm text-muted-foreground">Prompt Builder (Soon)</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors flex items-center"><Send size={16} className="mr-2"/> Telegram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors flex items-center"><MessageCircle size={16} className="mr-2"/> Discord</a></li>
            </ul>
             <h3 className="text-lg font-semibold text-foreground mb-3 mt-4">Socials</h3>
            <ul className="space-y-2">
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors flex items-center"><Twitter size={16} className="mr-2"/> Twitter</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors flex items-center"><Github size={16} className="mr-2"/> GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Crafted by builders, for builders. © Taskin Studio 2025
          </p>
        </div>
      </div>
    </footer>
  );
};
