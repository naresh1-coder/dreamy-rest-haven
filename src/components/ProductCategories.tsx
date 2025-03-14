
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-grey-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-gold/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-navy/5 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-medium tracking-wider uppercase">Our Collection</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Premium Mattress Types</h2>
          <p className="text-navy/70 text-balance">
            Discover our range of premium mattresses designed to suit your specific sleeping preferences and needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`card group hover:translate-y-[-5px] ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-navy/70 mb-4 text-balance">{product.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2 text-navy/90">Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-navy/70">
                        <span className="text-gold mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="flex items-center text-navy hover:text-gold transition-colors font-medium group">
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
