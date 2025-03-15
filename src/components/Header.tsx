import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}> 
      <div className="container-padding flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.span className="font-serif text-2xl font-bold text-navy" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            ANR<span className="text-gold">Mattress</span>
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link key={item.id} to={item.path} className={`nav-link text-navy ${location.pathname === item.path || (location.pathname === '/' && activeSection === item.id) ? 'active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <motion.button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-grey-light transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <ShoppingCart className="w-5 h-5 text-navy" />
          </motion.button>
          <motion.button className="flex items-center space-x-2 btn-secondary py-2" whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }} whileTap={{ scale: 0.98 }}>
            <User className="w-4 h-4" />
            <span>Login</span>
          </motion.button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <motion.button className="p-2 text-navy focus:outline-none" onClick={toggleMobileMenu} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden overflow-y-auto" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 20, stiffness: 250 }}>
            <nav className="flex flex-col space-y-6 text-lg mt-10">
              {navItems.map((item) => (
                <Link key={item.id} to={item.path} className="py-2 border-b border-grey-light text-navy" onClick={closeMobileMenu}>
                  {item.label}
                </Link>
              ))}
              <div className="flex space-x-4 pt-4">
                <button className="btn-secondary flex-1">Login</button>
                <button className="btn-primary flex-1">Sign Up</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;