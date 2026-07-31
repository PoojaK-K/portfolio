import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

const certifications = [
  { name: 'Python Programming', issuer: 'Livewire India' },
  { name: 'Power BI & Data Analytics', issuer: 'NoviTech' },
  { name: 'Programming in Java', issuer: 'NPTEL' },
  { name: 'Principles of Generative AI', issuer: 'Infosys Springboard' },
  { name: 'Introduction to Cybersecurity', issuer: 'CISCO' }
];

export const Certifications: React.FC = () => {
  return (
    <section className="py-24 relative bg-background/50 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
            Continuous Learning
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">
            Licenses & <span className="text-gradient">Certifications</span>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 flex items-center gap-4 group hover:bg-white/5 transition-colors w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)]"
            >
              <div className="p-3 bg-primary/20 rounded-full text-primary group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold leading-tight">{cert.name}</h4>
                <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
