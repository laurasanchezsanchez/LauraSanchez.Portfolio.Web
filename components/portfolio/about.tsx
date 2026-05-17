"use client";

import { AboutData } from "@/lib/types";
import { Code2 } from "lucide-react";

interface AboutProps {
  data: AboutData | null;
  isLoading: boolean;
  error: string | null;
}

export function About({ data, isLoading, error }: AboutProps) {
  if (isLoading) {
    return (
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-secondary rounded-lg mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-secondary rounded-lg w-full" />
              <div className="h-4 bg-secondary rounded-lg w-5/6" />
              <div className="h-4 bg-secondary rounded-lg w-4/6" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">Unable to load about information</p>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">About</h2>
        </div>
        
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed pl-6 text-pretty">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}
