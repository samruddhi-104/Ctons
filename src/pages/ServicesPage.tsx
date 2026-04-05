import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* MAIN SECTION WITH GRID BACKGROUND */}
      <section className="flex-1 relative bg-[#0d1b1b] text-white py-24 px-4 overflow-hidden">
        
        {/* The Grid Overlay from Screenshot 2 */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: `linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)`,
               backgroundSize: '80px 80px' 
             }}>
        </div>

        {/* Subtle radial glow to match the screenshot center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          
          {/* HEADING SECTION */}
          <p className="text-[#7fb04d] font-medium tracking-widest text-sm mb-3 uppercase">How We Help</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">
            Environmental Impact Solutions
          </h2>

          {/* CARDS CONTAINER */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <ServiceCard title="I-REC Registration & Issuance">
              <div className="space-y-5">
                <OptionButton 
                  label="For Project Developers" 
                  bgColor="bg-[#f0fdf4]" 
                  onClick={() => navigate("/developers")} 
                />
                <OptionButton 
                  label="For Corporate Companies" 
                  bgColor="bg-[#c2f3c2]" 
                  onClick={() => navigate("/corporate")} 
                />
              </div>
            </ServiceCard>

            {/* CARD 2 */}
            <ServiceCard title="Carbon Credit Registration">
              <div className="space-y-5">
                <OptionButton 
                  label="For Voluntary Market" 
                  bgColor="bg-[#f0fdf4]" 
                  onClick={() => navigate("/voluntary-market")} 
                />
                <OptionButton 
                  label="For Compliance Market" 
                  bgColor="bg-[#c2f3c2]" 
                  onClick={() => navigate("/compliance-market")} 
                />
              </div>
            </ServiceCard>

            {/* CARD 3 */}
            <ServiceCard title="Voluntary Carbon Market Advisory">
              <div className="grid grid-cols-2 gap-4">
                <OptionButton label="Carbon Footprint Accounting" small bgColor="bg-[#f0fdf4]" onClick={() => navigate("/carbon-footprint")} />
                <OptionButton label="Energy Audit" small bgColor="bg-[#f0fdf4]" onClick={() => navigate("/energy-audit")} />
                <OptionButton label="CBAM Advisory" small bgColor="bg-[#c2f3c2]" onClick={() => navigate("/cbam-advisory")} />
                <OptionButton label="Life Cycle Assessment" small bgColor="bg-[#c2f3c2]" onClick={() => navigate("/life-cycle")} />
                <div className="col-span-2 flex justify-center">
                   <OptionButton label="ECG Reporting" small bgColor="bg-[#f0fdf4]" onClick={() => navigate("/ecg-reporting")} />
                </div>
              </div>
            </ServiceCard>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* --- SUB-COMPONENTS FOR CLEANER CODE --- */

const ServiceCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-[2.5rem] p-10 flex flex-col items-center justify-between min-h-[450px]
                  bg-gradient-to-b from-[#1a3a2a]/90 to-[#0d1b1b]/95 
                  border border-white/10 shadow-2xl backdrop-blur-md">
    <h3 className="text-xl font-semibold mb-8 text-white/90 tracking-wide text-center h-12 flex items-center">
      {title}
    </h3>
    
    <div className="w-full flex-1 flex flex-col justify-center">
      {children}
    </div>

    <button className="mt-10 bg-[#1a3a2a] border border-[#7fb04d]/30 text-[#c2f3c2] px-8 py-2.5 rounded-full text-xs font-bold hover:bg-[#7fb04d] hover:text-black transition-all">
      Learn More
    </button>
  </div>
);

const OptionButton = ({ label, bgColor, onClick, small }: { label: string; bgColor: string; onClick: () => void; small?: boolean }) => (
  <div
    onClick={onClick}
    className={`${bgColor} ${small ? 'text-[11px] py-3 px-2' : 'text-sm py-4'} 
    text-black font-bold rounded-2xl cursor-pointer hover:scale-[1.03] transition-transform 
    shadow-lg flex items-center justify-center text-center leading-tight min-h-[50px] w-full`}
  >
    {label}
  </div>
);

export default ServicesPage;