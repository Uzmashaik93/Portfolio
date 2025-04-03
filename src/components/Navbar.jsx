import { useState, useEffect } from "react";
import { Menu, X, Heart, Sparkles, Star, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative font-sans">
      {/* Main navbar */}
      <nav
        className={`fixed w-full z-10 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-gradient-to-r from-pink-100 to-purple-100"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text font-bold text-xl">
                  Bella
                </span>
                <Heart className="text-pink-400" size={20} />
              </div>
            </div>

            {/* Desktop menu - always visible on large screens */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-800 hover:text-pink-500 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-pink-500 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-pink-500 transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-pink-500 transition-colors font-medium"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-pink-500 transition-colors font-medium"
              >
                Contact
              </a>

              <button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-4 py-2 rounded-full font-medium transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile menu button - only visible on small screens */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-pink-500 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - only for small screens */}
        <div
          className={`lg:hidden ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } transition-all duration-300 ease-in-out overflow-hidden bg-white/90 backdrop-blur-md`}
        >
          <div className="px-4 py-2 space-y-3 pb-6">
            <a
              href="#"
              className="block text-gray-800 hover:text-pink-500 transition-colors font-medium py-2"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-pink-500 transition-colors font-medium py-2"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-pink-500 transition-colors font-medium py-2"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-pink-500 transition-colors font-medium py-2"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-pink-500 transition-colors font-medium py-2"
            >
              Contact
            </a>

            <button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-4 py-2 rounded-full font-medium transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
