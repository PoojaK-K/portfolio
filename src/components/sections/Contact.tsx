import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    // Replace these with actual EmailJS keys
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error(error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

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

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex flex-col gap-6"
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 bg-primary/20 text-primary rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <a href="mailto:poojakathirvelv@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                  poojakathirvelv@gmail.com
                </a>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 bg-primary/20 text-primary rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Phone</h4>
                <a href="tel:9787975887" className="text-gray-400 hover:text-primary transition-colors">
                  +91 9787975887
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 bg-primary/20 text-primary rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Location</h4>
                <p className="text-gray-400">Karur, Tamil Nadu, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-2/3 glass-card p-8"
          >
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <input type="text" name="user_name" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <input type="email" name="user_email" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <input type="text" name="subject" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Job Opportunity" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea name="message" required rows={5} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Hello Pooja, I would like to..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <span className="animate-pulse">Sending...</span>
                ) : status === 'success' ? (
                  <><CheckCircle size={20} /> Sent Successfully!</>
                ) : status === 'error' ? (
                  <><AlertCircle size={20} /> Error Sending</>
                ) : (
                  <><Send size={20} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
