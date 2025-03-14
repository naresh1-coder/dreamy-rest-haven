
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');
        
        if (sectionTop < 100 && sectionTop > -300 && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu
      closeMobileMenu();
      
      // Scroll to element
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <span className="font-serif text-2xl font-bold text-navy">
            ANR<span className="text-gold">Mattress</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a 
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('products');
            }}
            className={`nav-link ${activeSection === 'products' ? 'active' : ''}`}
          >
            Products
          </a>
          <a 
            href="#size-guide"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('size-guide');
            }}
            className={`nav-link ${activeSection === 'size-guide' ? 'active' : ''}`}
          >
            Size Guide
          </a>
          <a 
            href="#benefits"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('benefits');
            }}
            className={`nav-link ${activeSection === 'benefits' ? 'active' : ''}`}
          >
            About Us
          </a>
          <a 
            href="#reviews"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('reviews');
            }}
            className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`}
          >
            Reviews
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-grey-light transition-colors">
            <ShoppingCart className="w-5 h-5 text-navy" />
          </button>
          <button className="flex items-center space-x-2 btn-secondary py-2">
            <User className="w-4 h-4" />
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-navy focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20 px-6`}
      >
        <nav className="flex flex-col space-y-6 text-lg">
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="py-2 border-b border-grey-light"
          >
            Home
          </a>
          <a 
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('products');
            }}
            className="py-2 border-b border-grey-light"
          >
            Products
          </a>
          <a 
            href="#size-guide"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('size-guide');
            }}
            className="py-2 border-b border-grey-light"
          >
            Size Guide
          </a>
          <a 
            href="#benefits"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('benefits');
            }}
            className="py-2 border-b border-grey-light"
          >
            About Us
          </a>
          <a 
            href="#reviews"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('reviews');
            }}
            className="py-2 border-b border-grey-light"
          >
            Reviews
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="py-2 border-b border-grey-light"
          >
            Contact
          </a>
          <div className="flex space-x-4 pt-4">
            <button className="btn-secondary flex-1">Login</button>
            <button className="btn-primary flex-1">Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
