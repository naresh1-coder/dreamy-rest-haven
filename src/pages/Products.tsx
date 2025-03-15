
import { motion } from "framer-motion";
import Header from '../components/Header';
import ProductCategories from '../components/ProductCategories';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FloatingCTA from '../components/FloatingCTA';
import { useEffect } from 'react';

const Products = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Products</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-navy/70 dark:text-white/70 mb-8">
            Discover our premium collection of mattresses designed for ultimate comfort and support.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-4 py-2 rounded-full bg-navy text-white hover:bg-navy-light transition-all hover:shadow-md dark:bg-gold dark:hover:bg-gold-dark">All Mattresses</button>
            <button className="px-4 py-2 rounded-full border border-navy text-navy hover:bg-navy/5 transition-all hover:shadow-md dark:border-white dark:text-white dark:hover:bg-white/10">Latex</button>
            <button className="px-4 py-2 rounded-full border border-navy text-navy hover:bg-navy/5 transition-all hover:shadow-md dark:border-white dark:text-white dark:hover:bg-white/10">Ortho</button>
            <button className="px-4 py-2 rounded-full border border-navy text-navy hover:bg-navy/5 transition-all hover:shadow-md dark:border-white dark:text-white dark:hover:bg-white/10">Spring</button>
            <button className="px-4 py-2 rounded-full border border-navy text-navy hover:bg-navy/5 transition-all hover:shadow-md dark:border-white dark:text-white dark:hover:bg-white/10">Normal</button>
          </div>
        </div>
        
        <ProductCategories />
        
        <div className="container-padding py-12">
          <div className="flex flex-wrap gap-6 justify-center mb-16">
            <div className="flex items-center justify-center p-4 bg-grey-light dark:bg-navy-light rounded-lg shadow-sm">
              <span className="text-gold text-2xl mr-2">✓</span>
              <span className="font-medium">1000+ Happy Customers</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-grey-light dark:bg-navy-light rounded-lg shadow-sm">
              <span className="text-gold text-2xl mr-2">🛏️</span>
              <span className="font-medium">10-Year Warranty</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-grey-light dark:bg-navy-light rounded-lg shadow-sm">
              <span className="text-gold text-2xl mr-2">🌱</span>
              <span className="font-medium">Eco-Friendly Materials</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-grey-light dark:bg-navy-light rounded-lg shadow-sm">
              <span className="text-gold text-2xl mr-2">🚚</span>
              <span className="font-medium">Free Delivery Available</span>
            </div>
          </div>
        </div>
      </motion.div>
      
      <Footer />
      <ScrollToTop />
      <FloatingCTA />
    </motion.div>
  );
};

export default Products;
