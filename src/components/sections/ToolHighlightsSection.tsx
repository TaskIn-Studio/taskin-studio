import type { FC } from 'react';
import { ToolCard } from '@/components/ToolCard';
import { DollarSign, FileText, Share2, Wand2 } from 'lucide-react';

const tools = [
  {
    icon: <DollarSign size={28} />,
    title: "Currency Converter",
    url: "https://converter.taskin.studio",
    status: "Live" as "Live" | "Soon",
    description: "Real-time, accurate currency conversion at your fingertips. Simple and fast."
  },
  {
    icon: <Share2 size={28} />,
    title: "Social Media Post Generator",
    url: "https://creator.taskin.studio",
    status: "Live" as "Live" | "Soon",
    description: "Generate engaging social media content effortlessly with AI assistance."
  },
  {
    icon: <FileText size={28} />,
    title: "Universal Document Formatter",
    status: "Soon" as "Live" | "Soon",
    description: "Format any document to your desired style instantly. PDFs, Word docs, and more."
  },
  {
    icon: <Wand2 size={28} />,
    title: "No-code Prompt Builder",
    status: "Soon" as "Live" | "Soon",
    description: "Craft powerful AI prompts for automation without writing a single line of code."
  }
];

export const ToolHighlightsSection: FC = () => {
  return (
    <section id="tools" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Our Growing <span className="text-primary">Tool Ecosystem</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Focused, minimal AI-powered tools built for creators, indie hackers, and professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              icon={tool.icon}
              title={tool.title}
              url={tool.url}
              status={tool.status}
              description={tool.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
