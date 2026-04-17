import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; 
import earthImage from '../assets/earthcm.png';

// ✅ IMPORT YOUR ICONS
import co1 from "../assets/co1.png";
import co2 from "../assets/co2.png";
import co3 from "../assets/co3.png";
import co4 from "../assets/co4.png";
import co5 from "../assets/co5.png";
import co6 from "../assets/co6.png";

const ComplianceMarket: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { label: "Home", href: isHome ? "#home" : "/", isRoute: !isHome },
    { label: "About Us", href: "/about", isRoute: true },
    { label: "Services", href: "/services", isRoute: true },
    { label: "Contact Us", href: isHome ? "#contactus" : "/#contactus", isRoute: !isHome },
  ];

  const features = [
    {
      title: 'Strong Regulatory Expertise',
      description: 'Deep understanding of compliance carbon markets and evolving regulatory frameworks.',
      icon: co1,
    },
    {
      title: 'Accurate Emission Reporting',
      description: 'Ensuring reliable monitoring, reporting, and verification of emissions to meet compliance requirements.',
      icon: co2,
    },
    {
      title: 'Seamless Project Registration',
      description: 'Managing technical documentation and approvals required for compliance carbon credit projects.',
      icon: co3,
    },
    {
      title: 'Risk & Compliance Management',
      description: 'Helping organizations avoid penalties and remain aligned with regulatory obligations.',
      icon: co4,
    },
    {
      title: 'Strategic Carbon Reduction Planning',
      description: 'Supporting businesses in implementing long-term emission reduction strategies.',
      icon: co5,
    },
    {
      title: 'Continuous Advisory Support',
      description: 'Providing ongoing guidance to adapt to changing policies and carbon market regulations.',
      icon: co6,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#d7f1ea] via-[#bde4df] to-[#7db7b5]">
      
      {/* --- NAVBAR HEADER --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="C-Tons Solution" className="w-16 h-16 rounded-full object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                C-Tons Solution
              </h1>
              <p className="text-xs text-gray-500 italic">Passion meets Purpose</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) =>
              l.isRoute ? (
                <Link key={l.label} to={l.href} className="text-sm font-medium text-gray-800 hover:text-[#7db7b5] transition-colors underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.href} className="text-sm font-medium text-gray-800 hover:text-[#7db7b5] transition-colors underline-offset-4 hover:underline">
                  {l.label}
                </a>
              )
            )}
          </div>

          <button className="md:hidden text-gray-900" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4 space-y-3">
            {links.map((l) => (
              <Link key={l.label} to={l.href} className="block text-sm font-medium text-gray-900 py-2" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* --- MAIN PAGE CONTENT --- */}
      <div className="pt-32 pb-20 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          
          {/* Hero Row */}
          <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-2">
            
            <div className="rounded-3xl bg-[#dff1b8] p-10 md:p-16 shadow-lg flex flex-col justify-center">
              <h2 className="mb-6 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Meeting Global Compliance with Confidence
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                For organizations operating under regulatory carbon frameworks, 
                <span className="font-semibold"> C-Tons Solution</span> provides guidance on registering projects with 
                compliance markets where carbon reductions are recognized, measured by law.
              </p>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-700">
                Our experts help navigate regulatory requirements, prepare documentation, and align projects with applicable carbon standards. This ensures companies meet environmental regulations while unlocking the potential value of emission reductions.
              </p>
            </div>

            {/* ✅ EARTH IMAGE (ONLY HOVER EFFECT) */}
            <div className="flex justify-center items-center">
              <img
                src={earthImage}
                alt="Compliance market earth"
                className="w-full max-w-[450px] max-h-[500px] rounded-3xl object-contain shadow-2xl transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white/95 p-10 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center min-h-[320px]"
              >
                {/* ✅ ICON CENTERED + CLEAN */}
                <div className="mb-6 flex justify-center items-center h-20">
                  <img 
                    src={feature.icon} 
                    alt="icon" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceMarket;