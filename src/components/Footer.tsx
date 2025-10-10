import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Wash & Fold", path: "/services/wash-and-fold" },
      { name: "Dry Cleaning", path: "/services/dry-cleaning" },
      { name: "Steam Pressing", path: "/services/steam-pressing" },
      { name: "Shoe Care", path: "/services/shoe-care" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Services", path: "/services" },
      { name: 'Business', path: '/business' },
      { name: "Contact", path: "/contact" },
    ],
    support: [
      { name: "FAQ", path: "/contact" },
      { name: "Customer Support", path: "/contact" },
      { name: "Track Order", path: "/contact" },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-16">
          {/* Company Info */}
          <div className="md:col-span-1 col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-poppins font-bold text-xl">
                Blue Basket Laundry
              </span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Professional laundry and dry cleaning services. Fresh clothes,
              fresh start.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 col-span-2">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="tel:+97145536673"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  +97145536673
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="mailto:bluebasketdxb@gmail.com"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  bluebasketdxb@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">
                  Shop 14, Rose 1 Building
                  <br />
                  Al Karama, Dubai, UAE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center space-y-4 md:space-y-0">
            {/* Left: Copyright */}
            <p className="text-blue-100 text-sm text-center md:text-left">
              © {currentYear} Blue Basket Laundry. All rights reserved.
            </p>

            {/* Right: Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <a
                href="#"
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
