"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative pb-40">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-accent font-mono mb-4 text-sm md:text-base">06. What&apos;s Next?</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8">Get In Touch</h2>
          <p className="text-foreground/70 text-lg leading-relaxed mb-12">
            {portfolioData.personalInfo.tagline}
          </p>
          
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="inline-block border-2 border-accent text-accent px-10 py-5 rounded-full font-bold hover:bg-accent hover:text-background transition-colors text-lg"
          >
            Say Hello
          </a>

          <div className="flex justify-center gap-8 mt-20">
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-foreground/60 hover:text-accent transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors" aria-label="LinkedIn">
              <LinkedinIcon width={24} height={24} />
            </a>
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors" aria-label="GitHub">
              <GithubIcon width={24} height={24} />
            </a>
            <a href={`tel:${portfolioData.personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-foreground/60 hover:text-accent transition-colors" aria-label="Phone">
              <Phone size={24} />
            </a>
          </div>
        </motion.div>
      </div>
      <footer className="absolute bottom-6 w-full text-center">
        <p className="text-foreground/40 font-mono text-sm">
          Designed & Built by {portfolioData.personalInfo.name}
        </p>
      </footer>
    </section>
  );
}
