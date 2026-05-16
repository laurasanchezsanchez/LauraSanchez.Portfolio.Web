"use client";

import { Project } from "@/lib/types";
import { FolderGit2, Github, ExternalLink } from "lucide-react";

interface ProjectsProps {
  data: Project[] | null;
  isLoading: boolean;
  error: string | null;
}

export function Projects({ data, isLoading, error }: ProjectsProps) {
  if (isLoading) {
    return (
      <section id="projects" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-secondary rounded-lg mb-12" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-secondary rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section id="projects" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">Unable to load projects</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <FolderGit2 className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FolderGit2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3 text-pretty flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}