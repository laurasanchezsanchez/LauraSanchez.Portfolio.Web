"use client";

import { Skill } from "@/lib/types";
import { Layers, Code, Database, Cloud } from "lucide-react";

interface SkillsProps {
  data: Skill[] | null;
  isLoading: boolean;
  error: string | null;
}

const categoryIcons = {
  Languages: Code,
  Frameworks: Layers,
  Databases: Database,
  DevOps: Cloud,
};

const categoryColors = {
  Languages: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30",
  Frameworks: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30",
  Databases: "from-amber-500/20 to-amber-500/5 border-amber-500/30",
  DevOps: "from-violet-500/20 to-violet-500/5 border-violet-500/30",
};

const badgeColors = {
  Languages: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Frameworks: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Databases: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  DevOps: "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

export function Skills({ data, isLoading, error }: SkillsProps) {
  if (isLoading) {
    return (
      <section id="skills" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-secondary rounded-lg mb-12" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
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
      <section id="skills" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">Unable to load skills</p>
        </div>
      </section>
    );
  }

  // Group skills by category
  const groupedSkills = data.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categories = ["Languages", "Frameworks", "Databases", "DevOps"] as const;

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            const skills = groupedSkills[category] || [];

            return (
              <div
                key={category}
                className={`relative overflow-hidden rounded-xl border bg-gradient-to-b p-6 ${categoryColors[category]}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-background/50">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-full text-sm border ${badgeColors[category]}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
