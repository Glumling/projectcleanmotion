"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Facebook, AtSign } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-black"></div>
              </div>
              <span className="text-white text-xl font-bold">Radison</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in AI solutions, creating smarter systems for smarter businesses.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <AtSign size={20} />
              </Link>
            </div>
          </div>
          
          {/* Sections */}
          <div>
            <h3 className="text-white font-medium mb-4">Sections</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-gray-400 hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#plans" className="text-gray-400 hover:text-white transition-colors">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Pages */}
          <div>
            <h3 className="text-white font-medium mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-gray-400 hover:text-white transition-colors">
                  Coming soon
                </Link>
              </li>
              <li>
                <Link href="/404" className="text-gray-400 hover:text-white transition-colors">
                  404
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Radison. All rights reserved.
        </div>
      </div>
    </footer>
  );
};