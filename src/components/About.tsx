import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Magnetic from './Magnetic';

const About: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Word-by-word reveal for the paragraph
  const wordVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.03, // Fast word reveal
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const text = "I am a creative developer focused on crafting premium digital experiences. I bridge the gap between beautiful design and robust engineering to build products that leave a lasting impression. With a strong foundation in modern web technologies, I specialize in creating scalable, interactive, and accessible interfaces. Every project is an opportunity to push boundaries and deliver excellence.";
  const words = text.split(" ");

  return (
    <section id="about" ref={containerRef} className="relative w-full bg-[#050505] py-12 md:py-20 md:min-h-screen px-4 md:px-6 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Subtle background glow */}
      <motion.div 
        style={{ y, willChange: "transform" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" 
      />

      <div className="z-10 flex flex-col items-center max-w-5xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl text-left mb-4 md:mb-8 pl-4 md:pl-16"
        >
          {/* Subtle About Heading */}
          <span className="text-[15px] uppercase tracking-[0.5em] text-white/20 font-mono">
            About
          </span>
        </motion.div>

        {/* Notebook Container with Floating Animation */}
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
          className="w-full max-w-4xl relative pt-8 pb-6 md:pt-32 md:pb-24 rounded-xl border border-white/10 shadow-2xl bg-[#0a0a0a] overflow-hidden"
        >
          
          {/* Vertical Red Margin Line */}
          <div className="absolute left-5 md:left-16 top-0 bottom-0 w-[1px] bg-red-900/40 z-0"></div>
          
          {/* Ruled Lines Background (Note Style) */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-50 md:opacity-100"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100% 40px',
              backgroundPosition: '0 15px'
            }}
          >
            {/* Desktop version of lines (hidden on mobile) */}
            <div className="hidden md:block absolute inset-0" style={{ backgroundSize: '100% 60px', backgroundPosition: '0 20px' }} />
          </div>

          {/* Paragraph Content - Left Aligned, fitting the lines */}
          <motion.p 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 text-sm sm:text-base md:text-3xl text-zinc-200 font-sans font-medium pl-10 md:pl-32 pr-4 md:pr-16 text-left tracking-tight leading-[40px] md:leading-[60px]"
          >
            {words.map((word, i) => (
              <motion.span 
                key={i}
                custom={i} 
                variants={wordVariants} 
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Spinning Circular Badge */}
          <Magnetic strength={0.4}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-12 -right-12 md:-bottom-16 md:-right-16 w-32 h-32 md:w-48 md:h-48 z-20 opacity-30 cursor-pointer"
            >
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <defs>
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="8.5" fill="currentColor" className="text-white font-mono tracking-[0.2em] uppercase">
                  <textPath href="#circlePath">
                    Creative Developer • Web Design • UI/UX • 
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </Magnetic>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 md:mt-24 text-white/30 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;
