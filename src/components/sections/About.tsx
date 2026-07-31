import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    
    // GSAP ScrollTrigger for text reveal
    gsap.fromTo(
      textRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2" ref={textRef}>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Driven by <span className="text-gradient">Logic</span> & <span className="text-gradient">Innovation</span>
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a CSE undergraduate with strong foundations in Python, Java, MySQL, and AI-based systems. I have experience developing database-driven applications and real-time web platforms through academic projects and my AI internship at Infosys Springboard.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Actively practicing Data Structures & Algorithms, I have a keen interest in Software Development, Backend Engineering, and AI applications. I excel at delivering CRUD-based systems and centralized management platforms that solve real-world problems.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-primary" size={20} />
                <span>Karur, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <GraduationCap className="text-primary" size={20} />
                <span>B.E. Computer Science, V.S.B. Engineering College (CGPA: 7.90)</span>
              </div>
            </div>
          </div>

          {/* Highlights / Stats Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {[
              { label: 'Focus', value: 'Software Dev', delay: 0.1 },
              { label: 'Specialty', value: 'AI & Backend', delay: 0.2 },
              { label: 'Problem Solving', value: 'DSA Active', delay: 0.3 },
              { label: 'Education', value: 'CS Undergrad', delay: 0.4 },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, duration: 0.4 }}
                className="glass-card p-6 flex flex-col justify-center items-center text-center group hover:border-primary/50 transition-colors"
              >
                <Award className="text-primary mb-3 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" size={32} />
                <h4 className="text-white font-bold text-xl mb-1">{stat.value}</h4>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
