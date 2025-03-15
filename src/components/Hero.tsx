import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import herobg from '../assets/room-bed-design-interior-wallpaper-preview.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Mark as loaded after a short delay to allow for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    const parallaxEffect = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = 1 - Math.min(scrollPosition / 700, 1);
        const translateY = scrollPosition * 0.4;
        
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', parallaxEffect);
    return () => {
      window.removeEventListener('scroll', parallaxEffect);
      clearTimeout(timer);
    };
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for text animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy/10 dark:from-navy-dark/70 dark:to-navy-dark/40 z-10"></div>
        <motion.div 
          className="absolute inset-0 bg-cover bg-center z-0"
          initial={{ scale: 1.2, opacity: 0.5 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ backgroundImage: `url(${herobg})`, transformOrigin: "center center" }}
        ></motion.div>
      </div>

      {/* Content */}
      <motion.div 
        ref={heroRef}
        className="container-padding relative z-20 text-center text-white"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-3xl mx-auto">
          <motion.span 
            className="inline-block px-4 py-1 mb-6 bg-gold/90 backdrop-blur-sm rounded-full text-sm font-medium"
            variants={item}
          >
            Experience Unmatched Comfort
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            variants={item}
          >
            Perfect Sleep, <br /> Perfect <span className="text-gold">Mattress</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto text-balance"
            variants={item}
          >
            Discover luxury comfort with our premium mattresses designed for your perfect night's sleep.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={item}
          >
            <motion.button 
              className="btn-gold w-full sm:w-auto hover:scale-105 transition-transform"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(212, 175, 55, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Shop Now
            </motion.button>
            
            <motion.button 
              className="btn-secondary border-white text-white hover:bg-white/10 w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Button */}
      <motion.button 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 
                  text-white hidden md:flex flex-col items-center"
        onClick={scrollToProducts}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0, 
          y: isLoaded ? 0 : -20,
        }}
        transition={{ 
          delay: 1.2,
          duration: 0.5,
        }}
      >
        <motion.span 
          className="text-sm mb-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut", 
          }}
        >
          Scroll Down
        </motion.span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut", 
          }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
