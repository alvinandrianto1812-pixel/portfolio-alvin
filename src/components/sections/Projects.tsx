"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import TiltCard from "@/components/ui/TiltCard";
import { ExternalLink } from "lucide-react";
import { GithubIcon, FigmaIcon } from "@/components/ui/Icons";

export default function Projects() {
  const featuredProjects = portfolioData.projects.filter(p => p.type === "featured");
  const regularProjects = portfolioData.projects.filter(p => p.type === "regular");

  const getIcon = (type: string) => {
    switch (type) {
      case "github": return <GithubIcon width={20} height={20} />;
      case "figma": return <FigmaIcon width={20} height={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4">
            <span className="text-accent font-mono text-xl md:text-2xl">03.</span>
            Selected Work
          </h2>

          {/* Featured Projects */}
          <div className="flex flex-col gap-16 mb-24">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <TiltCard className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-accent font-mono text-sm">Featured Project</span>
                        <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-mono border border-white/10">{project.badge}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 hover:text-accent transition-colors">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          {project.title}
                        </a>
                      </h3>
                      <div className="bg-white/5 p-6 rounded-xl border border-white/5 mb-6 backdrop-blur-md">
                        <p className="text-foreground/80 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <ul className="flex flex-wrap gap-4 font-mono text-sm text-foreground/60 mb-8">
                        {project.tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                      >
                        {getIcon(project.linkType)}
                        <span>View Project</span>
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Regular Projects */}
          <h3 className="text-2xl font-bold mb-8 font-mono text-center">Other Noteworthy Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="h-full"
              >
                <TiltCard className="h-full flex flex-col p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-accent">
                      <ExternalLink size={32} />
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-accent transition-colors"
                    >
                      {getIcon(project.linkType)}
                    </a>
                  </div>
                  <h4 className="text-xl font-bold mb-4 hover:text-accent transition-colors">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h4>
                  <p className="text-foreground/70 text-sm mb-8 flex-grow">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-foreground/50 mt-auto">
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
