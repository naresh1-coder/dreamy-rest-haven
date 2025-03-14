
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';
import SizeGuide from '../components/SizeGuide';
import Benefits from '../components/Benefits';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
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
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <Hero />
      <ProductCategories />
      <SizeGuide />
      <Benefits />
      <Reviews />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
