"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
        >
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-center gap-4">
              <span className="text-accent font-mono text-xl md:text-2xl">01.</span>
              About Me
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              {portfolioData.about.bio}
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-6">
              {portfolioData.about.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-accent/30 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold font-mono text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
