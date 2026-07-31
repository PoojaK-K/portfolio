import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h3>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors"
          >
            <div className="p-4 bg-primary/20 text-primary rounded-full">
              <Mail size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Email</h4>
              <a href="mailto:poojakathirvelv@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                poojakathirvelv@gmail.com
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors"
          >
            <div className="p-4 bg-primary/20 text-primary rounded-full">
              <Phone size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Phone</h4>
              <a href="tel:9787975887" className="text-gray-400 hover:text-primary transition-colors">
                +91 9787975887
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors"
          >
            <div className="p-4 bg-primary/20 text-primary rounded-full">
              <MapPin size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Location</h4>
              <p className="text-gray-400">Karur, Tamil Nadu, India</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
