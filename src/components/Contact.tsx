import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

const Contact: React.FC = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xMarquee = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const xMarqueeReverse = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="relative py-24 md:py-48 bg-[#050505] overflow-hidden"
    >
      {/* Massive Scrolling Marquee */}
      <div className="absolute top-0 left-0 w-full opacity-[0.03] pointer-events-none select-none flex flex-col gap-4">
        <motion.div 
          style={{ x: xMarquee }}
          className="text-[20vw] font-bold tracking-tighter uppercase whitespace-nowrap leading-none"
        >
          Let's Talk — Let's Talk — Let's Talk — Let's Talk —
        </motion.div>
        <motion.div 
          style={{ x: xMarqueeReverse }}
          className="text-[20vw] font-bold tracking-tighter uppercase whitespace-nowrap leading-none italic text-outline"
        >
          Work Together — Work Together — Work Together —
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
            <div className="flex flex-col gap-8 max-w-xl">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] uppercase"
              >
                Let's build <br />
                <span className="text-white/40 italic">Something</span> <br />
                Great.
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg text-zinc-500 font-light leading-relaxed max-w-sm"
              >
Got an idea or just want to say hi? I’m always open to new projects and collaborations              </motion.p>
            </div>

            <div className="flex flex-col gap-12 items-start md:items-end w-full md:w-auto mt-8 md:mt-0">
              <Magnetic strength={0.2}>
                <a 
                  href="mailto:sainathzotcgomi@gmail.com"
                  className="group relative flex flex-col items-start md:items-end"
                >
                  <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-mono mb-2">
                    Send an email
                  </span>
                  <div className="text-lg sm:text-2xl md:text-4xl font-medium text-white group-hover:text-white/60 transition-colors duration-500 flex items-center gap-2 sm:gap-4 break-all sm:break-normal">
                    sainath.devv@gmail.com
                    <ArrowUpRight size={24} className="shrink-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  </div>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className="h-[1px] bg-white mt-4"
                  />
                </a>
              </Magnetic>

              <div className="flex flex-col gap-4 items-start md:items-end">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-mono">
                  Socials
                </span>
                <div className="flex flex-wrap gap-6 sm:gap-8 text-sm uppercase tracking-widest text-white/60">
                  <Magnetic strength={0.5}><a href="https://www.linkedin.com/in/sainath9870/" className="hover:text-white transition-colors">LinkedIn</a></Magnetic>
                  <Magnetic strength={0.5}><a href="https://github.com/sainath-devv" className="hover:text-white transition-colors">Github</a></Magnetic>
                  <Magnetic strength={0.5}><a href="#" className="hover:text-white transition-colors"></a></Magnetic>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Minimalist Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 md:mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-white/20 font-mono text-center md:text-left"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-center">
            <span>© 2026 Sainath</span>
            <span>All Rights Reserved</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-center">
            <span>Local Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Back to top ↑</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
