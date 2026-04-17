import React, { useState } from 'react';
import { Menu, X, MapPin, Mail, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; 
import ESG1 from '../assets/ESG1.png';
import ESG2 from '../assets/ESG2.png';
import ESG3 from '../assets/ESG3.png';
import contactBg from "../assets/contact-bg.jpg";

const ESGReporting: React.FC = () => {
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
    <div className="min-h-screen font-sans text-gray-800 bg-[#f4f9f8]">
      
      {/* ✅ FIXED NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} className="w-16 h-16 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold">C-Tons Solution</h1>
              <p className="text-xs text-gray-500 italic">Passion meets Purpose</p>
            </div>
          </Link>

          {/* ✅ DESKTOP LINKS (FIXED) */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.label}
                  to={l.href}
                  className="text-sm font-medium text-gray-800 hover:text-[#2d5a4c] transition"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium text-gray-800 hover:text-[#2d5a4c] transition"
                >
                  {l.label}
                </a>
              )
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* ✅ MOBILE DROPDOWN */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 pb-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="block text-sm font-medium text-gray-900 py-2"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* SECTION 1 */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2d5a4c] mb-4">
              Build Transparency, Accountability, and Long-Term Sustainability Value
            </h1>
            <p className="text-[#5a8a7a] text-lg">
              We help organizations develop ESG reports aligned with globally recognized sustainability standards.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-[#3d6b5e] rounded-[3rem] p-10 md:p-16 min-h-[400px] shadow-xl w-full md:w-[70%] z-10">
              <h2 className="text-white text-xl font-semibold mb-10 italic">
                Why Choose ESG Reporting With C-Tons Solution?
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-[#a3e635] text-xl font-bold mb-4">Transparent & Accurate Reporting</h3>
                  <p className="text-gray-100">
                    We deliver clear, data-driven ESG reports aligned with global frameworks, enhancing credibility with investors and stakeholders.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#a3e635] text-xl font-bold mb-4">Compliance-Ready & Future Focused</h3>
                  <p className="text-gray-100">
                    We ensure adherence to evolving regulations while building a strong foundation for long term sustainability goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[40%] mt-10 md:mt-0 md:-ml-20 flex justify-center z-20">
              <img 
                src={ESG1} 
                className="w-[320px] md:w-[380px] object-contain rounded-[2.5rem] shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <img src={ESG2} className="w-full rounded-[3rem] shadow-lg mb-12" />

        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-700 text-xl leading-relaxed font-medium">
            C-Tons Solution assists organizations in preparing ESG (Environmental, Social, and Governance) 
            reports aligned with global sustainability frameworks. We help companies transparently 
            communicate their sustainability performance to investors, stakeholders, and regulatory bodies.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-[#2d5a4c] py-24 px-6 mb-20">
        <div className="max-w-6xl mx-auto">

          <p className="text-center text-[#cde7d8] text-lg italic mb-20 max-w-3xl mx-auto">
            ESG reporting is not just compliance, it’s a strategic tool to build trust, drive growth, 
            and showcase your commitment to sustainable excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img 
              src={ESG3} 
              className="w-full rounded-[3rem] shadow-2xl border-4 border-white/20"
            />

            <div className="text-white space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#a3e635]">
                  Why Choose C-Tons Solution
                </h2>

                <ul className="space-y-3">
                  {[
                    'Expertise in global ESG frameworks',
                    'Strategic approach to compliance',
                    'Reliable data management systems',
                    'Long-term advisory support'
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-[#a3e635]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="space-y-3 border-t border-white/20 pt-8">
                {[
                  'Increased transparency and credibility',
                  'Stronger investor confidence',
                  'Improved corporate reputation',
                  'Better alignment with global frameworks'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-[#a3e635]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400 text-sm">
        Copyright 2026 C-Tons Solution
      </footer>
    </div>
  );
};

export default ESGReporting;