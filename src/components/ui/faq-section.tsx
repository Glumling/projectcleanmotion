"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-gray-900/80 backdrop-blur-sm p-5 rounded-2xl text-left border border-white/10 hover:border-purple-500/30 transition-colors"
      >
        <span className="text-white font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 bg-gray-900/50 backdrop-blur-sm rounded-b-2xl border-x border-b border-white/10 text-gray-300 text-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQSection = () => {
  const faqs = [
    {
      question: "What are AI development services?",
      answer: "At their core, Artificial Intelligence (AI) development services revolve around designing and tailoring artificial intelligence solutions to meet specific business needs. It's akin to architects and builders coming together; while the fundamental principles remain consistent, the final outcome is custom-built to fit an individual's requirements. So, when we discuss AI development, we're delving into specialized domains—like machine learning, natural language processing, or computer vision—each designed to address unique challenges in analytics, communication, or data interpretation."
    },
    {
      question: "What types of processes can be automated using AI?",
      answer: "AI can automate a wide range of tasks, from data entry and customer support to decision-making and workflow optimization. We tailor solutions based on your business needs, whether it's automating routine operations or more complex tasks."
    },
    {
      question: "How long does it take to implement AI automation?",
      answer: "The timeline varies depending on the complexity of your business needs. On average, it takes a few weeks for smaller projects, while more complex implementations can take several months. We'll provide a detailed timeline during our consultation."
    },
    {
      question: "Will AI automation disrupt my current operations?",
      answer: "We aim to minimize any disruption to your business. Our team works closely with you to ensure the integration is seamless, and we handle the entire process, including testing and troubleshooting, to avoid downtime."
    },
    {
      question: "How much does AI automation cost?",
      answer: "The cost depends on the complexity of the solution and the scope of automation required. We offer flexible pricing options tailored to your business needs, which will be discussed during the initial consultation."
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative py-20">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-gray-800 text-gray-200 mb-4">
            FAQs
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">We're here to help</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">FAQs designed to provide the information you need.</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};