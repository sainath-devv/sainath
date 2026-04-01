import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/ProjectsSection';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Preloader from '../components/Preloader';
import Magnetic from '../components/Magnetic';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Lenis from 'lenis';

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, 
      wheelMultiplier: 1.0, 
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#050505] text-white selection:bg-white selection:text-black min-h-screen">
      <Preloader onComplete={() => setIsLoading(false)} />

      <div className="fixed inset-0 z-[9998] pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Navbar />
      
      <main>
        <Hero isLoaded={!isLoading} />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>

      <AnimatePresence>
        {showTopBtn && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-12 right-12 z-50"
          >
            <Magnetic strength={0.5}>
              <button
                onClick={scrollToTop}
                className="w-16 h-16 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-700 shadow-2xl"
              >
                <ArrowUp size={28} />
              </button>
            </Magnetic>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-[1px] bg-white/20 origin-left z-[100]"
        style={{ scaleX }}
      />
    </div>
  );
}
