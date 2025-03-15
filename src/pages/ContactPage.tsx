
import { motion } from "framer-motion";
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    // Add animation to elements with 'reveal' class
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-navy-dark text-navy dark:text-white overflow-hidden transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <motion.div 
        className="pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="container-padding py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-navy/70 dark:text-white/70 mb-8">
            Have questions or want to visit our showroom? Get in touch with us.
          </p>
        </div>
        
        <section className="py-12 bg-grey-light dark:bg-navy-light">
          <div className="container-padding">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="reveal"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Our Store Location</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <MapPin className="text-gold mr-2 flex-shrink-0 mt-1" size={20} />
                    <p>K.P. Road, Proddatur, Kadapa (Dist), A.P.</p>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-gold mr-2 flex-shrink-0 mt-1" size={20} />
                    <p>+91 9963913320</p>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-gold mr-2 flex-shrink-0 mt-1" size={20} />
                    <p>contact@anrmattress.com</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-gold mr-2 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-navy p-4 rounded-lg shadow-md h-80 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15369.68696155539!2d78.54244042649459!3d14.751282047318936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3748e8b717deb%3A0x6338bbd83c0506d!2sProddatur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1686152396100!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ANR Mattress Location"
                  ></iframe>
                </div>
              </motion.div>
              
              <motion.div 
                className="reveal"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <div className="bg-white dark:bg-navy p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-grey rounded-md focus:outline-none focus:ring-2 focus:ring-gold dark:bg-navy-light dark:border-navy-light dark:text-white transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-grey rounded-md focus:outline-none focus:ring-2 focus:ring-gold dark:bg-navy-light dark:border-navy-light dark:text-white transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-grey rounded-md focus:outline-none focus:ring-2 focus:ring-gold dark:bg-navy-light dark:border-navy-light dark:text-white transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Your Message</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-grey rounded-md focus:outline-none focus:ring-2 focus:ring-gold dark:bg-navy-light dark:border-navy-light dark:text-white transition-all"
                      rows={4}
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button className="btn-gold w-full hover:scale-[1.02] transition-transform">
                    Send Message
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <Contact />
      </motion.div>
      
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default ContactPage;
