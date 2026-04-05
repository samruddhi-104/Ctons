import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import firstImg from "@/assets/firstcc.png"; // ✅ your image

const CorporateCompanies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* TOP SECTION */}
      <section className="bg-[#eaf4ef] py-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE WITH CURVE EFFECT */}
          <div className="flex justify-center md:justify-start relative">
            
            {/* background curve */}
            <div className="absolute w-[320px] h-[260px] bg-[#0f2f2f] rounded-[40px] -rotate-6 top-4 left-4"></div>

            {/* main image */}
            <img
              src={firstImg}
              alt="Corporate Companies"
              className="relative w-[320px] md:w-[380px] rounded-[30px] shadow-2xl border border-white/20"
            />
          </div>

          {/* TEXT */}
          <div className="bg-[#0f2f2f] text-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Sustainable Energy for Forward Thinking Businesses
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              We help corporate organizations procure and retire I-RECs to demonstrate their commitment to renewable energy consumption and sustainability goals.
            </p>
            <p className="text-sm leading-relaxed">
              C-Tons Solution works closely with businesses to participate in the Indian Carbon Market through project development, registration, and carbon credit advisory.
            </p>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#2f5f56] text-white py-16 px-6 text-center">
        <h3 className="mb-10 text-lg md:text-xl">
          Benefits of Choosing C-Tons Solution for Corporate Companies
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Verified Renewable Energy Procurement",
            "Transparent Certificate Management",
            "Strategic Renewable Energy Planning",
            "Alignment with Global Sustainability Standards",
            "Strengthening Corporate Sustainability Leadership",
            "Supporting the Transition to Clean Energy"
          ].map((title, i) => (
            <div
              key={i}
              className="bg-white text-black p-4 rounded-xl shadow-md hover:scale-105 transition"
            >
              <h4 className="font-semibold text-sm">{title}</h4>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateCompanies;