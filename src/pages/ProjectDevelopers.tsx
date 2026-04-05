import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboveImg from "@/assets/above.png";   // ✅ your image 1
import belowImg from "@/assets/below.png";   // ✅ your image 2

const ProjectDevelopers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* TOP SECTION */}
      <section className="bg-[#0f2f2f] text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Empowering Renewable Energy Projects
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              C-Tons Solution assists renewable energy project developers in registering their projects under the International Renewable Energy Certificate (I-REC) system. Our team guides developers through the complete process, including eligibility assessment, documentation preparation, and coordination with the issuing body.
            </p>
            <p className="text-sm leading-relaxed">
              Once the project is registered, we facilitate the issuance of renewable energy certificates based on verified electricity generation.
            </p>
          </div>

          {/* IMAGE WITH CURVE + OVERLAP */}
          <div className="flex justify-center md:justify-end relative">
            
            {/* curved background effect */}
            <div className="absolute w-[320px] h-[260px] bg-green-800 rounded-[40px] rotate-6 top-4 right-4"></div>

            {/* main image */}
            <img
              src={belowImg}
              alt="Project Developers"
              className="relative w-[320px] md:w-[380px] rounded-[30px] shadow-2xl border border-white/20"
            />
          </div>

        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-[#eaf4ef] py-16 px-6 text-center">
        <h3 className="text-lg mb-6">
          Transforming renewable energy generation into globally recognized green energy certificates.
        </h3>

        {/* IMAGE */}
        <div className="flex justify-center mb-8">
          <img
            src={aboveImg}
            alt="Process"
            className="w-[220px] md:w-[260px] rounded-2xl shadow-lg"
          />
        </div>

        {/* POINTS */}
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
              className="bg-white py-3 px-4 rounded-full shadow-md hover:scale-105 transition"
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