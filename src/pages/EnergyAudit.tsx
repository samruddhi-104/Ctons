import React from 'react';
import EA1 from '../assets/EA1.png';
import EA2 from '../assets/EA2.png';
import EA3 from '../assets/EA3.png';

const EnergyAudits: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      
      {/* SECTION 1: Header & Efficiency Intro */}
      <section className="relative overflow-hidden py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2d5a4c] mb-8">
              Enhance Energy Efficiency and Reduce Operational Costs
            </h1>
            
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Why choose C-Tons Solution To Optimize Energy Efficiency
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              C-Tons Solution conducts energy assessments to identify inefficiencies 
              in energy consumption across facilities and operations.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Our audits provide actionable recommendations that help businesses 
              reduce energy costs, improve efficiency, and lower their environmental impact.
            </p>
          </div>
          
          <div className="flex justify-end mt-10 md:mt-0">
            <img 
              src={EA1} 
              alt="Energy Efficiency Graphics" 
              className="w-full max-w-md rounded-2xl shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Benefits (Mint Gradient Background) */}
      <section className="bg-gradient-to-r from-[#a8d5cc] to-[#88c9be] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Illustration Card */}
          <div className="flex justify-center">
            <img 
              src={EA2} 
              alt="Sustainability Illustration" 
              className="w-full max-w-sm rounded-[2rem] shadow-xl border-4 border-white/20"
            />
          </div>

          {/* Benefits Grid */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-10 text-center md:text-left">
              Benefits of Choosing C-Tons Solution
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <BenefitBox 
                num="1." 
                text="Lower operational costs through optimized energy use" 
              />
              <BenefitBox 
                num="2." 
                text="Reduced carbon emissions and environmental impact" 
              />
              <BenefitBox 
                num="3." 
                text="Improved productivity through efficient energy systems" 
              />
              <BenefitBox 
                num="4." 
                text="Stronger sustainability performance for organizations" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Choose Details */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2d5a4c] mb-2">
            Why Choose C-Tons Solution For Energy Audits
          </h2>
          <p className="text-[#5a8a7a] font-medium mb-12">
            Sustainable Energy Strategies for Future-Ready Businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Text Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
              <InfoBlock 
                title="Comprehensive Energy Assessment"
                desc="We provide end-to-end energy audit services, analyzing energy consumption across facilities, equipment, and operations to identify inefficiencies and opportunities for optimization."
              />
              <InfoBlock 
                title="Tailored Energy Efficiency Strategies"
                desc="Our team develops customized energy-saving solutions aligned with your business operations, integrating efficient technologies and sustainable practices to reduce energy consumption."
              />
              <InfoBlock 
                title="Compliance with Energy & Sustainability Standards"
                desc="C-Tons ensures your energy management practices align with recognized standards and sustainability frameworks, supporting regulatory compliance and ESG goals."
              />
              <InfoBlock 
                title="Expertise You Can Trust"
                desc="With strong expertise in energy management, we leverage advanced tools and industry insights to deliver practical, cost effective solutions that drive measurable efficiency improvements."
              />
            </div>

            {/* Bottom Image Container */}
            <div className="relative group">
              <img 
                src={EA3} 
                alt="Energy Audit Visual" 
                className="w-full rounded-[2.5rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-8 right-12">
                <span className="text-white text-3xl font-black tracking-widest opacity-80">
                  ENERGY AUDITS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sub-component for the 4 Benefit boxes
const BenefitBox = ({ num, text }: { num: string; text: string }) => (
  <div className="bg-gradient-to-br from-[#4db34d] to-[#2d8a2d] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center justify-center min-h-[160px]">
    <span className="text-black font-bold mb-2">{num}</span>
    <p className="text-white text-sm font-medium leading-snug">{text}</p>
  </div>
);

// Sub-component for the detailed text sections
const InfoBlock = ({ title, desc }: { title: string; desc: string }) => (
  <div>
    <h3 className="text-[#2d5a4c] font-bold mb-3 text-lg leading-tight">
      {title}
    </h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      {desc}
    </p>
  </div>
);

export default EnergyAudits;