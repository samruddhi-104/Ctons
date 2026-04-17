import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import firstImg from "@/assets/firstcc.png";

const CorporateCompanies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* TOP SECTION */}
      <section className="bg-[#eaf4ef] mt-20 py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start relative">
            <div className="relative group">
              <img
                src={firstImg}
                alt="Corporate Companies"
                className="
                  w-[360px] md:w-[450px] 
                  object-contain 
                  rounded-[30px] 
                  shadow-xl
                  transition-all duration-300 ease-out
                  group-hover:scale-105
                  group-hover:-translate-y-2
                "
              />
            </div>
          </div>

          {/* TEXT BOX */}
          <div className="bg-[#0f2f2f] text-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-snug">
              Sustainable Energy for Forward Thinking Businesses
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-4 text-white/90">
              We help corporate organizations procure and retire I-RECs to demonstrate their commitment to renewable energy consumption and sustainability goals. Through verified certificates, companies can transparently claim their renewable electricity usage even when connected to a conventional power grid. 

              C-Tons Solution works closely with businesses to participate in the Indian Carbon Market through project development, registration, and carbon credit advisory. 

              C-Tons Solution ensures the entire process—from sourcing the certificates to retirement—is handled in compliance with international standards, helping businesses strengthen their ESG and sustainability reporting.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-white/90">
              C-Tons Solution works closely with businesses to participate in the Indian Carbon Market through project development, registration, and carbon credit advisory.
            </p>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#2f5f56] text-white py-20 px-6 text-center">
        
        <h3 className="mb-12 text-2xl md:text-3xl font-semibold">
          Benefits of Choosing C-Tons Solution for Corporate Companies
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Verified Renewable Energy Procurement",
              desc: "C-Tons Solution helps organizations procure certified renewable energy through I-RECs, enabling businesses to confidently claim renewable energy usage while supporting global clean energy development."
            },
            {
              title: "Transparent Certificate Management",
              desc: "We ensure complete transparency in the tracking, issuance, and retirement of renewable energy certificates, helping organizations maintain accurate sustainability and ESG records."
            },
            {
              title: "Strategic Renewable Energy Planning",
              desc: "Our experts design customized renewable energy procurement strategies aligned with your company’s sustainability goals and long-term environmental commitments."
            },
            {
              title: "Alignment with Global Sustainability Standards",
              desc: "C-Tons Solution ensures your renewable energy initiatives align with international sustainability frameworks, strengthening credibility in ESG reporting and corporate responsibility."
            },
            {
              title: "Strengthening Corporate Sustainability Leadership",
              desc: "Adopting renewable energy solutions demonstrates your organization’s commitment to climate action, enhancing your reputation among investors, partners, and stakeholders."
            },
            {
              title: "Supporting the Transition to Clean Energy",
              desc: "By partnering with C-Tons Solution, your business actively contributes to the global shift toward renewable energy and a low-carbon economy."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white text-black 
                py-6 px-6 
                rounded-2xl 
                shadow-lg 
                hover:scale-105 transition-all duration-300
              "
            >
              <h4 className="font-semibold text-base md:text-lg mb-3">
                {item.title}
              </h4>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateCompanies;