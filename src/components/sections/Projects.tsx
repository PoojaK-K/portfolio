import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

const projects = [
  {
    title: 'MediSense AI',
    tagline: 'Medical Report Analyzer',
    description: 'An intelligent application designed to analyze complex medical reports and translate them into easily understandable summaries using NLP and OCR.',
    tech: ['Python', 'OpenAI', 'OCR', 'NLP', 'React'],
    github: '#',
    live: '#'
  },
  {
    title: 'PolicyNav',
    tagline: 'AI-Powered Public Policy Navigation',
    description: 'Developed during Infosys Springboard internship. Analyzes AI applications in public policy, decision-support, and information retrieval systems using RAG pipelines.',
    tech: ['Python', 'RAG', 'Knowledge Graphs', 'LLMs'],
    github: '#',
    live: '#'
  },
  {
    title: 'Live Translator',
    tagline: 'Automated Translation for Live Sessions',
    description: 'A real-time translation application built with Streamlit that converts spoken content into translated text dynamically during live sessions.',
    tech: ['Python', 'Streamlit', 'Speech API', 'Translation API'],
    github: '#',
    live: '#'
  },
  {
    title: 'Campus Planner',
    tagline: 'AI-Driven Campus Management Tool',
    description: 'A centralized platform to manage academic schedules, events, and tasks efficiently with automated reminders and planning workflows.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: '#',
    live: '#'
  },
  {
    title: 'NotesVault',
    tagline: 'Secure Note Management',
    description: 'A robust full-stack application for managing personal notes with rich text editing, tagging, and secure authentication.',
    tech: ['React', 'Tailwind', 'PostgreSQL', 'Express'],
    github: '#',
    live: '#'
  },
  {
    title: 'College Admission System',
    tagline: 'Centralized CRUD Platform',
    description: 'A student admission management system implementing full CRUD operations for efficient record management via a normalized relational database schema.',
    tech: ['Python', 'MySQL'],
    github: '#',
    live: '#'
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-primary tracking-widest uppercase mb-2"
            >
              Featured Work
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold"
            >
              Recent <span className="text-gradient">Projects</span>
            </motion.h3>
          </div>
          
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://github.com/PoojaK-K" 
            target="_blank"
            className="flex items-center gap-2 text-primary hover:text-white transition-colors"
          >
            View GitHub Profile <ExternalLink size={16} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card overflow-hidden group cursor-pointer flex flex-col h-full hover:border-primary/50 transition-all duration-300"
            >
              {/* Abstract thumbnail replacement since we don't have images */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <h4 className="text-2xl font-display font-bold text-white/50 group-hover:scale-110 transition-transform duration-500">{project.title}</h4>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-sm text-gray-400 mb-4">{project.tagline}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0,3).map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="h-64 bg-gradient-to-br from-primary/30 to-accent/30 relative flex items-center justify-center">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-background/50 rounded-full hover:bg-background transition-colors text-white"
                >
                  <X size={20} />
                </button>
                <h3 className="text-4xl font-display font-bold text-white">{selectedProject.title}</h3>
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-2">{selectedProject.tagline}</h4>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {selectedProject.description}
                </p>
                
                <div className="mb-8">
                  <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-primary/20 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href={selectedProject.github} className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium flex items-center gap-2 transition-colors">
                    <Github size={20} />
                    Source Code
                  </a>
                  <a href={selectedProject.live} className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium flex items-center gap-2 transition-colors">
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
