import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboveImg from "@/assets/above.png";
import belowImg from "@/assets/below.png";

const ProjectDevelopers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* TOP SECTION */}
      {/* ✅ FIX: added mt-20 to push content below fixed header */}
      <section className="bg-[#0f2f2f] text-white mt-20 pt-10 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Empowering Renewable Energy Projects
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-5 text-white/90">
              C-Tons Solution assists renewable energy project developers in registering their projects under the International Renewable Energy Certificate (I-REC) system. Our team guides developers through the complete process, including eligibility assessment, documentation preparation, and coordination with the issuing body. Once the project is registered, we facilitate the issuance of renewable energy certificates based on verified electricity generation. 
            </p>

            <p className="text-base md:text-lg leading-relaxed text-white/90">
              This enables project developers to monetize their renewable energy production while contributing to global clean energy adoption.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end relative">
            <div className="absolute w-[380px] h-[300px] bg-green-800/40 rounded-[40px] blur-2xl"></div>

            <img
              src={belowImg}
              alt="Project Developers"
              className="relative w-[380px] md:w-[460px] object-contain rounded-[30px] shadow-2xl border border-white/20"
            />
          </div>

        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-[#eaf4ef] py-20 px-6 text-center">
        
        <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-gray-800 leading-snug">
          Transforming renewable energy generation into globally recognized green energy certificates.
        </h3>

        <div className="flex justify-center mb-12">
          <img
            src={aboveImg}
            alt="Process"
            className="w-[320px] md:w-[500px] object-contain rounded-2xl shadow-xl"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            "We evaluate renewable energy projects to determine their eligibility for I-REC certification based on international standards.",
            "We coordinate with I-REC registries to ensure accurate issuance of renewable energy certificates.",
            "Developers can monetize their renewable energy production by trading I-RECs in global markets.",
            "Our experts ensure that projects comply with all international renewable energy certification requirements.",
            "We guide developers on how to strategically position their certificates in the renewable energy market."
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white py-4 px-6 rounded-full shadow-md hover:scale-105 transition text-sm md:text-base"
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDevelopers;