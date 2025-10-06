import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo2 from "@/assets/logo_2.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-40">
      <div className="container-custom flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center h-full">
          <img
            src={logo2}
            alt="Blue Basket Laundry Logo"
            className="w-48 h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-8 h-full">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition-colors duration-200 h-full flex items-center ${
                isActive(item.path)
                  ? "text-secondary"
                  : "text-white hover:text-secondary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center h-full">
          <Button
            asChild
            className="bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:from-sky-500 hover:to-blue-600 transition-all duration-300 shadow-md h-10"
          >
            <Link to="/contact">Book Service</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-700 bg-primary">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-white font-medium rounded-md transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-secondary bg-white/10"
                    : "text-white hover:text-secondary hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Book Service Button */}
            <div className="px-3 pt-2">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:from-sky-500 hover:to-blue-600 transition-all duration-300 shadow-md"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Book Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
