
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', parallaxEffect);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy/10 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587922546307-776227941871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2592&q=80')] 
                   bg-cover bg-center z-0"
          style={{ transform: 'scale(1.1)' }}
        ></div>
      </div>

      {/* Content */}
      <div 
        ref={heroRef}
        className="container-padding relative z-20 text-center text-white"
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 mb-6 bg-gold/90 backdrop-blur-sm rounded-full text-sm font-medium animate-fade-in-fast">
            Experience Unmatched Comfort
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-fast tracking-tight">
            Perfect Sleep, <br /> Perfect <span className="text-gold">Mattress</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto text-balance animate-fade-in-fast delay-100">
            Discover luxury comfort with our premium mattresses designed for your perfect night's sleep.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-fast delay-200">
            <button className="btn-gold w-full sm:w-auto">
              Shop Now
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 
                   text-white animate-bounce hidden md:flex flex-col items-center"
        onClick={scrollToProducts}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
};

export default Hero;
