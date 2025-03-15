
import { motion } from "framer-motion";
import Header from '../components/Header';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useEffect } from 'react';

const AboutUs = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About ANR Mattress</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-navy/70 dark:text-white/70 mb-8">
            Our journey of delivering comfort and quality sleep solutions.
          </p>
        </div>
        
        <section className="py-16 bg-grey-light dark:bg-navy-light">
          <div className="container-padding">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="reveal"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="mb-4 text-navy/80 dark:text-white/80">
                  Founded in 2010, ANR Mattress has been dedicated to crafting premium mattresses that combine innovation, comfort, and durability. Our journey began with a simple mission: to help people sleep better.
                </p>
                <p className="mb-4 text-navy/80 dark:text-white/80">
                  Over the years, we've refined our craft, incorporating the latest sleep technology and highest quality materials to deliver mattresses that stand the test of time.
                </p>
                <p className="text-navy/80 dark:text-white/80">
                  Today, ANR Mattress is proud to be a trusted name in thousands of homes across India, known for our commitment to quality and customer satisfaction.
                </p>
              </motion.div>
              
              <motion.div 
                className="relative h-96 overflow-hidden rounded-lg reveal"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80" 
                  alt="ANR Mattress Showroom" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Benefits />
        </motion.div>
        
        <section className="py-16">
          <div className="container-padding">
            <h2 className="text-3xl font-bold mb-12 text-center reveal">Our Timeline</h2>
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row reveal">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="font-bold text-2xl text-gold">2010</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">ANR Mattress Founded</h3>
                  <p className="text-navy/70 dark:text-white/70">Started our journey with a small workshop in Proddatur.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row reveal">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="font-bold text-2xl text-gold">2015</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">Expanded Product Line</h3>
                  <p className="text-navy/70 dark:text-white/70">Introduced our premium Latex and Ortho mattress collections.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row reveal">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="font-bold text-2xl text-gold">2018</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">First Flagship Showroom</h3>
                  <p className="text-navy/70 dark:text-white/70">Opened our first dedicated showroom in K.P. Road, Proddatur.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row reveal">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="font-bold text-2xl text-gold">2020</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">Eco-Friendly Initiative</h3>
                  <p className="text-navy/70 dark:text-white/70">Launched our eco-friendly mattress line using sustainable materials.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row reveal">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="font-bold text-2xl text-gold">2023</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">1000+ Happy Customers</h3>
                  <p className="text-navy/70 dark:text-white/70">Reached the milestone of serving 1000+ satisfied customers across India.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default AboutUs;
