import React, { useRef, useEffect } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    type: 'work',
    title: 'AI Intern',
    organization: 'Infosys Springboard',
    date: 'Feb 2026 – Apr 2026',
    description: 'Completed 8-week virtual internship focused on AI-powered public policy navigation solution titled PolicyNav. Analyzed AI applications in public policy, decision-support, and information retrieval systems. Collaborated with a cohort of 20+ interns to deliver a final presentation on AIs role in improving policy accessibility.',
  },
  {
    type: 'education',
    title: 'B.E. Computer Science and Engineering',
    organization: 'V.S.B. Engineering College, Karur',
    date: '2023 – 2027',
    description: 'CGPA: 7.90',
  },
  {
    type: 'education',
    title: 'Higher Secondary Certificate (HSC)',
    organization: 'Sri Sankara Vidyalayaa, Karur',
    date: '2023',
    description: 'Percentage: 76.8%',
  },
  {
    type: 'education',
    title: 'Secondary School Leaving Certificate (SSLC)',
    organization: 'Sri Sankara Vidyalayaa, Karur',
    date: '2021',
    description: 'Percentage: 88.6%',
  }
];

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll('.timeline-item');
    
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
            My Journey
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">
            Experience & <span className="text-gradient">Education</span>
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
          
          <div className="flex flex-col gap-12">
            {timeline.map((item, idx) => (
              <div key={idx} className={`timeline-item relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} pl-12 md:pl-0`}>
                
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-background border-2 border-primary -translate-x-1/2 flex items-center justify-center z-10 text-primary">
                  {item.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                </div>

                <div className={`md:w-5/12 glass-card p-6 relative ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  {/* Arrow for desktop */}
                  <div className={`hidden md:block absolute top-4 w-4 h-4 bg-surface border-t border-r border-white/5 transform ${idx % 2 === 0 ? '-right-2 rotate-45' : '-left-2 -rotate-[135deg]'}`}></div>
                  
                  <span className="text-primary text-sm font-bold tracking-wider mb-2 block">{item.date}</span>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <h5 className="text-gray-400 mb-4">{item.organization}</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
