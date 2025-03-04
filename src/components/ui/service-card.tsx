"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MessageSquare, FileText, Users, BarChart3, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
  type: "chatbot" | "content" | "leads" | "data" | "consulting";
  isLarge?: boolean;
}

export const ServiceCard = ({ title, description, index, type, isLarge = false }: ServiceCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
  
    // Updated initial positions based on index and isLarge
    const getInitialPosition = () => {
      if (isLarge) {
        return { opacity: 0, y: 100 }; // Bottom entrance for larger cards
      }
      
      switch (index) {
        case 0: // First card
          return { opacity: 0, x: -100 }; // From left
        case 1: // Middle card
          return { opacity: 0, y: 100 }; // From bottom
        case 2: // Last card
          return { opacity: 0, x: 100 }; // From right
        default:
          return { opacity: 0, y: 0 };
      }
    };

  const renderCardContent = () => {
    switch (type) {
      case "chatbot":
        return (
          <div className="bg-gray-800/70 rounded-lg p-4 mb-4 h-40 overflow-hidden">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-full h-4 bg-gray-700 rounded-md"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3/4 h-4 bg-gray-700 rounded-md"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5/6 h-4 bg-gray-700 rounded-md"></div>
              </div>
              <div className="mt-auto flex items-center">
                <div className="flex-1 bg-gray-700 rounded-md p-2">
                  <p className="text-xs text-gray-400">Ask me something...</p>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="ml-2 bg-purple-600 rounded-md p-1.5"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        );
      case "content":
        return (
          <div className="bg-gray-800/70 rounded-lg p-4 mb-4 h-40 overflow-hidden">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2 mb-2">
                <div className="relative w-full">
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 rounded-md p-2 text-xs text-gray-300" 
                    value="Generate content..." 
                    readOnly 
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 rounded px-2 py-0.5 text-xs text-white">
                    Generate
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-700 rounded-md p-2 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="bg-gray-700 rounded-md p-2 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4C22 4 21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.6 3 5C5.2 7.6 8.6 9.1 12 9C11.1 4.8 16 2.4 19 5.2C20.1 5.2 22 4 22 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="bg-gray-700 rounded-md p-2 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      case "leads":
        return (
          <div className="bg-gray-800/70 rounded-lg p-4 mb-4 h-40 overflow-hidden">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2 p-2 bg-gray-700/50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">JD</div>
                <div className="flex-1">
                  <p className="text-xs text-white">Jack Daniel</p>
                  <p className="text-xs text-gray-400">Founder</p>
                </div>
                <div className="transform rotate-0 transition-transform duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 p-2 bg-gray-700/50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">JR</div>
                <div className="flex-1">
                  <p className="text-xs text-white">Justin Roots</p>
                  <p className="text-xs text-gray-400">Marketing lead</p>
                </div>
                <div className="transform rotate-180 transition-transform duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.03 }}
                className="mt-auto w-full bg-purple-600 rounded-md p-2 text-xs text-white"
              >
                Generate Leads
              </motion.button>
            </div>
          </div>
        );
      case "data":
        return (
          <div className={`bg-gray-800/70 rounded-lg p-4 mb-4 ${isLarge ? 'h-60' : 'h-40'} overflow-hidden`}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs text-gray-400">Work Efficiency</div>
                <div className="text-xs text-green-400">+23%</div>
              </div>
              <div className="relative h-20 mb-2">
                <div className="absolute bottom-0 left-0 w-1/6 h-10 bg-purple-700 rounded-sm"></div>
                <div className="absolute bottom-0 left-[calc(100%/6)] w-1/6 h-14 bg-purple-600 rounded-sm"></div>
                <div className="absolute bottom-0 left-[calc(200%/6)] w-1/6 h-8 bg-purple-500 rounded-sm"></div>
                <div className="absolute bottom-0 left-[calc(300%/6)] w-1/6 h-16 bg-purple-600 rounded-sm"></div>
                <div className="absolute bottom-0 left-[calc(400%/6)] w-1/6 h-12 bg-purple-700 rounded-sm"></div>
                <div className="absolute bottom-0 left-[calc(500%/6)] w-1/6 h-18 bg-purple-800 rounded-sm"></div>
              </div>
              <div className="text-xs text-gray-400 mt-auto">
                Work efficiency is up compared to 23% compared to last week
              </div>
              
              {isLarge && (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <div className="text-xs text-gray-400 mb-1">Revenue</div>
                    <div className="text-sm text-white font-medium">$24,500</div>
                    <div className="text-xs text-green-400">+12%</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <div className="text-xs text-gray-400 mb-1">Customers</div>
                    <div className="text-sm text-white font-medium">1,429</div>
                    <div className="text-xs text-green-400">+8%</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case "consulting":
        return (
          <div className={`bg-gray-800/70 rounded-lg p-4 mb-4 ${isLarge ? 'h-60' : 'h-40'} overflow-hidden`}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs text-gray-400">AI Strategy Session</div>
                <div className="text-xs text-purple-400">In Progress</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-xs text-gray-300">Business Analysis</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-xs text-gray-300">AI Opportunity Mapping</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
                  <div className="text-xs text-white">Implementation Planning</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                  <div className="text-xs text-gray-500">ROI Calculation</div>
                </div>
              </div>
              
              {isLarge && (
                <div className="mt-4 bg-gray-700/50 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-2">Next Meeting</div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-white">Strategy Review</div>
                    <div className="text-xs text-gray-400">Tomorrow, 2:00 PM</div>
                  </div>
                  <div className="mt-2 flex space-x-1">
                    <div className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-[10px] text-white">JD</div>
                    <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-[10px] text-white">AR</div>
                    <div className="w-6 h-6 rounded-full bg-green-700 flex items-center justify-center text-[10px] text-white">MK</div>
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-[10px] text-white">+2</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getIcon = () => {
    switch (type) {
      case "chatbot": return <MessageSquare className="w-5 h-5 text-purple-400" />;
      case "content": return <FileText className="w-5 h-5 text-purple-400" />;
      case "leads": return <Users className="w-5 h-5 text-purple-400" />;
      case "data": return <BarChart3 className="w-5 h-5 text-purple-400" />;
      case "consulting": return <Cpu className="w-5 h-5 text-purple-400" />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.7,
        delay: isLarge ? 0.3 : 0 // Slight delay for larger cards
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900/80 backdrop-blur-sm p-6 flex flex-col",
        isLarge ? "h-[500px]" : "h-[400px]"
      )}
    >
      {renderCardContent()}
      
      <div className="flex items-center mb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
          {getIcon()}
        </div>
        <h3 className="ml-3 text-xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-gray-400 text-sm">{description}</p>
      
      <motion.div 
        className="mt-auto flex items-center justify-between"
        animate={{ opacity: isHovered ? 1 : 0.7 }}
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1"
        >
          Learn more
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};