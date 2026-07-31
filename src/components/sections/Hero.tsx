import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code2, Database, BrainCircuit, Layout } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

const roles = [
  "Software Developer",
  "Full Stack Developer",
  "AI Enthusiast",
  "Problem Solver",
  "Java Developer"
];

export const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden" id="home">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-4">
              Hello 👋 I'm
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-2">
              Pooja K K
            </h1>
            <div className="h-[40px] flex items-center">
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-2xl md:text-3xl font-semibold text-gradient"
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </div>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mt-4 leading-relaxed">
              Building intelligent software that solves real-world problems. Passionate about AI, full-stack development, and creating seamless user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a href="#projects" className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all flex items-center gap-2 group">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 mt-6"
          >
            {[
              { icon: <Github size={22} />, href: "https://github.com/PoojaK-K" },
              { icon: <SiLeetcode size={22} />, href: "https://leetcode.com/u/Pooja_K_K/" },
              { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/poojak-k" },
              { icon: <Mail size={22} />, href: "mailto:poojakathirvelv@gmail.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all hover:-translate-y-1 text-gray-300 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center h-[500px]"
        >
          {/* Central decorative element */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl" />
          
          <div className="relative w-80 h-80 glass-card rounded-full flex items-center justify-center animate-pulse-slow border-primary/30">
            <div className="w-60 h-60 rounded-full bg-background flex items-center justify-center relative border border-white/10">
              <Code2 size={64} className="text-primary opacity-80" />
              
              {/* Floating tech icons */}
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 -left-6 p-4 glass-card rounded-2xl text-accent">
                <Layout size={32} />
              </motion.div>
              <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-4 -right-4 p-4 glass-card rounded-2xl text-primary">
                <Database size={32} />
              </motion.div>
              <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 -right-10 p-4 glass-card rounded-2xl text-pink-400">
                <BrainCircuit size={32} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
