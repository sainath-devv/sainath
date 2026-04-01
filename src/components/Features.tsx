import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Globe, Cpu, Layers, Workflow } from 'lucide-react';

const features = [
  {
    title: "Lightning Fast",
    description: "Built on edge architecture for sub-50ms response times globally.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10"
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and SOC2 compliance out of the box.",
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    colSpan: "col-span-1",
    bg: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
  },
  {
    title: "Global CDN",
    description: "Deploy your assets to 300+ edge locations automatically.",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    colSpan: "col-span-1",
    bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "AI-Powered",
    description: "Leverage advanced machine learning models for predictive scaling.",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
  },
  {
    title: "Microservices",
    description: "Decoupled architecture for maximum flexibility and resilience.",
    icon: <Layers className="w-6 h-6 text-indigo-400" />,
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-gradient-to-br from-indigo-500/10 to-blue-500/10"
  },
  {
    title: "Automated Workflows",
    description: "Connect your favorite tools with our powerful visual builder.",
    icon: <Workflow className="w-6 h-6 text-rose-400" />,
    colSpan: "col-span-1",
    bg: "bg-gradient-to-br from-rose-500/10 to-red-500/10"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300 mb-6"
          >
            Powerful Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
          >
            Everything you need to scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl"
          >
            We've built the most comprehensive platform for modern development teams. Stop worrying about infrastructure and start shipping.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:border-white/20 transition-colors ${feature.colSpan}`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.bg}`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
