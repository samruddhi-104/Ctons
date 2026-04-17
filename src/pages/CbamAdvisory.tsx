import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; 

// ✅ IMPORT YOUR ICON IMAGES
import cbam1 from "../assets/cbam1.png";
import cbam2 from "../assets/cbam2.png";
import cbam3 from "../assets/cbam3.png";

const CBAMAdvisor: React.FC = () => {
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
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
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

      {/* Top Section */}
      <div className="bg-[#2d5a4c] pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
            Smart Solutions for Carbon Border Compliance
          </h1>

          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card title="Comprehensive CBAM Readiness" content="We provide end-to-end support to help businesses understand and prepare for Carbon Border Adjustment Mechanism (CBAM) requirements, ensuring a smooth transition into global carbon regulations." />
            <Card title="Accurate Emissions Reporting" content="We assist in calculating and verifying embedded emissions in your products, ensuring precise CBAM reporting that meets EU standards and avoids penalties." />
            <Card title="Regulatory Compliance Assurance" content="C-Tons ensures adherence to evolving CBAM guidelines and international trade regulations, reducing compliance risks and strengthening your market position." />
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 md:w-2/3 mx-auto">
            <Card title="Tailored Compliance Strategies" content="Our experts design customized compliance roadmaps aligned with your industry and export markets, helping you efficiently manage carbon costs and reporting obligations." />
            <Card title="Continuous Monitoring & Support" content="We offer ongoing advisory and tracking solutions to keep your business updated with regulatory changes and maintain long-term compliance effortlessly." />
          </div>
        </div>
      </div>

      {/* Middle Text */}
      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <p className="text-gray-700 leading-relaxed">
          We provide guidance related to the Carbon Border Adjustment Mechanism (CBAM), helping companies understand reporting requirements and carbon cost implications for exports. Our advisory services ensure organizations remain compliant with international trade-related climate regulations.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto pb-20 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Advantages for Organizations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<img src={cbam1} className="w-14 h-14 object-contain" />}
            title="Hassle-Free CBAM Compliance"
            content="We simplify complex EU regulations, ensuring smooth and stress-free compliance for your exports."
          />
          <BenefitCard 
            icon={<img src={cbam2} className="w-14 h-14 object-contain" />}
            title="Accurate Emissions Calculation"
            content="Get precise measurement of embedded carbon emissions, reducing risk of errors and penalties."
          />
          <BenefitCard 
            icon={<img src={cbam3} className="w-14 h-14 object-contain" />}
            title="Cost Optimization Strategies"
            content="Identify opportunities to reduce carbon costs and improve operational efficiency."
          />
        </div>
      </div>
    </div>
  );
};

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

const BenefitCard = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="bg-[#7fb04d] p-10 rounded-[2rem] flex flex-col items-center text-center text-white h-full transition-transform hover:scale-105">
    <div className="bg-white/20 p-4 rounded-full mb-6 flex justify-center items-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-6">{title}</h3>
    <p className="text-white/90 leading-relaxed">{content}</p>
  </div>
);

export default CBAMAdvisor;