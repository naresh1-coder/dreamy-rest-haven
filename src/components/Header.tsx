
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, ShoppingCart, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Toggle } from './ui/toggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

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
          ? 'bg-white/90 dark:bg-navy-dark/90 backdrop-blur-md shadow-sm py-3' 
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
          <span className="font-serif text-2xl font-bold text-navy dark:text-white">
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
            className={`nav-link text-navy dark:text-white ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a 
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('products');
            }}
            className={`nav-link text-navy dark:text-white ${activeSection === 'products' ? 'active' : ''}`}
          >
            Products
          </a>
          <a 
            href="#size-guide"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('size-guide');
            }}
            className={`nav-link text-navy dark:text-white ${activeSection === 'size-guide' ? 'active' : ''}`}
          >
            Size Guide
          </a>
          <a 
            href="#benefits"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('benefits');
            }}
            className={`nav-link text-navy dark:text-white ${activeSection === 'benefits' ? 'active' : ''}`}
          >
            About Us
          </a>
          <a 
            href="#reviews"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('reviews');
            }}
            className={`nav-link text-navy dark:text-white ${activeSection === 'reviews' ? 'active' : ''}`}
          >
            Reviews
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className={`nav-link text-navy dark:text-white ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Toggle 
            aria-label="Toggle theme"
            pressed={theme === 'dark'}
            onPressedChange={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-grey-light dark:hover:bg-navy-light transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-gold" />
            ) : (
              <Moon className="w-5 h-5 text-navy" />
            )}
          </Toggle>
          <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-grey-light dark:hover:bg-navy-light transition-colors">
            <ShoppingCart className="w-5 h-5 text-navy dark:text-white" />
          </button>
          <button className="flex items-center space-x-2 btn-secondary py-2 dark:border-white dark:text-white dark:hover:bg-white/10">
            <User className="w-4 h-4" />
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Toggle 
            aria-label="Toggle theme"
            pressed={theme === 'dark'}
            onPressedChange={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-grey-light dark:hover:bg-navy-light transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-gold" />
            ) : (
              <Moon className="w-5 h-5 text-navy" />
            )}
          </Toggle>
          <button 
            className="p-2 text-navy dark:text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-navy-dark z-40 transform transition-transform duration-300 ease-in-out ${
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
            className="py-2 border-b border-grey-light dark:border-navy-light text-navy dark:text-white"
          >
            Home
          </a>
          <a 
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('products');
            }}
            className="py-2 border-b border-grey-light dark:border-navy-light text-navy dark:text-white"
          >
            Products
          </a>
          <a 
            href="#size-guide"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('size-guide');
            }}
            className="py-2 border-b border-grey-light dark:border-navy-light text-navy dark:text-white"
          >
            Size Guide
          </a>
          <a 
            href="#benefits"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('benefits');
            }}
            className="py-2 border-b border-grey-light dark:border-navy-light text-navy dark:text-white"
          >
            About Us
          </a>
          <a 
            href="#reviews"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('reviews');
            }}
            className="py-2 border-b border-grey-light dark:border-navy-light text-navy dark:text-white"
          >
            Reviews
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="py-2 border-b border-grey-light dark:border-navy-light text-navy dark:text-white"
          >
            Contact
          </a>
          <div className="flex space-x-4 pt-4">
            <button className="btn-secondary flex-1 dark:border-white dark:text-white dark:hover:bg-white/10">Login</button>
            <button className="btn-primary flex-1 dark:bg-gold dark:hover:bg-gold-dark">Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
