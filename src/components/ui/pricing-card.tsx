"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  index: number;
  buttonText: string;
  isCustom?: boolean;
}

export const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  index, 
  buttonText,
  isCustom = false 
}: PricingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getInitialPosition = () => {
    switch (index) {
      case 0: return { opacity: 0, x: -100 }; // From left
      case 1: return { opacity: 0, y: 100 }; // From bottom
      case 2: return { opacity: 0, x: 100 }; // From right
      default: return { opacity: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-sm p-6 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-purple-400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="ml-3 text-xl font-bold text-white">{title}</h3>
      </div>
      
      {/* Price display */}
      <div className="mb-6">
        <p className="text-3xl font-bold text-white">{price}</p>
        <p className="text-sm text-gray-400">{isCustom ? "Contact us for pricing" : "per month, billed annually"}</p>
      </div>
      
      <p className="text-gray-400 text-sm mb-6">{description}</p>
      
      <button
        onClick={() => alert(`Selected the ${title} plan!`)}
        className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors mb-6 cursor-pointer relative z-10"
      >
        {buttonText} →
      </button>
      
      <div className="space-y-3 mt-auto">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 text-gray-400">
              <Check className="h-5 w-5 text-gray-400" />
            </div>
            <p className="ml-3 text-sm text-gray-400 select-text">{feature}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};