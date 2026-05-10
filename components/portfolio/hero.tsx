"use client";

import { AboutData } from "@/lib/types";
import { Github, Linkedin, Terminal } from "lucide-react";

interface HeroProps {
  data: AboutData | null;
  isLoading: boolean;
  error: string | null;
}

export function Hero({ data, isLoading, error }: HeroProps) {
  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-64 bg-secondary rounded-lg" />
          <div className="h-6 w-48 bg-secondary rounded-lg" />
          <div className="h-4 w-96 bg-secondary rounded-lg" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Terminal className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-destructive">{error}</p>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for work</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-balance">
          {data.name}
        </h1>
        
        <p className="text-2xl md:text-3xl font-medium text-primary mb-6">
          {data.role}
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          {data.tagline}
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium transition-all hover:opacity-90 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border rounded-lg font-medium transition-all hover:bg-secondary/80 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
