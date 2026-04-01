import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Magnetic from './Magnetic';

const Hero: React.FC<{ isLoaded: boolean }> = ({ isLoaded }) => {
  const { scrollY } = useScroll();

  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  // Removed scaleBg to stop zooming on scroll
  const blurBg = useTransform(scrollY, [0, 800], ["blur(0px)", "blur(12px)"]);
  const overlayDarken = useTransform(scrollY, [0, 800], [0, 0.8]);

  return (
    <section id="home" className="relative h-screen w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Background Blobs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div 
          style={{ y: yBg, opacity: useTransform(scrollY, [0, 800], [1, 0]) }} 
          className="absolute inset-0 overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-indigo-900/40 rounded-full blur-[140px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 50, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-teal-900/30 rounded-full blur-[140px]"
          />
          
          {/* Floating Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[15%] w-32 h-32 border border-white/5 rounded-full"
          />
          <motion.div 
            animate={{ y: [0, 30, 0], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[30%] left-[10%] w-48 h-48 border border-white/5 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Hero Image */}
      <motion.div 
        style={{ y: yBg, filter: blurBg, willChange: "transform" }} 
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-10 overflow-hidden origin-center"
      >
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0 
          }} 
          transition={{ 
            opacity: { duration: 2, ease: [0.22, 1, 0.36, 1] }
          }}
          src="https://kbolnguksoixmiwwgxbl.supabase.co/storage/v1/object/public/project/Picsart_26-04-01_12-12-06-542.jpg.jpeg" 
          alt="Portrait" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] via-black/40 to-transparent pointer-events-none" />
        <motion.div style={{ opacity: overlayDarken }} className="absolute inset-0 bg-[#050505] pointer-events-none" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-between py-12 px-6 md:px-16 overflow-hidden">
        
        {/* Top Label */}
        <div className="w-full flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-8 " />
            
          </motion.div>

        
        </div>

        {/* Main Name - Aligned inside the blue bars */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full">
            {/* Left Blue Bar Text */}
            <div className="absolute left-[20%] top-0 bottom-0 w-[20%] flex items-center justify-center">
              <motion.h1 
                initial={{ opacity: 0, scaleY: 0.8 }}
                animate={isLoaded ? { opacity: 0.5, scaleY: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ writingMode: 'vertical-rl' }}
                className="text-[12vw] md:text-[10vw] leading-none font-display text-white uppercase tracking-[-0.05em] rotate-180"
              >
                Web
              </motion.h1>
            </div>
            
            {/* Right Blue Bar Text */}
            <div className="absolute right-[20%] top-0 bottom-0 w-[20%] flex items-center justify-center">
              <motion.h1 
                initial={{ opacity: 0, scaleY: 0.8 }}
                animate={isLoaded ? { opacity: 0.5, scaleY: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ writingMode: 'vertical-rl' }}
                className="text-[12vw] md:text-[10vw] leading-none font-display text-white uppercase tracking-[-0.05em]"
              >
                Dev
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Bottom Content - Clean & Modern */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="text-left pb-2"
          >
            <span className="text-[9px] tracking-[0.4em] text-white/30 font-bold ml-1 uppercase"></span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-end gap-6"
          >
            <div className="flex flex-col items-end gap-1 ml-10">
              <span className="text-white/20 uppercase tracking-[0.3em] text-[12px] font-bold">Based in</span>
<p className="text-white/80 text-[12px] md:text-sm max-w-[240px] text-right leading-relaxed font-light ml-auto">               Your vision shouldn't be limited by your tech stack.
I bridge the gap between complex ideas and clean, scalable code.
              
              </p>
              {/* Personal Signature */}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 0.6 } : {}}
                transition={{ duration: 2, delay: 2 }}
                className="font-signature text-xl md:text-2xl text-white/60 mt-2 -rotate-6 select-none"
              >
                Sai Nath
              </motion.span>
            </div>
            
            <Magnetic>
              <div className="group flex items-center gap-4 cursor-pointer">
                <div className="flex flex-col items-end">
                
                </div>
               
              </div>
            </Magnetic>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
