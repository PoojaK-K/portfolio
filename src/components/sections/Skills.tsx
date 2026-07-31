import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Sparkles, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code size={24} />,
    skills: ['Java', 'Python', 'JavaScript', 'C']
  },
  {
    title: 'Frontend',
    icon: <Layout size={24} />,
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend',
    icon: <Server size={24} />,
    skills: ['FastAPI', 'Node.js', 'Express']
  },
  {
    title: 'Databases',
    icon: <Database size={24} />,
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB']
  },
  {
    title: 'AI & Data',
    icon: <Sparkles size={24} />,
    skills: ['OpenAI APIs', 'OCR', 'NLP', 'RAG', 'Knowledge Graphs', 'Power BI']
  },
  {
    title: 'Tools',
    icon: <Wrench size={24} />,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma']
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-2"
          >
            Technical Arsenal
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{category.title}</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/5 text-gray-300 group-hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
