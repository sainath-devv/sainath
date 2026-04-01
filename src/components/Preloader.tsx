import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [step, setStep] = useState(0); // 0: Greeting, 1: Main Loading

  useEffect(() => {
    // Step 0: Show greeting for a short time
    const greetingTimer = setTimeout(() => {
      setStep(1);
    }, 1200);

    return () => clearTimeout(greetingTimer);
  }, []);

  useEffect(() => {
    if (step === 0) return; // Wait for greeting to finish

    const duration = 1600; // Fast, snappy loading after greeting
    const intervalTime = 16; // ~60fps smooth animation
    const stepAmount = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Small pause at 100% before fading out
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 1000); // Wait for the fade out animation
          }, 300);
          return 100;
        }
        return prev + stepAmount;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [step, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          // Smooth Apple-style fade out
          exit={{ 
            opacity: 0, 
            transition: { duration: 1, ease: [0.32, 0.72, 0, 1] } 
          }}
          className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle ambient glow in the background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />

          <motion.div 
            // Scale up and blur on exit (like macOS login / iOS unlock)
            exit={{ 
              scale: 1.15, 
              filter: "blur(12px)", 
              opacity: 0,
              transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } 
            }}
            className="flex flex-col items-center justify-center relative z-10 min-h-[100px]"
          >
            <AnimatePresence mode="wait">
              {step === 0 ? (
                // Greeting Step
                <motion.div
                  key="greeting"
                  initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white text-2xl md:text-3xl font-medium tracking-tight"
                >
                  Welcome.
                </motion.div>
              ) : (
                // Main Loading Step
                <motion.div
                  key="main"
                  initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center gap-8"
                >
                  {/* Logo / Name */}
                  <div className="text-white text-2xl md:text-3xl font-medium tracking-tight flex items-center">
                    Sainath<span className="text-white/30">.</span>
                  </div>

                  {/* Progress section */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col items-center gap-4"
                  >
                    {/* Ultra-thin progress bar with subtle glow */}
                    <div className="w-48 md:w-64 h-[1px] bg-white/10 relative overflow-hidden">
                      <motion.div 
                        className="absolute top-0 left-0 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
