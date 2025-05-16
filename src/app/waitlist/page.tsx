"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "You're on the list!",
      description: `We'll notify ${email} when new tools launch.`,
    });
    setEmail("");
  };

  return (
    <div className="container mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <Mail size={64} className="text-primary mb-6" />
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        Join Our Waitlist
      </h1>
      <p className="max-w-md mx-auto text-lg text-muted-foreground mb-8">
        Be the first to know about new tools, exclusive updates, and special offers from Taskin Studio.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <Label htmlFor="email" className="sr-only">Email Address</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 text-lg"
          />
        </div>
        <Button type="submit" size="lg" className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Notify Me"}
        </Button>
      </form>
      <p className="mt-6 text-xs text-muted-foreground">
        We respect your privacy. No spam, ever.
      </p>
    </div>
  );
}
