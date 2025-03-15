
import { motion } from "framer-motion";
import Header from '../components/Header';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useEffect } from 'react';

const ReviewsPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Customer Reviews</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-navy/70 dark:text-white/70 mb-8">
            See what our customers have to say about their ANR Mattress experience.
          </p>
          
          <motion.div 
            className="flex justify-center mb-12 reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-gold/10 dark:bg-gold/20 rounded-full px-6 py-3 flex items-center">
              <span className="text-gold mr-2 text-2xl">⭐</span>
              <span className="font-semibold text-lg">4.9/5 Customer Rating</span>
              <div className="flex ml-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold">⭐</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <Reviews />
        
        <section className="py-16 bg-grey-light dark:bg-navy-light">
          <div className="container-padding">
            <h2 className="text-2xl font-bold mb-8 text-center reveal">Share Your Experience</h2>
            <div className="max-w-2xl mx-auto bg-white dark:bg-navy p-6 rounded-lg shadow-md reveal">
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-grey dark:border-navy-light rounded-md focus:outline-none focus:ring-2 focus:ring-gold dark:bg-navy-light dark:text-white"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Your Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star}
                      className="text-2xl text-gold/40 hover:text-gold transition-colors"
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <textarea 
                  className="w-full px-4 py-2 border border-grey dark:border-navy-light rounded-md focus:outline-none focus:ring-2 focus:ring-gold dark:bg-navy-light dark:text-white"
                  rows={4}
                  placeholder="Share your experience with ANR Mattress..."
                ></textarea>
              </div>
              <button className="btn-gold w-full">
                Submit Review
              </button>
            </div>
          </div>
        </section>
      </motion.div>
      
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default ReviewsPage;
