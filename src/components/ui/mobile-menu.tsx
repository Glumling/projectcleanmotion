"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedHamburger } from "./animated-hamburger";

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

interface MobileMenuProps {
  items: NavItem[];
}

export const MobileMenu = ({ items }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  return (
    <div className="md:hidden">
      {/* Mobile Menu Button - Fixed position with better styling */}
      <div 
        className={`fixed top-6 right-6 z-50 flex items-center justify-center ${
          scrolled || isOpen ? "bg-gray-900/80" : "bg-transparent"
        } rounded-full p-2 backdrop-blur-sm transition-all duration-300`}
      >
        <AnimatedHamburger isOpen={isOpen} toggle={toggleMenu} />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col"
          >
            <div className="flex flex-col items-center justify-center h-full w-full">
              <nav className="flex flex-col items-center space-y-8 py-8">
                {items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.url}
                        className="flex items-center gap-3 px-6 py-3 text-xl text-white hover:text-purple-400 transition-colors"
                        onClick={handleLinkClick}
                      >
                        <Icon className="w-6 h-6" />
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};