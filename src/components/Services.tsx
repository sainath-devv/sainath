import React, { useState, useEffect, useRef } from 'react';
import { Wifi, Battery, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const services = [
  {
    id: "01",
    title: "Frontend Engineering",
    description: "Crafting digital interfaces where motion meets precision. Building experiences that resonate.",
    tags: ["React", "WebGL", "Animations"],
    color: "text-blue-300",
    highlight: "bg-blue-500/30",
    rotate: "-rotate-1"
  },
  {
    id: "02",
    title: "Backend Architecture",
    description: "Designing the invisible foundations of the web. Scalable, secure, and built for the future.",
    tags: ["Node.js", "Cloud", "Data"],
    color: "text-pink-300",
    highlight: "bg-pink-500/30",
    rotate: "rotate-2"
  },
  {
    id: "03",
    title: "Full-Stack Strategy",
    description: "Bridging the gap between vision and execution. End-to-end solutions for complex problems.",
    tags: ["Design", "Scale", "Auth"],
    color: "text-yellow-300",
    highlight: "bg-yellow-500/30",
    rotate: "-rotate-2"
  },
  {
    id: "04",
    title: "AI Integration",
    description: "Embedding intelligent models into everyday workflows. Transforming static apps into dynamic ones.",
    tags: ["LLMs", "ML", "Automation"],
    color: "text-green-300",
    highlight: "bg-green-500/30",
    rotate: "rotate-1"
  }
];

const Services: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Drive the internal content scroll based on page scroll
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const minutesStr = minutes < 10 ? '0' + minutes : minutes;
      setCurrentTime(`${hours}:${minutesStr} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!screenRef.current) return;
    const rect = screenRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePos({ x, y });
  };

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-black">
      {/* Sticky Wrapper */}
      <section className="sticky top-0 h-screen w-full p-2 sm:p-4 md:p-12 flex items-center justify-center overflow-hidden z-0">
        
        {/* Striped Background Pattern */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(255,255,255,0.08) 15px, rgba(255,255,255,0.08) 16px)' }} />

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/5 blur-[120px] pointer-events-none" />

        {/* iPad Container */}
        <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-6xl aspect-[2/3] sm:aspect-[3/4] md:aspect-[16/10] z-10 transition-all duration-500">
          {/* Shadows */}
          <div className="absolute -inset-4 bg-black/60 blur-xl md:blur-2xl rounded-[2.5rem] md:rounded-[4rem] -z-20 translate-y-6 md:translate-y-10" />
          <div className="absolute inset-0 bg-black/80 blur-md rounded-[2.5rem] md:rounded-[4rem] -z-10 translate-y-2" />

          {/* iPad Frame */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#b5b5b8] via-[#5a5a5c] to-[#2c2c2e] rounded-[2rem] md:rounded-[4rem] p-[2px] md:p-[4px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),inset_0_-1px_3px_rgba(0,0,0,0.8)]">
            
            {/* Antenna Bands */}
            <div className="absolute top-0 left-[15%] w-[2px] h-[4px] bg-[#1a1a1a] opacity-60" />
            <div className="absolute top-0 right-[15%] w-[2px] h-[4px] bg-[#1a1a1a] opacity-60" />
            <div className="absolute bottom-0 left-[15%] w-[2px] h-[4px] bg-[#1a1a1a] opacity-60" />
            <div className="absolute bottom-0 right-[15%] w-[2px] h-[4px] bg-[#1a1a1a] opacity-60" />

            {/* USB-C Port */}
            <div className="absolute top-1/2 -right-[2px] md:-right-[3px] -translate-y-1/2 w-[2px] md:w-[3px] h-8 md:h-12 bg-[#111] rounded-l-md shadow-[inset_1px_0_2px_rgba(0,0,0,1)] flex items-center justify-center">
               <div className="w-[1px] h-5 md:h-8 bg-black rounded-full" />
            </div>

            {/* Speaker Grills */}
            <div className="absolute top-[15%] -right-[2px] w-[2px] h-10 md:h-16 flex flex-col justify-between py-1 opacity-40">
              {[...Array(8)].map((_, i) => <div key={i} className="w-full h-[1px] md:h-[2px] bg-black rounded-full" />)}
            </div>
            <div className="absolute bottom-[15%] -right-[2px] w-[2px] h-10 md:h-16 flex flex-col justify-between py-1 opacity-40">
              {[...Array(8)].map((_, i) => <div key={i} className="w-full h-[1px] md:h-[2px] bg-black rounded-full" />)}
            </div>
            <div className="absolute top-[15%] -left-[2px] w-[2px] h-10 md:h-16 flex flex-col justify-between py-1 opacity-40">
              {[...Array(8)].map((_, i) => <div key={i} className="w-full h-[1px] md:h-[2px] bg-black rounded-full" />)}
            </div>
            <div className="absolute bottom-[15%] -left-[2px] w-[2px] h-10 md:h-16 flex flex-col justify-between py-1 opacity-40">
              {[...Array(8)].map((_, i) => <div key={i} className="w-full h-[1px] md:h-[2px] bg-black rounded-full" />)}
            </div>

            {/* Apple Pencil */}
            <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 w-1/2 md:w-1/3 h-[13px] bg-gradient-to-b from-[#ffffff] via-[#f5f5f7] to-[#d1d1d6] rounded-t-[6px] shadow-[0_-4px_10px_rgba(0,0,0,0.15),inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.3)] z-0 flex items-center justify-between px-2 border-b border-black/30 hidden md:flex">
               <div className="w-2 h-full bg-gradient-to-b from-gray-200 to-gray-400 rounded-tl-[4px] opacity-80" />
               <div className="absolute top-[2px] left-4 right-4 h-[1px] bg-white/80 shadow-[0_1px_1px_rgba(0,0,0,0.05)]" />
               <div className="w-1.5 h-full bg-gradient-to-b from-gray-300 to-gray-500 opacity-60 rounded-tr-[2px]" />
            </div>

            {/* Volume Buttons */}
            <div className="absolute top-[15%] -left-[2px] md:-left-[3px] w-[2px] md:w-[3px] h-8 md:h-12 bg-gradient-to-r from-[#b5b5b8] to-[#5a5a5c] rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.6),inset_1px_0_1px_rgba(255,255,255,0.5)]" />
            <div className="absolute top-[25%] -left-[2px] md:-left-[3px] w-[2px] md:w-[3px] h-8 md:h-12 bg-gradient-to-r from-[#b5b5b8] to-[#5a5a5c] rounded-l-md shadow-[-2px_0_4px_rgba(0,0,0,0.6),inset_1px_0_1px_rgba(255,255,255,0.5)]" />
            
            {/* Power Button */}
            <div className="absolute -top-[2px] md:-top-[3px] left-[12%] w-8 md:w-12 h-[2px] md:h-[3px] bg-gradient-to-b from-[#b5b5b8] to-[#5a5a5c] rounded-t-md shadow-[0_-2px_4px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.5)]" />

            {/* Black Glass Bezel */}
            <div className="relative w-full h-full bg-[#050505] rounded-[1.8rem] md:rounded-[3.8rem] p-2 md:p-5 flex items-center justify-center overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15),inset_0_0_25px_rgba(0,0,0,1)]">
              
              {/* Bezel Glass Reflection */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

              {/* Actual Screen */}
              <div 
                ref={screenRef}
                onMouseMove={handleMouseMove}
                className="relative w-full h-full bg-[#121214] rounded-[1.6rem] md:rounded-[3.3rem] overflow-hidden flex flex-col shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),inset_0_5px_15px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.9)]"
              >
                {/* Glare */}
                <div 
                  className="absolute inset-0 pointer-events-none z-20 mix-blend-screen opacity-40 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 800px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.08), transparent 40%)`
                  }}
                />

                {/* Dot Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-20"
                     style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                {/* Status Bar */}
                <div className="w-full h-6 md:h-9 flex justify-between items-center px-4 md:px-10 text-[9px] md:text-xs text-white/80 font-sans font-medium z-30 pt-1 md:pt-2 pointer-events-none">
                  <div>{currentTime || '9:41 AM'}</div>
                  <div className="flex items-center gap-1.5 md:gap-3">
                    <Wifi className="w-3 h-3 md:w-4 md:h-4" />
                    <div className="flex items-center gap-1">
                      <span>100%</span>
                      <Battery className="w-3.5 h-3.5 md:w-5 md:h-5" />
                    </div>
                  </div>
                </div>

                {/* APP CONTENT AREA (Driven by Page Scroll) */}
                <div className="flex-1 relative z-10 overflow-hidden bg-[#151517]">
                  <motion.div 
                    style={{ y: contentY }}
                    className="p-4 sm:p-6 md:p-16 pb-24 md:pb-32 font-chalk"
                  >
                    {/* Header */}
                    <div className="mb-8 sm:mb-10 md:mb-16 text-center relative">
                      <div className="inline-block relative">
                        <h2 className="text-3xl sm:text-5xl md:text-7xl text-white relative z-10">
                          Our Services
                        </h2>
                        <div className="absolute bottom-0 md:bottom-2 left-0 w-full h-2 sm:h-3 md:h-6 bg-yellow-400/40 -rotate-2 rounded-full origin-left z-0 mix-blend-screen" />
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-24 max-w-5xl mx-auto relative">
                      
                      {/* Hand-drawn connecting arrows */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-30" style={{ zIndex: 0 }}>
                        <path d="M 30% 20% Q 50% 10% 70% 20%" fill="none" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                        <path d="M 30% 70% Q 50% 80% 70% 70%" fill="none" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                      </svg>

                      {services.map((service) => (
                        <div key={service.id} className={`relative z-10 ${service.rotate}`}>
                          <div className="flex items-baseline gap-2 md:gap-3 mb-2 md:mb-3">
                            <span className={`text-xl sm:text-2xl md:text-3xl font-bold ${service.color} opacity-70`}>
                              {service.id}.
                            </span>
                            <div className="relative inline-block">
                              <h3 className="text-xl sm:text-2xl md:text-4xl text-white relative z-10">
                                {service.title}
                              </h3>
                              <div className={`absolute bottom-0 md:bottom-1 left-0 w-full h-1.5 sm:h-2 md:h-4 ${service.highlight} -rotate-1 rounded-full origin-left z-0 mix-blend-screen`} />
                            </div>
                          </div>
                          
                          <p className="text-base sm:text-lg md:text-2xl text-gray-300 leading-relaxed mb-3 sm:mb-4 md:mb-6 pl-6 sm:pl-8 md:pl-10">
                            {service.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 md:gap-3 pl-6 sm:pl-8 md:pl-10">
                            {service.tags.map(tag => (
                              <span 
                                key={tag} 
                                className="text-[10px] sm:text-sm md:text-lg px-2.5 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1 border-2 border-gray-500/50 text-gray-400 whitespace-nowrap"
                                style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Section */}
                    <div className="w-full flex items-center justify-center font-sans p-6 md:p-8 py-24 md:py-32">
                      <motion.button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-white/90 hover:text-white text-lg sm:text-xl md:text-4xl lg:text-5xl font-light tracking-tight transition-colors flex flex-col md:flex-row items-center gap-2 sm:gap-3 md:gap-4 group text-center"
                      >
                        Do you have a project idea? 
                        <span className="font-medium flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                          Let's talk <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform cursor-pointer" />
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 md:h-1.5 bg-white/30 rounded-full z-30 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
