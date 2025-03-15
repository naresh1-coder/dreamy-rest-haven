
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, ShoppingCart, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Toggle } from './ui/toggle';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

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

  // Update active section based on current route
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveSection('home');
    } else if (location.pathname.includes('/products')) {
      setActiveSection('products');
    } else if (location.pathname.includes('/size-guide')) {
      setActiveSection('size-guide');
    } else if (location.pathname.includes('/about')) {
      setActiveSection('about');
    } else if (location.pathname.includes('/reviews')) {
      setActiveSection('reviews');
    } else if (location.pathname.includes('/contact')) {
      setActiveSection('contact');
    }
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'products', label: 'Products', path: '/products' },
    { id: 'size-guide', label: 'Size Guide', path: '/size-guide' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'reviews', label: 'Reviews', path: '/reviews' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-navy-dark/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
      style={{ top: location.pathname === '/' ? '28px' : '0' }}
    >
      <div className="container-padding flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center"
        >
          <motion.span 
            className="font-serif text-2xl font-bold text-navy dark:text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            ANR<span className="text-gold">Mattress</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-link text-navy dark:text-white ${
                (location.pathname === item.path || 
                 (location.pathname === '/' && activeSection === item.id)) 
                ? 'active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Toggle 
              aria-label="Toggle theme"
              pressed={theme === 'dark'}
              onPressedChange={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-grey-light dark:hover:bg-navy-light transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5 text-gold" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5 text-navy" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Toggle>
          </motion.div>
          
          <motion.button 
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-grey-light dark:hover:bg-navy-light transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="w-5 h-5 text-navy dark:text-white" />
          </motion.button>
          
          <motion.button 
            className="flex items-center space-x-2 btn-secondary py-2 dark:border-white dark:text-white dark:hover:bg-white/10"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <User className="w-4 h-4" />
            <span>Login</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
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
          </motion.div>
          
          <motion.button 
            className="p-2 text-navy dark:text-white focus:outline-none"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white dark:bg-navy-dark z-40 pt-20 px-6 md:hidden overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 250 }}
          >
            <nav className="flex flex-col space-y-6 text-lg mt-10">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="py-2 border-b border-grey-light dark:border-navy-light text-navy dark:text-white"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex space-x-4 pt-4">
                <button className="btn-secondary flex-1 dark:border-white dark:text-white dark:hover:bg-white/10">Login</button>
                <button className="btn-primary flex-1 dark:bg-gold dark:hover:bg-gold-dark">Sign Up</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
