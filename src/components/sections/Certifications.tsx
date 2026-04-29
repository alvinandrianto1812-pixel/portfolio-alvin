"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4">
            <span className="text-accent font-mono text-xl md:text-2xl">05.</span>
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.certifications.map((cert: any, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-accent/30 transition-colors flex flex-col h-full"
              >
                <div className="flex items-start gap-4 flex-grow">
                  <div className="text-accent mt-1">
                    <Award size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{cert.title}</h3>
                    <p className="text-sm font-mono text-foreground/60 mb-2">{cert.issuer}</p>
                    {cert.year && (
                      <p className="text-xs text-foreground/40 font-mono mb-1">Year: {cert.year}</p>
                    )}
                    {cert.credentialId && (
                      <p className="text-xs text-foreground/40 font-mono">ID: {cert.credentialId}</p>
                    )}
                  </div>
                </div>
                {cert.viewUrl && (
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <a
                      href={cert.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:text-white transition-colors"
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
