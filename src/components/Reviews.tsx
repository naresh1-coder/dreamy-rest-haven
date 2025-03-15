import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Bangalore',
      rating: 5,
      content: 'The Latex mattress has completely transformed my sleep. I used to wake up with back pain, but now I feel rejuvenated every morning. Worth every rupee!',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
      productName: 'Latex Luxury Mattress',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Hyderabad',
      rating: 5,
      content: 'After researching many mattress brands, I chose ANR for their Ortho mattress. The firmness is perfect for my back problems, and the quality is exceptional.',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      productName: 'Ortho Support Mattress',
    },
    {
      id: 3,
      name: 'Meera Patel',
      location: 'Chennai',
      rating: 4,
      content: 'We got the Spring mattress for our guest room and our visitors always compliment how comfortable it is. The delivery was prompt and the customer service excellent.',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1889&q=80',
      productName: 'Premium Spring Mattress',
    },
    {
      id: 4,
      name: 'Arjun Singh',
      location: 'Delhi',
      rating: 5,
      content: 'The custom size option was exactly what we needed for our antique bed frame. ANR Mattress delivered a perfect fit with exceptional comfort. Outstanding service!',
      image: 'https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      productName: 'Custom Comfort Mattress',
    },
  ];

  // Intersection Observer to trigger animations when the section comes into view
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
    <section id="reviews" ref={sectionRef} className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-medium tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">What Our Customers Say</h2>
          <p className="text-white/70 text-balance">
            Don't just take our word for it - hear from the thousands of customers who have transformed their sleep with ANR Mattress.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`glass-card bg-white/5 backdrop-blur-md p-8 h-full ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
            >
              <div className="mb-5">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-white/20'}`}
                    />
                  ))}
                </div>
                <p className="text-white/90 text-lg italic mb-6">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-white/70 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-5 mt-5 border-t border-white/10">
                <span className="text-xs text-white/60">Purchased</span>
                <p className="text-gold font-medium">{testimonial.productName}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
          <button className="btn-gold">
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
