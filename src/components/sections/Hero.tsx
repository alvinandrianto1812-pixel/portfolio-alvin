"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="mb-4">
            <span className="inline-block text-accent font-mono text-xs sm:text-sm md:text-base border border-accent/30 bg-accent/5 px-3 py-1.5 md:px-4 rounded-full leading-tight">
              {portfolioData.personalInfo.subtext}
            </span>
          </motion.div>
          
          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
              {portfolioData.personalInfo.name}
            </span>
          </motion.h1>
          
          <motion.h2 variants={item} className="text-xl sm:text-2xl md:text-4xl text-foreground/70 font-mono mb-8 md:mb-8">
            {portfolioData.personalInfo.title}
          </motion.h2>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 md:mb-16">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 bg-accent text-background w-full sm:w-auto px-8 py-4 rounded-full font-bold hover:bg-white transition-colors"
            >
              View Projects <ArrowRight size={20} />
            </a>
            <a
              href={portfolioData.personalInfo.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/20 w-full sm:w-auto px-8 py-4 rounded-full font-bold hover:border-accent hover:text-accent transition-colors bg-white/5 backdrop-blur-sm"
            >
              Download CV <Download size={20} />
            </a>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 mt-12">
            {portfolioData.heroStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl font-bold font-mono text-accent">{stat.value}</span>
                <span className="text-sm text-foreground/60">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
