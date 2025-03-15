import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';
import SizeGuide from '../components/SizeGuide';
import Benefits from '../components/Benefits';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FloatingCTA from '../components/FloatingCTA';
import { useEffect } from 'react';

const Index = () => {
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
      <Hero />
      
      {/* Trust Badges Section */}
      <section className="bg-white dark:bg-navy-dark py-10">
        <div className="container-padding">
          <div className="flex flex-wrap gap-6 justify-center">
            <motion.div 
              className="flex items-center justify-center p-4 bg-grey-light dark:bg-navy-light rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="text-gold text-2xl mr-2">✓</span>
              <span className="font-medium">1000+ Happy Customers</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center p-4 bg-grey-light dark:bg-navy-light rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-gold text-2xl mr-2">🛏️</span>
              <span className="font-medium">10-Year Warranty</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center p-4 bg-grey-light dark:bg-navy-light rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-gold text-2xl mr-2">🌱</span>
              <span className="font-medium">Eco-Friendly Materials</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center p-4 bg-grey-light dark:bg-navy-light rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="text-gold text-2xl mr-2">🚚</span>
              <span className="font-medium">Free Delivery Available</span>
            </motion.div>
          </div>
        </div>
      </section>

      <ProductCategories />
      <SizeGuide />
      <Benefits />
      <Reviews />
      <Contact />
      <Footer />
      <ScrollToTop />
      <FloatingCTA />
    </motion.div>
  );
};

export default Index;