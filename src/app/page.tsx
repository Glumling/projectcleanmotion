"use client";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight-new";
import Button from "@/components/Button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HomeIcon, UserIcon, BriefcaseIcon, FileTextIcon } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProcessCard } from "@/components/ui/process-card";
import { ServiceCard } from "@/components/ui/service-card";
import { TrendingDown, Target, Zap } from "lucide-react";
import { BenefitCard } from "@/components/ui/benefit-card";
// Add this import at the top with your other imports
import { MobileMenu } from "@/components/ui/mobile-menu";
// Add this import at the top with your other imports
import { PricingCard } from "@/components/ui/pricing-card";
// Add this import at the top with your other imports
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactSection } from "@/components/ui/contact-section";
// Add these imports at the top with your other imports
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";

export default function HomePage() {
  // Navigation items for the navbar
  const navItems = [
    { name: 'Home', url: '#hero', icon: HomeIcon },
    { name: 'About', url: '#about', icon: UserIcon },
    { name: 'Process', url: '#process', icon: BriefcaseIcon },
    { name: 'Services', url: '#services', icon: FileTextIcon },
    { name: 'Benefits', url: '#benefits', icon: Target },
    { name: 'Plans', url: '#plans', icon: FileTextIcon },
    { name: 'Testimonials', url: '#testimonials', icon: UserIcon },
    { name: 'FAQs', url: '#faqs', icon: FileTextIcon },
    { name: 'Contact', url: '#contact', icon: FileTextIcon },
  ];
  


  
  // Sample logos for the infinite carousel
  const logos = [
    { logo: "/logos/logo1.png", alt: "Logo 1" },
    { logo: "/logos/logo2.png", alt: "Logo 2" },
    { logo: "/logos/logo3.png", alt: "Logo 3" },
  ];

  // State to track if the about section is visible
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  
  // Add state for pricing toggle
  const [isAnnual, setIsAnnual] = useState(true);

  // Set up intersection observer for the about section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay to ensure the section is fully visible
          setTimeout(() => {
            setAboutVisible(true);
          }, 300);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.5, // Increase threshold to trigger when more of the element is visible
        rootMargin: "-50px 0px" // Only trigger when element is 50px into the viewport
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Add this useEffect to fix the pointer events issue
  // Replace your current useEffect for pointer events with this one
  useEffect(() => {
  // More targeted fix for pointer events
  const style = document.createElement('style');
  style.innerHTML = `
    .interactive-element {
      position: relative;
      z-index: 50;
    }
    
    button, a, input, select, textarea {
      position: relative;
      z-index: 50 !important;
    }
    
    .spotlight-container {
      pointer-events: none !important;
      z-index: 1;
    }
  `;
  document.head.appendChild(style);
  
  // Add interactive-element class to all buttons and links
  setTimeout(() => {
    const buttons = document.querySelectorAll('button');
    const links = document.querySelectorAll('a');
    
    buttons.forEach(button => {
      button.classList.add('interactive-element');
    });
    
    links.forEach(link => {
      link.classList.add('interactive-element');
    });
  }, 1000);
  
  return () => {
    document.head.removeChild(style);
  };
}, []);

  return (
    <div className="flex flex-col min-h-screen relative z-[101]">
      {/* Desktop Navbar - hide on mobile */}
      <div className="hidden md:block">
        <NavBar items={navItems} />
      </div>
      
      {/* Mobile Menu - show only on mobile */}
      <MobileMenu items={navItems} />
      
      
      {/* Hero Section - updated with reduced height and better spacing */}
      <div 
        id="hero"
        className="min-h-[85vh] w-full flex flex-col justify-center bg-black/[0.96] relative overflow-hidden"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255,255,255,0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
          backgroundSize: "32px 32px"
        }}
      >
        {/* Spotlight with fixed positioning */}
        <div className="absolute inset-0 z-0">
          <Spotlight />
        </div>
        
        {/* Content with better spacing for mobile */}
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full mt-16 md:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight"
          >
            Transforming workflows with<br className="hidden sm:block" /> AI powered automations
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 font-normal text-base sm:text-lg text-neutral-300 max-w-2xl text-center mx-auto"
          >
            Experience the future of business with intelligent, scalable automation solutions tailored to your needs
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center"
          >
            <Button text="Our Services" />
            <Button 
              text="See Plans" 
              className="bg-gradient-to-b from-purple-500 to-purple-600 shadow-[0px_4px_32px_0_rgba(168,85,247,.70)]" 
            />
          </motion.div>
          
          {/* Logo Carousel moved directly below buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-12 w-full"
          >
            <InfiniteMovingCards items={logos} direction="left" speed="fast" />
          </motion.div>
        </div>
      </div>

      {/* Add spacer div to create more separation */}
      <div className="h-24 bg-black"></div>

      {/* About Section with Text Generate Effect */}
      <div 
        id="about"
        ref={aboutRef}
        className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-black relative py-20"
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-gray-800 text-gray-200 mb-8">
            Who We Are
          </div>
          
          {aboutVisible && (
            <TextGenerateEffect
              words="We are Radison, we help founders like you to automate their day to day business operations with the help of AI"
              className="text-5xl md:text-7xl lg:text-5xl max-w-5xl mx-auto font-bold"
              duration={0.3}
            />
          )}
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative py-20">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-gray-800 text-gray-200 mb-4">
              Process
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Your path to excellence</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">A simple, effective approach to deliver excellence.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessCard
              title="Discovery & Analysis"
              description="We dive deep into your needs, exploring ideas and defining strategies for long-term success."
              icon={
                <div className="relative w-8 h-8">
                  <Image src="/icons/discovery.svg" alt="Discovery" fill className="text-purple-500" />
                </div>
              }
              index={0}
            />
            <ProcessCard
              title="Development & Test"
              description="We craft tailored solutions for your goals and rigorously test them for top-notch reliability."
              icon={
                <div className="relative w-8 h-8">
                  <Image src="/icons/development.svg" alt="Development" fill className="text-purple-500" />
                </div>
              }
              index={1}
            />
            <ProcessCard
              title="Launch & Maintain"
              description="We deploy your solution seamlessly and ensure its continued performance with ongoing care."
              icon={
                <div className="relative w-8 h-8">
                  <Image src="/icons/launch.svg" alt="Launch" fill className="text-purple-500" />
                </div>
              }
              index={2}
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative py-20">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-gray-800 text-gray-200 mb-4">
              Services
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Innovative services for growth</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Tailored solutions to streamline, innovate, and grow.</p>
          </motion.div>
          
          {/* First row with 3 cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <ServiceCard 
              title="Business Chatbot"
              description="Enhance customer interactions by automating responses with intelligent chatbots, providing seamless service."
              index={0}
              type="chatbot"
            />
            <ServiceCard 
              title="Content Creation"
              description="Effortlessly generate high-quality, engaging content tailored to your audience using AI-powered tools."
              index={1}
              type="content"
            />
            <ServiceCard 
              title="Lead Generation"
              description="Strengthen your sales pipeline by identifying, targeting, and attracting high-quality prospects with precision."
              index={2}
              type="leads"
            />
          </motion.div>
          
          {/* Second row with 2 larger cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <ServiceCard 
              title="Data Insights"
              description="Extract actionable insights from complex data sets to drive informed decisions and accelerate business growth."
              index={3}
              type="data"
              isLarge={true}
            />
            <ServiceCard 
              title="AI Consulting"
              description="Strategic guidance to implement AI solutions that align with your business goals and maximize ROI."
              index={4}
              type="consulting"
              isLarge={true}
            />
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative py-20">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-gray-800 text-gray-200 mb-4">
              Benefits
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Maximize efficiency and impact</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Discover the key benefits of partnering with us.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <BenefitCard 
              title="Cost reduction"
              description="Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency."
              index={0}
              icon={<TrendingDown className="w-5 h-5 text-purple-400" />}
            />
            <BenefitCard 
              title="Improved outcomes"
              description="Leverage powerful data-driven insights and innovative strategies to enhance business performance and achieve superior outcomes."
              index={1}
              icon={<Target className="w-5 h-5 text-purple-400" />}
            />
            <BenefitCard 
              title="Increased productivity"
              description="Enhance group performance and output by automating redundant tasks, refining processes, and speeding up business functions."
              index={2}
              icon={<Zap className="w-5 h-5 text-purple-400" />}
            />
          </motion.div>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div id="plans" className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative py-20">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-gray-800 text-gray-200 mb-4">
              Plans
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Flexible plans for growth</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Transparent pricing designed to fit your requirements.</p>
          </motion.div>
          
          {/* Billing toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 p-1 rounded-full flex">
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium ${isAnnual ? 'bg-indigo-600 text-white' : 'text-gray-400'}`}
                onClick={() => setIsAnnual(true)}
              >
                Annually
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium ${!isAnnual ? 'bg-indigo-600 text-white' : 'text-gray-400'}`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <PricingCard 
              title="Basic"
              price={`${isAnnual ? "$480" : "$600"}/month`}
              description="Essential tools and features for starting your journey with ease."
              features={[
                "Basic workflow automation",
                "Basic chatbot development",
                "60 content request",
                "E-mail support",
                "1 consultation a month"
              ]}
              index={0}
              buttonText="Go with this plan"
            />
            <PricingCard 
              title="Professional"
              price={`${isAnnual ? "$960" : "$1200"}/month`}
              description="Advanced capabilities designed to meet growing business needs."
              features={[
                "Advance workflow automation",
                "Advance chatbot development",
                "150 content request",
                "E-mail support",
                "2 consultation a month"
              ]}
              index={1}
              buttonText="Go with this plan"
            />
            <PricingCard 
              title="Enterprises"
              price="Custom"
              description="Comprehensive solutions tailored for large-scale business success."
              features={[
                "Custom workflow automation",
                "Custom chatbot development",
                "Unlimited content request",
                "24hr priority support",
                "Unlimited consultation a month"
              ]}
              index={2}
              buttonText="Schedule a call"
              isCustom={true}
            />
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative py-20">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-gray-800 text-gray-200 mb-4">
                Testimonials
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Trusted by satisfied clients</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Discover how we've driven growth and innovation.</p>
            </motion.div>
            
            {/* First row of testimonials */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            >
              <TestimonialCard 
                quote="Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!"
                name="Dean Watson"
                position="Managing director"
                company="Farmland"
                index={0}
              />
              <TestimonialCard 
                quote="Radison provided game-changing insights that helped us optimize processes and scale operations fast."
                name="Emily Zhang"
                position="CEO"
                company="Futuresync"
                index={1}
              />
              <TestimonialCard 
                quote="Radison's AI tools revolutionized how we work, saving time and driving our productivity forward."
                name="James Carter"
                position="Marketing director"
                company="Innolystic"
                index={2}
              />
            </motion.div>
            
            {/* Second row of testimonials */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <TestimonialCard 
                quote="Working with Radison has been seamless. Their solutions are both innovative and highly effective."
                name="Liam Walker"
                position="Product manager"
                company="Brightpath"
                index={3}
              />
              <TestimonialCard 
                quote="Thanks to Radison, we've achieved incredible growth by automating tasks and improving accuracy."
                name="Miguel Torres"
                position="IT consultant"
                company="Alphaedge"
                index={4}
              />
              <TestimonialCard 
                quote="The team at Radison delivered outstanding results, improving our efficiency beyond what we imagined!"
                name="Priya Sharma"
                position="Founder"
                company="NexGen"
                index={5}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faqs">
        <FAQSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Remove the old footer */}
      </div>
        );
      }
