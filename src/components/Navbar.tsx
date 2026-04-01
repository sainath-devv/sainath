import React, { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import Magnetic from './Magnetic';

const YinYangLogo = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div className={`relative flex items-center justify-center w-14 h-14 md:w-24 md:h-24 rounded-full transition-colors duration-500 ${isScrolled ? 'bg-transparent' : 'bg-white'}`}>
      {/* Power Release Glow / Aura */}
      <AnimatePresence>
        {isScrolled && (
          <>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-white/20 blur-2xl"
            />
            {/* Shockwave effect on scroll trigger */}
            <motion.div
              initial={{ scale: 0.8, opacity: 1, border: "2px solid white" }}
              animate={{ scale: 2, opacity: 0, border: "0px solid white" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 rounded-full pointer-events-none"
            />
          </>
        )}
      </AnimatePresence>

      {/* Circular Text: SAINATH • CREATIVE • */}
      <motion.div
        animate={{ 
          rotate: isScrolled ? 360 : 0,
          opacity: isScrolled ? 1 : 0.6,
          scale: isScrolled ? 1.1 : 0.95
        }}
        transition={{ 
          rotate: { type: "spring", stiffness: 60, damping: 15 },
          default: { duration: 0.5 }
        }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        {/* Slow continuous rotation wrapper */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full uppercase tracking-[0.3em] font-black text-[5px] md:text-[7px] transition-colors duration-500" style={{ fill: isScrolled ? 'white' : 'black' }}>
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Sainath • Creative • Sainath • Creative •
              </textPath>
            </text>
          </svg>
        </motion.div>
      </motion.div>

      {/* Main Yin Yang Circle */}
      <motion.div
        animate={{ 
          rotate: isScrolled ? -720 : 0,
          scale: isScrolled ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 25 }}
        className="relative w-8 h-8 md:w-12 md:h-12 flex items-center justify-center z-10 rounded-full bg-black border border-white/20 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)]"
      >
        {/* Slow continuous rotation for the symbol itself when not scrolled */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Inner rotating ring */}
          <div className="absolute inset-0 border border-dashed border-white/10 rounded-full" />
          
          {/* Yin Yang SVG */}
          <svg viewBox="0 0 100 100" className="w-5 h-5 md:w-8 md:h-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            <circle cx="50" cy="50" r="48" fill="white" />
            <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="black" />
            <circle cx="50" cy="26" r="6" fill="white" />
            <circle cx="50" cy="74" r="6" fill="black" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Work', href: '#work', desc: 'Selected projects' },
    { name: 'Services', href: '#services', desc: 'What I do' },
    { name: 'Contact', href: '#contact', desc: 'Get in touch' },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex fixed top-0 left-0 w-full z-50 justify-center pointer-events-none pt-6">
        <motion.nav
          layout
          initial={false}
          animate={{
            backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.03)" : "rgba(5, 5, 5, 0)",
            backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
            border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0)",
            padding: isScrolled ? "8px 16px" : "12px 24px",
            y: isScrolled ? 10 : 0,
            borderRadius: "100px",
            boxShadow: isScrolled ? "0 8px 32px rgba(0,0,0,0.5)" : "none"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="pointer-events-auto flex items-center text-white relative overflow-hidden"
        >
          {isScrolled && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none"></div>
          )}

          <motion.div layout className="flex items-center shrink-0 z-10">
            <Magnetic strength={0.2}>
              <a href="#home">
                <YinYangLogo isScrolled={isScrolled} />
              </a>
            </Magnetic>
          </motion.div>

          <AnimatePresence mode="popLayout">
            {isScrolled && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)", marginLeft: 0 }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)", marginLeft: 24 }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)", marginLeft: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
                className="flex items-center origin-left z-10"
              >
                <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/5 mr-6" style={{ gap: '4px' }}>
                  {navLinks.map((item) => (
                    <Magnetic key={item.name} strength={0.3}>
                      <a
                        href={item.href}
                        className="px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
                      >
                        {item.name}
                      </a>
                    </Magnetic>
                  ))}
                </div>

                <div className="flex items-center gap-5 text-white/30 pr-2">
                  <Magnetic strength={0.5}>
                    <a href="https://github.com/sainath-devv" className="hover:text-white transition-colors">
                      <Github size={18} strokeWidth={1.5} />
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.5}>
                    <a href="https://www.linkedin.com/in/sainath9870/" className="hover:text-white transition-colors">
                      <Linkedin size={18} strokeWidth={1.5} />
                    </a>
                  </Magnetic>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none pt-4">
        <motion.nav
          layout
          initial={false}
          animate={{
            backgroundColor: isScrolled || isMobileMenuOpen ? "rgba(255, 255, 255, 0.03)" : "rgba(5, 5, 5, 0)",
            backdropFilter: isScrolled || isMobileMenuOpen ? "blur(20px)" : "blur(0px)",
            border: isScrolled || isMobileMenuOpen ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0)",
            padding: isScrolled || isMobileMenuOpen ? "6px 12px" : "8px 16px",
            y: isScrolled || isMobileMenuOpen ? 10 : 0,
            borderRadius: "100px",
            boxShadow: isScrolled || isMobileMenuOpen ? "0 8px 32px rgba(0,0,0,0.5)" : "none"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="pointer-events-auto flex items-center text-white relative overflow-hidden z-50"
        >
          {(isScrolled || isMobileMenuOpen) && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none"></div>
          )}

          <motion.div layout className="flex items-center shrink-0 z-10">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
              <YinYangLogo isScrolled={isScrolled || isMobileMenuOpen} />
            </a>
          </motion.div>

          <AnimatePresence mode="popLayout">
            {(isScrolled || isMobileMenuOpen) && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)", marginLeft: 0 }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)", marginLeft: 16 }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)", marginLeft: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
                className="flex items-center origin-left z-10"
              >
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-white/70 hover:text-white transition-colors bg-white/5 rounded-full border border-white/5"
                >
                  {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#050505]/95 flex flex-col items-center justify-center md:hidden pt-10 overflow-hidden"
          >
            {/* Background Stripe Pattern */}
            <div 
              className="absolute inset-0 z-0 opacity-30 pointer-events-none" 
              style={{ backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 12px)' }}
            />
            
            <div className="relative z-10 flex flex-col items-start gap-10 w-full px-10">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex flex-col items-start w-full"
                >
                  <span className="text-[14vw] leading-none font-display font-light tracking-tighter text-white/90 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">
                    {item.name}
                  </span>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex flex-col items-start gap-8 w-full"
              >
                <div className="w-full h-[1px] bg-white/10"></div>
                <div className="flex gap-8 text-white/40">
                  <a href="https://github.com/sainath-devv" className="hover:text-white transition-colors"><Github size={24} strokeWidth={1.5} /></a>
                  <a href="www.linkedin.com/in/sainath9870" className="hover:text-white transition-colors"><Linkedin size={24} strokeWidth={1.5} /></a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
