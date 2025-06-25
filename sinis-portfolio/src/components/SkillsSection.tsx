import React, { use, useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend Skills
  { name: "JavaScript", level: 95, categories: "frontend" },
  { name: "TypeScript", level: 95, categories: "frontend" },
  { name: "React", level: 95, categories: "frontend" },
  { name: "Node.js", level: 95, categories: "frontend" },
  { name: "Express", level: 95, categories: "frontend" },
  { name: "MongoDB", level: 95, categories: "frontend" },

  // Backend Skills
  { name: "PostgreSQL", level: 95, categories: "backend" },
  { name: "GraphQL", level: 95, categories: "backend" },
  { name: "REST APIs", level: 40, categories: "backend" },

  // Devops Skills
  { name: "Docker", level: 95, categories: "devops" },
  { name: "Kubernetes", level: 95, categories: "devops" },
  { name: "AWS", level: 10, categories: "devops" },
  { name: "Azure", level: 95, categories: "devops" },
  { name: "CI/CD", level: 95, categories: "devops" },
];

const categories = ["all", "frontend", "backend", "devops"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.categories === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flexf flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
