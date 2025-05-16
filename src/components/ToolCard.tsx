import type { FC, ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  icon: ReactNode;
  title: string;
  url?: string;
  status: "Live" | "Soon";
  description: string;
}

export const ToolCard: FC<ToolCardProps> = ({ icon, title, url, status, description }) => {
  const isLive = status === "Live" && url;

  const CardInnerContent = () => (
    <>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <Badge variant={isLive ? "default" : "secondary"} className="bg-primary/80 text-primary-foreground capitalize">
          {status.toLowerCase()}
        </Badge>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl font-semibold mb-1">{title}</CardTitle>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        {isLive && (
          <div className="flex items-center text-sm text-primary hover:underline">
            Go to tool
            <ExternalLink size={16} className="ml-1" />
          </div>
        )}
        {!isLive && (
          <p className="text-sm text-muted-foreground italic">Coming soon...</p>
        )}
      </CardContent>
    </>
  );

  return (
    <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {isLive ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-grow">
          <CardInnerContent />
        </a>
      ) : (
        <div className="flex flex-col flex-grow">
          <CardInnerContent />
        </div>
      )}
    </Card>
  );
};
