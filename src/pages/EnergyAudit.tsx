import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; 
import energyaudit from '../assets/energyaudit.png';
import EA2 from '../assets/EA2.png';
import EA3 from '../assets/EA3.png';

const EnergyAudits: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { label: "Home", href: isHome ? "#home" : "/", isRoute: !isHome },
    { label: "About Us", href: "/about", isRoute: true },
    { label: "Services", href: "/services", isRoute: true },
    { label: "Contact Us", href: isHome ? "#contactus" : "/#contactus", isRoute: !isHome },
  ];

  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      
      {/* --- NAVBAR HEADER --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="C-Tons Solution" className="w-16 h-16 rounded-full object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">C-Tons Solution</h1>
              <p className="text-xs text-gray-500 italic">Passion meets Purpose</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              l.isRoute ? (
                <Link key={l.label} to={l.href} className="text-sm font-medium text-gray-800 hover:text-[#2d5a4c] transition-colors underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.href} className="text-sm font-medium text-gray-800 hover:text-[#2d5a4c] transition-colors underline-offset-4 hover:underline">
                  {l.label}
                </a>
              )
            ))}
          </div>

          <button className="md:hidden text-gray-900" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-white border-t px-6 pb-4 space-y-3">
            {links.map((l) => (
              <Link key={l.label} to={l.href} className="block text-sm font-medium text-gray-900 py-2" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* --- SECTION 1: Header & Efficiency Intro --- */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="animate-[fadeInLeft_0.8s_ease-out]">
            <h1 className="text-3xl md:text-5xl font-bold text-[#2d5a4c] mb-8 leading-tight">
              Enhance Energy Efficiency and Reduce Operational Costs
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
              Why choose C-Tons Solution To Optimize Energy Efficiency
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              C-Tons Solution conducts energy assessments to identify inefficiencies in energy consumption across facilities and operations.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our audits provide actionable recommendations that help businesses reduce energy costs, improve efficiency, and lower their environmental impact.
            </p>
          </div>
          
          <div className="flex justify-end mt-10 md:mt-0">
            <img 
              src={energyaudit} 
              alt="Energy Efficiency Graphics" 
              className="w-full max-w-lg rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(45,90,76,0.3)] cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: Benefits --- */}
      <section className="bg-gradient-to-r from-[#a8d5cc] via-[#bde4df] to-[#7db7b5] py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="flex justify-center">
            <img 
              src={EA2} 
              alt="Sustainability Illustration" 
              className="w-full max-w-md rounded-[2.5rem] shadow-2xl border-4 border-white/30 transition-all duration-500 hover:scale-105 hover:rotate-1"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center md:text-left drop-shadow-sm">
              Benefits of Choosing C-Tons Solution
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BenefitBox 
                num="1." 
                text="Lower operational costs through optimized energy use" 
                delay="100ms"
              />
              <BenefitBox 
                num="2." 
                text="Reduced carbon emissions and environmental impact" 
                delay="250ms"
              />
              <BenefitBox 
                num="3." 
                text="Improved productivity through efficient energy systems" 
                delay="400ms"
              />
              <BenefitBox 
                num="4." 
                text="Stronger sustainability performance for organizations" 
                delay="550ms"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: Detailed Insights --- */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d5a4c] mb-3">
            Why Choose C-Tons Solution For Energy Audits
          </h2>
          <p className="text-xl text-[#5a8a7a] font-medium mb-16">
            Sustainable Energy Strategies for Future-Ready Businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-10">
              <InfoBlock title="Comprehensive Energy Assessment" desc="We provide end-to-end energy audit services, analyzing energy consumption across facilities, equipment, and operations to identify inefficiencies and opportunities for optimization." />
              <InfoBlock title="Tailored Energy Efficiency Strategies" desc="Our team develops customized energy-saving solutions aligned with your business operations, integrating efficient technologies and sustainable practices to reduce energy consumption." />
              <InfoBlock title="Compliance with Energy & Sustainability Standards" desc="C-Tons ensures your energy management practices align with recognized standards and sustainability frameworks, supporting regulatory compliance and ESG goals." />
              <InfoBlock title="Expertise You Can Trust" desc="With strong expertise in energy management, we leverage advanced tools and industry insights to deliver practical, cost effective solutions that drive measurable efficiency improvements." />
            </div>

            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
              <img 
                src={EA3} 
                alt="Energy Audit Visual" 
                className="w-full transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUpStagger {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

// --- SUB-COMPONENTS ---

const BenefitBox = ({ num, text, delay }: { num: string; text: string; delay: string }) => (
  <div 
    style={{ 
      animation: `fadeInUpStagger 0.8s ease-out ${delay} both` 
    }}
    className="bg-gradient-to-br from-[#4db34d] to-[#2d8a2d] p-8 rounded-2xl shadow-xl flex flex-col items-center text-center justify-center min-h-[200px] 
               transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:brightness-110 cursor-default border-b-4 border-black/10"
  >
    <span className="text-black text-2xl font-black mb-3">{num}</span>
    <p className="text-white text-lg font-semibold leading-tight">{text}</p>
  </div>
);

const InfoBlock = ({ title, desc }: { title: string; desc: string }) => (
  <div className="group cursor-default">
    <h3 className="text-[#2d5a4c] font-bold mb-4 text-xl leading-tight group-hover:text-[#4db34d] transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600 text-base leading-relaxed">
      {desc}
    </p>
  </div>
);

export default EnergyAudits;