
import { motion } from "framer-motion";
import Header from '../components/Header';
import SizeGuide from '../components/SizeGuide';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useEffect } from 'react';

const SizeGuidePage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Mattress Size Guide</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-navy/70 dark:text-white/70 mb-8">
            Find the perfect mattress size for your needs with our comprehensive size guide.
          </p>
        </div>
        
        <SizeGuide />
      </motion.div>
      
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default SizeGuidePage;
