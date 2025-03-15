
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCategories = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Latex Mattress',
      description: "Natural comfort with breathable latex for a cooler night's sleep.",
      image: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      features: ['Hypoallergenic', 'Temperature Regulating', 'Eco-friendly'],
    },
    {
      id: 2,
      name: 'Ortho Mattress',
      description: 'Designed for proper spine alignment and pressure point relief.',
      image: 'https://images.unsplash.com/photo-1634646598897-675355d853da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      features: ['Firm Support', 'Posture Alignment', 'Pain Relief'],
    },
    {
      id: 3,
      name: 'Spring Mattress',
      description: 'Traditional pocket springs for responsive support and bounce.',
      image: 'https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80',
      features: ['Responsive Support', 'Enhanced Airflow', 'Durable Build'],
    },
    {
      id: 4,
      name: 'Premium Mattress',
      description: 'Our luxury hybrid model combining the best of all technologies.',
      image: 'https://images.unsplash.com/photo-1671726203386-98cb355d33e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      features: ['Ultimate Comfort', 'Premium Materials', '10-Year Warranty'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-grey-light dark:bg-navy-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-gold/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-navy/5 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-padding">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase">Our Collection</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 dark:text-white">Premium Mattress Types</h2>
          <p className="text-navy/70 dark:text-white/70 text-balance">
            Discover our range of premium mattresses designed to suit your specific sleeping preferences and needs.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="card group hover:translate-y-[-5px] dark:bg-navy dark:border-navy-light overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
            >
              <div className="relative overflow-hidden h-56">
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent opacity-70"></div>
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                </motion.div>
              </div>
              <div className="p-6">
                <p className="text-navy/70 dark:text-white/70 mb-4 text-balance">{product.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2 text-navy/90 dark:text-white/90">Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-navy/70 dark:text-white/70">
                        <span className="text-gold mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.button 
                  className="flex items-center text-navy dark:text-white hover:text-gold dark:hover:text-gold transition-colors font-medium group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <motion.button 
            className="btn-primary dark:bg-gold dark:hover:bg-gold-dark"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
