"use client";
import { motion } from "framer-motion";

interface BenefitCardProps {
  title: string;
  description: string;
  index: number;
  icon: React.ReactNode;
}

export const BenefitCard = ({ title, description, index, icon }: BenefitCardProps) => {
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
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-sm p-6"
    >
      <div className="flex items-center mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
          {icon}
        </div>
        <h3 className="ml-3 text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
};