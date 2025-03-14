
import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const SizeGuide = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState('queen');

  const sizes = [
    {
      id: 'twin',
      name: 'Twin',
      dimensions: '38" × 75"',
      idealFor: 'Children or Single Adults',
      roomSize: 'Small Bedrooms',
      image: 'https://images.unsplash.com/photo-1505693311870-30865196a390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 'queen',
      name: 'Queen',
      dimensions: '60" × 80"',
      idealFor: 'Couples',
      roomSize: 'Average Bedrooms',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    },
    {
      id: 'king',
      name: 'King',
      dimensions: '76" × 80"',
      idealFor: 'Couples with Children or Pets',
      roomSize: 'Large Bedrooms',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 'custom',
      name: 'Custom',
      dimensions: 'Your Specifications',
      idealFor: 'Special Requirements',
      roomSize: 'Any Room Size',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
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

  const selectedSizeData = sizes.find(size => size.id === selectedSize) || sizes[1];

  return (
    <section id="size-guide" ref={sectionRef} className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-grey-light/30 to-white z-0"></div>
      
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-medium tracking-wider uppercase">Find Your Perfect Fit</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Mattress Size Guide</h2>
          <p className="text-navy/70 text-balance">
            Choose the right size for your space and sleeping needs with our comprehensive mattress size guide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Size Selection Tabs */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`py-2 px-3 rounded-md transition-all duration-300 ${
                      selectedSize === size.id
                        ? 'bg-navy text-white shadow-md'
                        : 'bg-grey-light text-navy hover:bg-grey-light/80'
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-serif font-semibold mb-1">{selectedSizeData.name} Size</h3>
                  <div className="w-16 h-1 bg-gold rounded mb-4"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-navy/10 p-2 rounded-full mr-4 mt-1">
                      <Check className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Dimensions</h4>
                      <p className="text-navy/70">{selectedSizeData.dimensions}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-navy/10 p-2 rounded-full mr-4 mt-1">
                      <Check className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Ideal For</h4>
                      <p className="text-navy/70">{selectedSizeData.idealFor}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-navy/10 p-2 rounded-full mr-4 mt-1">
                      <Check className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Room Size</h4>
                      <p className="text-navy/70">{selectedSizeData.roomSize}</p>
                    </div>
                  </div>
                </div>

                <button className="btn-gold mt-6">
                  Shop {selectedSizeData.name} Mattresses
                </button>
              </div>
            </div>
          </div>

          {/* Size Visualization */}
          <div className={`relative rounded-lg overflow-hidden shadow-lg 
                         ${isVisible ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
            <img 
              src={selectedSizeData.image} 
              alt={`${selectedSizeData.name} size mattress`} 
              className="w-full h-full object-cover"
              style={{ height: '450px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <span className="text-xs uppercase tracking-wider bg-gold px-2 py-1 rounded-sm">
                  {selectedSizeData.name}
                </span>
                <h3 className="text-2xl font-bold mt-2">Find Your Perfect Fit</h3>
                <p className="mt-2 text-white/90 max-w-md">
                  Our {selectedSizeData.name.toLowerCase()} size mattresses offer the perfect balance of space and comfort 
                  for {selectedSizeData.idealFor.toLowerCase()}.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Size CTA */}
        <div className={`mt-16 bg-navy/5 rounded-lg p-8 text-center max-w-3xl mx-auto border border-navy/10
                      ${isVisible ? 'animate-slide-in-bottom delay-500' : 'opacity-0'}`}>
          <h3 className="text-2xl font-serif font-bold mb-3">Need a Custom Size?</h3>
          <p className="text-navy/70 mb-6 max-w-2xl mx-auto">
            We offer custom size mattresses to fit your unique space requirements. Contact us today for a personalized consultation.
          </p>
          <button className="btn-primary">
            Request Custom Size
          </button>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;
