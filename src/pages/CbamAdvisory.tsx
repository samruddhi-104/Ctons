import React from 'react';
import { ShieldCheck, Calculator, TrendingDown } from 'lucide-react';

const CBAMAdvisor: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Top Section */}
      <div className="bg-[#2d5a4c] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
            Smart Solutions for Carbon Border Compliance
          </h1>

          {/* Top Grid: 3-2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card 
              title="Comprehensive CBAM Readiness"
              content="We provide end-to-end support to help businesses understand and prepare for Carbon Border Adjustment Mechanism (CBAM) requirements, ensuring a smooth transition into global carbon regulations."
            />
            <Card 
              title="Accurate Emissions Reporting"
              content="We assist in calculating and verifying embedded emissions in your products, ensuring precise CBAM reporting that meets EU standards and avoids penalties."
            />
            <Card 
              title="Regulatory Compliance Assurance"
              content="C-Tons ensures adherence to evolving CBAM guidelines and international trade regulations, reducing compliance risks and strengthening your market position."
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 md:w-2/3 mx-auto">
            <Card 
              title="Tailored Compliance Strategies"
              content="Our experts design customized compliance roadmaps aligned with your industry and export markets, helping you efficiently manage carbon costs and reporting obligations."
            />
            <Card 
              title="Continuous Monitoring & Support"
              content="We offer ongoing advisory and tracking solutions to keep your business updated with regulatory changes and maintain long-term compliance effortlessly."
            />
          </div>
        </div>
      </div>

      {/* Middle Text Section */}
      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <p className="text-gray-700 leading-relaxed">
          We provide guidance related to the Carbon Border Adjustment Mechanism (CBAM), 
          helping companies understand reporting requirements and carbon cost implications 
          for exports. Our advisory services ensure organizations remain compliant with 
          international trade-related climate regulations.
        </p>
      </div>

      {/* Bottom Section: Advantages */}
      <div className="max-w-6xl mx-auto pb-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Advantages for Organizations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<ShieldCheck size={48} className="text-[#2d5a4c] mb-4" />}
            title="Hassle-Free CBAM Compliance"
            content="We simplify complex EU regulations, ensuring smooth and stress-free compliance for your exports."
          />
          <BenefitCard 
            icon={<Calculator size={48} className="text-[#2d5a4c] mb-4" />}
            title="Accurate Emissions Calculation"
            content="Get precise measurement of embedded carbon emissions, reducing risk of errors and penalties."
          />
          <BenefitCard 
            icon={<TrendingDown size={48} className="text-[#2d5a4c] mb-4" />}
            title="Cost Optimization Strategies"
            content="Identify opportunities to reduce carbon costs and improve operational efficiency."
          />
        </div>
      </div>
    </div>
  );
};

// Reusable component for the white cards in the top section
const Card = ({ title, content }: { title: string; content: string }) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-lg flex flex-col h-full">
    <h3 className="text-lg font-bold text-[#2d5a4c] text-center mb-4 min-h-[3rem] flex items-center justify-center">
      {title}
    </h3>
    <p className="text-sm text-gray-600 text-center leading-relaxed">
      {content}
    </p>
  </div>
);

// Reusable component for the green cards in the bottom section
const BenefitCard = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="bg-[#7fb04d] p-10 rounded-[2rem] flex flex-col items-center text-center text-white h-full transition-transform hover:scale-105">
    <div className="bg-white/20 p-4 rounded-full mb-6">
      {/* Fallback to simple icons if Lucide is not installed */}
      <div className="text-white brightness-200 contrast-200">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-6">
      {title}
    </h3>
    <p className="text-white/90 leading-relaxed">
      {content}
    </p>
  </div>
);

export default CBAMAdvisor;