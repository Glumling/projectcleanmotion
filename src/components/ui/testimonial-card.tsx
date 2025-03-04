"use client";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  index: number;
}

export const TestimonialCard = ({ 
  quote, 
  name, 
  position, 
  company,
  index 
}: TestimonialCardProps) => {
  const getInitialPosition = () => {
    // Different animation directions based on index
    switch (index % 3) {
      case 0: return { opacity: 0, x: -50 }; // From left
      case 1: return { opacity: 0, y: 50 }; // From bottom
      case 2: return { opacity: 0, x: 50 }; // From right
      default: return { opacity: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-sm p-6 flex flex-col"
    >
      <p className="text-white text-lg mb-6">"{quote}"</p>
      
      <div className="flex items-center mt-auto">
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-800 text-purple-400 font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="text-white font-medium">{name}</h4>
          <p className="text-gray-400 text-sm">{position} : {company}</p>
        </div>
      </div>
    </motion.div>
  );
};