"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black relative py-20">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-gray-800 text-gray-200 mb-4">
            Radison
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Let's talk about your next big move
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Hop on a call with us to see how our services can accelerate your growth.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
          >
            Schedule a quick call <ArrowRight size={16} />
          </motion.button>
          
          <p className="text-gray-400 text-sm mt-4">It's Free</p>
        </motion.div>
      </div>
    </div>
  );
};