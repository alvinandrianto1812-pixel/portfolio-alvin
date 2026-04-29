"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4">
            <span className="text-accent font-mono text-xl md:text-2xl">04.</span>
            Experience
          </h2>

          <div className="space-y-12 border-l-2 border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative md:pl-8 md:border-l-2 md:border-white/10 group hover:border-accent transition-colors"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[41px] md:-left-[9px] top-2 w-4 h-4 rounded-full bg-background border-2 border-accent group-hover:bg-accent transition-colors"></span>
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {exp.role} <span className="text-accent">@ {exp.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-foreground/50 mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-foreground/80 leading-relaxed mt-4 bg-white/5 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
                  {exp.description}
                </p>
                
                {(exp as any).pkm && (exp as any).pkm.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-lg font-semibold text-accent mb-4">Community Service (PKM)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(exp as any).pkm.map((item: any, pkmIdx: number) => {
                        const images = item.images || (item.image ? [item.image] : []);
                        return (
                          <div key={pkmIdx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col hover:border-accent/50 transition-colors">
                            {images.length > 0 && (
                              <div className={`grid gap-2 mb-4 ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                {images.map((img: string, i: number) => (
                                  <div 
                                    key={i} 
                                    className="relative w-full h-40 rounded-lg overflow-hidden border border-white/10 group/img cursor-zoom-in bg-black/40"
                                    onClick={() => setSelectedImage(img)}
                                  >
                                    <Image 
                                      src={img}
                                      alt={item.title}
                                      fill
                                      className="object-contain p-1 group-hover/img:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                            <h5 className="font-bold text-foreground text-sm mb-2">{item.title}</h5>
                            <div className="text-xs text-foreground/70 flex flex-col gap-1.5">
                              <span className="flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {item.location}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                {item.detail}
                              </span>
                              <span className="flex items-center gap-1.5 text-accent mt-0.5 font-mono text-[10px] uppercase tracking-wider">
                                {item.course}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl h-full max-h-[85vh]">
            <Image 
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
          <button 
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-md transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
