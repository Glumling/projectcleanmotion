"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProcessCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  className?: string;
}

export const ProcessCard = ({ title, description, icon, index, className }: ProcessCardProps) => {
  // Different initial positions based on index
  const getInitialPosition = () => {
    if (index === 0) return { opacity: 0, x: -100 }; // Left card comes from left
    if (index === 1) return { opacity: 0, y: 100 };  // Middle card comes from bottom
    if (index === 2) return { opacity: 0, x: 100 };  // Right card comes from right
    return { opacity: 0, y: 50 }; // Default fallback
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-sm p-8",
        className
      )}
    >
      {/* Terminal-like header */}
      <div className="flex items-center gap-1.5 mb-4">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>

      {/* Content area with animated elements */}
      <div className="space-y-6">
        {index === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-24 bg-gray-800/50 rounded-lg overflow-hidden"
          >
            <div className="p-4 font-mono text-sm text-purple-400">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                &gt; Analyzing requirements...
              </motion.div>
            </div>
          </motion.div>
        )}

        {index === 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-24 bg-gray-800/50 rounded-lg overflow-hidden"
          >
            <div className="p-4 font-mono text-sm text-purple-400">
              <pre className="text-xs">
                <code>{`function optimize() {
  // Development in progress
  return solution;
}`}</code>
              </pre>
            </div>
          </motion.div>
        )}

        {index === 2 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-24 bg-gray-800/50 rounded-lg overflow-hidden"
          >
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Status</span>
                <span className="text-xs text-green-400">Active</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <motion.div 
                  className="bg-purple-500 h-1.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                />
              </div>
            </div>
          </motion.div>
        )}

        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};