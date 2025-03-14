
import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef<HTMLIFrameElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

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
    <section id="contact" ref={sectionRef} className="py-20 bg-grey-light">
      <div className="container-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-medium tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Visit Our Store</h2>
          <p className="text-navy/70 text-balance">
            Experience our premium mattresses in person at our showroom or contact us for personalized assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className={`lg:col-span-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-navy/5 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">Store Address</h4>
                    <p className="text-navy/70">K.P. Road, Proddatur,</p>
                    <p className="text-navy/70">Kadapa (Dist), A.P.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy/5 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">Phone Number</h4>
                    <p className="text-navy/70">
                      <a href="tel:+919963913320" className="hover:text-gold transition-colors">
                        +91 9963 913 320
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy/5 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">Email Address</h4>
                    <p className="text-navy/70">
                      <a href="mailto:info@anrmattress.com" className="hover:text-gold transition-colors">
                        info@anrmattress.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy/5 p-3 rounded-full mr-4">
                    <Clock className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">Business Hours</h4>
                    <p className="text-navy/70">Monday - Saturday: 9AM - 8PM</p>
                    <p className="text-navy/70">Sunday: 10AM - 6PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Message Form */}
              <div className="mt-8 pt-8 border-t border-grey-light/50">
                <h4 className="text-lg font-bold mb-4">Send a Quick Message</h4>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 rounded-md border border-grey focus:outline-none focus:ring-2 focus:ring-navy/30"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={3}
                      className="w-full px-4 py-3 rounded-md border border-grey focus:outline-none focus:ring-2 focus:ring-navy/30"
                    ></textarea>
                  </div>
                  <button type="button" className="btn-primary w-full flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`lg:col-span-3 ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
            <div className="bg-white rounded-lg shadow-md p-4 h-full">
              <div className="rounded-lg overflow-hidden w-full h-full min-h-[400px] lg:min-h-[600px] relative">
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-grey-light">
                    <div className="animate-pulse text-navy/70">Loading map...</div>
                  </div>
                )}
                <iframe
                  ref={mapRef}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15347.550862198573!2d78.53837227779238!3d14.751116651208758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb373c1e475cea7%3A0x5f5ed1413cc49c83!2sProddatur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1690974321012!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setMapLoaded(true)}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
