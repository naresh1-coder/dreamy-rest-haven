
import { Facebook, Instagram, Twitter, Youtube, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Newsletter */}
      <div className="container-padding py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-serif font-bold mb-3">Subscribe to Our Newsletter</h3>
          <p className="text-white/70 mb-6">
            Stay updated with our latest products, exclusive offers, and sleep tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-md focus:outline-none text-navy"
            />
            <button className="btn-gold rounded-r-md flex items-center justify-center">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-padding py-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-white">
                ANR<span className="text-gold">Mattress</span>
              </h3>
              <p className="text-white/70 mt-3">
                Crafting premium mattresses for the perfect sleep experience. Quality, comfort, and durability in every product.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/90 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/90 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/90 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/90 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="text-white/70 hover:text-gold transition-colors">Products</a>
              </li>
              <li>
                <a href="#size-guide" className="text-white/70 hover:text-gold transition-colors">Size Guide</a>
              </li>
              <li>
                <a href="#benefits" className="text-white/70 hover:text-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#reviews" className="text-white/70 hover:text-gold transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">Return Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">Warranty Information</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-white/70">
              <p>K.P. Road, Proddatur,</p>
              <p className="mb-3">Kadapa (Dist), A.P.</p>
              <p className="mb-3">
                <a href="tel:+919963913320" className="hover:text-gold transition-colors">
                  +91 9963 913 320
                </a>
              </p>
              <p>
                <a href="mailto:info@anrmattress.com" className="hover:text-gold transition-colors">
                  info@anrmattress.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container-padding py-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} ANR Mattress. All rights reserved.
          </p>
          <p className="text-white/70 text-sm flex items-center mt-3 md:mt-0">
            Crafted with <Heart className="w-4 h-4 text-gold mx-1" /> for quality sleep
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
