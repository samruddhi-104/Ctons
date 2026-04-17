import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* MAIN SECTION */}
      <section className="flex-1 relative bg-[#0d1b1b] text-white pt-36 pb-24 px-4 overflow-hidden">
        
        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* RADIAL GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10 mt-10">
          
          {/* HEADER */}
          <p className="text-[#7fb04d] font-medium tracking-widest text-sm mb-8 uppercase">
            How We Help
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-24 tracking-tight">
            Environmental Impact Solutions
          </h2>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="animate-fadeUp delay-100">
              <ServiceCard title="I-REC Registration & Issuance">
                <div className="space-y-4">
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
            </div>

            {/* CARD 2 */}
            <div className="animate-fadeUp delay-200">
              <ServiceCard title="Carbon Credit Registration">
                <div className="space-y-4">
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
            </div>

            {/* CARD 3 */}
            <div className="animate-fadeUp delay-300">
              <ServiceCard title="Voluntary Carbon Market Advisory">
                <div className="grid grid-cols-2 gap-3">
                  <OptionButton
                    label="Carbon Footprint Accounting"
                    small
                    bgColor="bg-[#f0fdf4]"
                    onClick={() => navigate("/carbon-footprint")}
                  />
                  <OptionButton
                    label="Energy Audit"
                    small
                    bgColor="bg-[#f0fdf4]"
                    onClick={() => navigate("/energy-audit")}
                  />
                  <OptionButton
                    label="CBAM Advisory"
                    small
                    bgColor="bg-[#c2f3c2]"
                    onClick={() => navigate("/cbam-advisory")}
                  />
                  <OptionButton
                    label="Life Cycle Assessment"
                    small
                    bgColor="bg-[#c2f3c2]"
                    onClick={() => navigate("/life-cycle")}
                  />
                  <div className="col-span-2">
                    <OptionButton
                      label="ECG Reporting"
                      small
                      bgColor="bg-[#f0fdf4]"
                      onClick={() => navigate("/ecg-reporting")}
                    />
                  </div>
                </div>
              </ServiceCard>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* ---------------- COMPONENTS ---------------- */

const ServiceCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div
    className="
    rounded-[2.5rem] p-10 flex flex-col items-center justify-between min-h-[450px]
    bg-gradient-to-b from-[#1a3a2a]/90 to-[#0d1b1b]/95 
    border border-white/10 shadow-2xl backdrop-blur-md

    transform transition-all duration-500 ease-out
    hover:-translate-y-4 hover:scale-[1.02]
    hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)]
  "
  >
    <h3 className="text-xl font-semibold mb-8 text-white/90 tracking-wide text-center h-12 flex items-center">
      {title}
    </h3>

    <div className="w-full flex-1 flex flex-col justify-center">
      {children}
    </div>
  </div>
);

const OptionButton = ({
  label,
  bgColor,
  onClick,
  small,
}: {
  label: string;
  bgColor: string;
  onClick: () => void;
  small?: boolean;
}) => (
  <div
    onClick={onClick}
    className={`
      ${bgColor}
      ${small ? "text-xs py-3 px-3" : "text-sm py-4 px-4"}
      text-black font-semibold
      rounded-xl cursor-pointer

      flex items-center justify-center text-center
      leading-snug w-full min-h-[48px]

      transition-all duration-300 ease-out
      hover:scale-105
      hover:shadow-xl
      hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]
    `}
  >
    {label}
  </div>
);

export default ServicesPage;