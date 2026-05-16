"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/portfolio/navigation";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { ExperienceSection } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Footer } from "@/components/portfolio/footer";
import {
  AboutData,
  Skill,
  Experience,
  Project,
} from "@/lib/types";

const API_BASE_URL = "https://laura-sanchez-portfolio-api.onrender.com/api";
//const API_BASE_URL = "https://localhost:7020/api"

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

function useFetch<T>(endpoint: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        
        const data = await response.json();
        setState({ data, isLoading: false, error: null });
      } catch (err) {
        setState({
          data: null,
          isLoading: false,
          error: err instanceof Error ? err.message : "An error occurred",
        });
      }
    };

    fetchData();
  }, [endpoint]);

  return state;
}

export default function PortfolioPage() {
  const aboutState = useFetch<AboutData>("/about");
  const skillsState = useFetch<Skill[]>("/skills");
  const experienceState = useFetch<Experience[]>("/experience");
  const projectsState = useFetch<Project[]>("/projects");

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <Hero
        data={aboutState.data}
        isLoading={aboutState.isLoading}
        error={aboutState.error}
      />
      
      <About
        data={aboutState.data}
        isLoading={aboutState.isLoading}
        error={aboutState.error}
      />
      
      <Skills
        data={skillsState.data}
        isLoading={skillsState.isLoading}
        error={skillsState.error}
      />
      
      <ExperienceSection
        data={experienceState.data || null}
        isLoading={experienceState.isLoading}
        error={experienceState.error}
      />
      
      <Projects
        data={projectsState.data || null}
        isLoading={projectsState.isLoading}
        error={projectsState.error}
      />
      
      <Footer data={aboutState.data} />
    </main>
  );
}
