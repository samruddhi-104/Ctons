import React from 'react';
import ESG1 from '../assets/ESG1.png';
import ESG2 from '../assets/ESG2.png';
import ESG3 from '../assets/ESG3.png';

const ESGReporting: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-b from-[#e0f2ee] to-white">
      
      {/* SECTION 1: Build Transparency */}
      <section className="max-w-6xl mx-auto pt-16 px-6">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-[#2d5a4c] mb-2">
            Build Transparency, Accountability, and Long-Term Sustainability Value
          </h1>
          <p className="text-[#5a8a7a] font-medium">
            We help organizations develop ESG reports aligned with globally recognized sustainability standards.
          </p>
        </div>

        <div className="relative bg-[#2d5a4c] rounded-[2rem] p-8 md:p-12 md:pr-64 min-h-[350px] flex flex-col justify-center">
          <h2 className="text-white text-lg font-semibold mb-8 italic">
            Why Choose ESG Reporting With C-Tons Solution?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-white font-bold mb-3">Transparent & Accurate Reporting</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                We deliver clear, data-driven ESG reports aligned with global frameworks, 
                enhancing credibility with investors and stakeholders.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Compliance-Ready & Future Focused</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                We ensure adherence to evolving regulations while building a strong 
                foundation for long term sustainability goals.
              </p>
            </div>
          </div>

          {/* Floating Image 1 */}
          <div className="md:absolute md:-right-4 md:top-1/2 md:-translate-y-1/2 mt-8 md:mt-0">
            <img 
              src={ESG1} 
              alt="ESG Digital Concept" 
              className="w-full md:w-[380px] h-[450px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white/10"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Center Banner */}
      <section className="max-w-4xl mx-auto py-24 px-6 text-center">
        <div className="mb-10">
          <img 
            src={ESG2} 
            alt="C-Tons Hands" 
            className="w-full rounded-[2.5rem] shadow-lg mb-10"
          />
        </div>
        <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
          C-Tons Solution assists organizations in preparing ESG (Environmental, Social, and Governance) 
          reports aligned with global sustainability frameworks. We help companies transparently 
          communicate their sustainability performance to investors, stakeholders, and regulatory bodies.
        </p>
      </section>

      {/* SECTION 3: Bottom Green Panel */}
      <section className="bg-[#2d5a4c] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-200 italic mb-16 max-w-2xl mx-auto leading-relaxed">
            ESG reporting is not just compliance it's a strategic tool to build trust, drive growth, 
            and showcase your commitment to sustainable excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={ESG3} 
                alt="CO2 Sphere" 
                className="w-full max-w-md mx-auto rounded-[2.5rem] shadow-xl"
              />
            </div>
            
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-8">Why Choose C-Tons Solution</h2>
              
              <ul className="space-y-4 text-sm md:text-base list-disc list-inside marker:text-[#7fb04d]">
                <li>Expertise in global ESG frameworks and sustainability standards</li>
                <li>Strategic approach to sustainability reporting and compliance</li>
                <li>Reliable data management and performance tracking systems</li>
                <li>Long-term advisory support for continuous ESG improvement</li>
              </ul>

              <ul className="mt-8 space-y-4 text-sm md:text-base list-disc list-inside marker:text-[#7fb04d]">
                <li>Increased transparency and credibility in sustainability reporting</li>
                <li>Stronger investor confidence and stakeholder trust</li>
                <li>Improved corporate reputation and brand value</li>
                <li>Better alignment with global sustainability frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ESGReporting;