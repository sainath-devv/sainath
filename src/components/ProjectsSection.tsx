import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  href: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Seed - Mechnido",
    category: "UI/UX Design & Web Development",
    year: "2024",
    image: "https://kbolnguksoixmiwwgxbl.supabase.co/storage/v1/object/public/project/Seed.jpg",
    description: "Rebuilt the website with a focus on intuitive UI/UX, strengthening my understanding of user behavior and modern design practices",
    href: "https://mseedsaiduplicate.netlify.app/"
  },
  {
    id: 2,
    title: "Grozon",
    category: "Web Development",
    year: "2024",
    image: "https://kbolnguksoixmiwwgxbl.supabase.co/storage/v1/object/public/project/Grozon.jpg",
    description: "‘Grozon’ – an educational learning and career path platform for a startup, where I worked on recreating the website and gained a strong understanding of design and development workflows.",
    href: "https://grozon.vercel.app/#home"
  },
  {
    id: 3,
    title: "Tnvista",
    category: "Web Development",
    year: "2024",
    image: "https://kbolnguksoixmiwwgxbl.supabase.co/storage/v1/object/public/project/Soon.jpg",
    description: "",
    href: "#"
  },
  {
    id: 4,
    title: "Joy Water Sports",
    category: "Web Development",
    year: "2023",
    image: "https://kbolnguksoixmiwwgxbl.supabase.co/storage/v1/object/public/project/Soon.jpg",
    description: "",
    href: "#"
  }
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="work" ref={containerRef} className="relative py-24 md:py-64 bg-[#050505] overflow-hidden">
      
      {/* Background Text Accent */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.01] pointer-events-none select-none overflow-hidden">
        <h2 className="text-[40vw] font-bold tracking-tighter uppercase leading-none">
          Works
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-40 gap-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white/30 font-mono text-[10px] uppercase tracking-[0.6em] mb-4 md:mb-6 block"
            >
              Selected Works
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-7xl md:text-[12rem] font-bold tracking-tighter text-white leading-[0.8] uppercase"
            >
              Projects<span className="text-white/20">.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <p className="text-white/30 text-sm md:text-lg font-light text-left md:text-right max-w-[280px] leading-relaxed">
              Pushing the boundaries of digital design and engineering.
            </p>
            <div className="w-12 h-[1px] bg-white/20" />
          </motion.div>
        </div>

        {/* My Style: Dynamic Grid with Spotlight Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-48">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index % 2 * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative flex flex-col ${index % 2 !== 0 ? 'md:mt-48' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <a href={project.href} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 group-hover:cursor-pointer block">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover brightness-[0.7] group-hover:brightness-100 transition-all duration-700"
                />
                
                {/* Overlay Info on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6 md:p-8">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-mono">
                      {project.year}
                    </span>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <p className="text-white text-sm font-light leading-relaxed max-w-[200px] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.description}
                  </p>
                </div>
              </a>

              {/* Project Details */}
              <div className="mt-6 md:mt-8 flex justify-between items-start">
                <div className="flex flex-col gap-1 md:gap-2">
                  <a href={project.href} className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase group-hover:text-white/60 transition-colors duration-500">
                    {project.title}
                  </a>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.5em] text-white/30 font-mono">
                    {project.category}
                  </span>
                </div>
                <span className="text-white/10 font-mono text-xs">0{project.id}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-64 flex justify-center"
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
