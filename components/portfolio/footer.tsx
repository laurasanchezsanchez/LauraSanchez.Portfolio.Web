"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { AboutData } from "@/lib/types";

interface FooterProps {
  data: AboutData | null;
}

export function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">{data?.name || "Laura Sánchez"}</p>
            <p className="text-sm text-muted-foreground">{data?.role || "Backend Developer"}</p>
          </div>

          <div className="flex items-center gap-4">
            {data?.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            )}
            {data?.linkedin && (
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            )}
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
