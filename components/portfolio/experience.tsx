"use client";

import { Experience } from "@/lib/types";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceProps {
  data: Experience[] | null;
  isLoading: boolean;
  error: string | null;
}

export function ExperienceSection({ data, isLoading, error }: ExperienceProps) {
  if (isLoading) {
    return (
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 w-40 bg-secondary rounded-lg mb-12" />
            <div className="space-y-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-48 bg-secondary rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">Unable to load experience</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {data.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative pl-8 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-auto top-0 w-3 h-3 rounded-full bg-primary border-4 border-background ${
                    index % 2 === 0 ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
                  }`}
                />

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
