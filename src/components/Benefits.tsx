
import { useState, useEffect, useRef } from 'react';
import { Sparkles, Shield, Award, Clock, ArrowRight } from 'lucide-react';

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const benefits = [
    {
      id: 1,
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      title: 'Superior Comfort',
      description: 'Experience cloud-like comfort with our ergonomically designed mattresses that conform to your body.',
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: 'Exceptional Durability',
      description: 'Our mattresses are built to last, made with premium materials that maintain their shape and support.',
    },
    {
      id: 3,
      icon: <Award className="w-8 h-8 text-gold" />,
      title: '10-Year Warranty',
      description: 'Sleep with peace of mind knowing your purchase is protected by our comprehensive warranty.',
    },
    {
      id: 4,
      icon: <Clock className="w-8 h-8 text-gold" />,
      title: '100-Night Trial',
      description: 'Take your time to experience the perfect sleep with our risk-free trial period.',
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
    <section id="benefits" ref={sectionRef} className="py-20">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className={`relative rounded-lg overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <img 
              src="https://i.pinimg.com/736x/5f/05/76/5f05764a2fa82a252f659b9071d53777.jpg" 
              alt="ANR Mattress craftsmanship" 
              className="w-full h-full object-cover rounded-lg"
              style={{ height: '600px' }}
            />
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="bg-gold text-white text-xs font-medium px-2.5 py-1 rounded-sm uppercase tracking-wider">
                Handcrafted
              </span>
              <h3 className="text-2xl font-bold mt-3 mb-2">Quality Craftsmanship</h3>
              <p className="text-white/80 max-w-md">
                Each ANR mattress is meticulously crafted by our skilled artisans using premium materials for ultimate comfort and durability.
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-gold text-sm font-medium tracking-wider uppercase">Why Choose ANR Mattress</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Experience the Difference</h2>
              <p className="text-navy/70 text-balance">
                At ANR Mattress, we combine innovative design with premium materials to create the perfect sleep experience.
                Our commitment to quality and comfort has made us the preferred choice for discerning customers.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.id}
                  className={`bg-white p-6 rounded-lg shadow-md border border-grey-light hover:shadow-lg transition-all
                             ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-navy/70 text-balance">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="flex items-center text-navy space-x-2 group mt-6">
              <span className="font-semibold">Learn more about our quality promise</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 text-gold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
