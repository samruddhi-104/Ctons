import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

import earthImg from "@/assets/earth-green.png";
import about1 from "@/assets/about1.png";

import ah1 from "@/assets/ah1.png";
import ah2 from "@/assets/ah2.png";
import ah4 from "@/assets/ah4.png";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation();

  const handleImgError = (e: any) => {
    e.currentTarget.src =
      "https://via.placeholder.com/150?text=Image+Missing";
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-24 pb-12 bg-white text-center">
        <div className="section-padding max-w-4xl mx-auto animate-fade-up">
          <h2 className="text-xl md:text-3xl font-heading font-semibold text-green-700 italic mb-4">
            A Sustainable Future Begins Today
          </h2>
          <p className="text-lg md:text-2xl font-heading font-bold text-gray-900 leading-snug">
            Lead the Change.<br />
            We Enable Responsible Climate Action.
          </p>
        </div>
      </section>

      {/* About Hero */}
      <section ref={heroRef} className="bg-green-900">
        <div
          className={`max-w-6xl mx-auto grid md:grid-cols-2 transition-all duration-700 ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <p className="text-white/60 text-sm uppercase tracking-widest mb-4">
              About us
            </p>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5">
              Transforming Carbon into Opportunity
            </h2>

            {/* FIXED TEXT (no highlight issue) */}
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-5">
              C-Tons Solution is committed to advancing climate responsibility through trusted carbon market solutions. 
              We support renewable energy generators and businesses in unlocking the value of carbon credits and I-RECs 
              while maintaining transparency, integrity, and measurable impact. Our goal is to simplify complex carbon 
              processes and help organizations move confidently toward their sustainability commitments.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-5">
              <img
                src={about1}
                alt="Eco"
                className="w-44 h-44 object-cover rounded-2xl"
                onError={handleImgError}
              />

              {/* CLEAN STYLE INSTEAD OF BLUE BLOCK */}
              <p className="text-white/80 text-lg md:text-xl italic leading-relaxed border-l-4 border-green-400 pl-4">
                We are dedicated to helping our clients reduce their environmental impact 
                and create a more sustainable future.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center p-6 md:p-10">
            <img
              src={earthImg}
              alt="Earth"
              className="w-full max-w-lg rounded-2xl object-cover"
              onError={handleImgError}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-green-900/95">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[180px_1fr] gap-10 px-4 md:px-8">
          
          {/* Side Image */}
          <div className="hidden md:flex justify-center">
            <img
              src={ah4}
              alt="C-Tons"
              className="h-[120vh] w-auto object-contain sticky top-0 scale-150"
              onError={handleImgError}
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white text-center mb-20">
              Leading the Path Toward a Cleaner, Greener Tomorrow
            </h2>

            {/* Mission */}
            <div
              ref={missionRef}
              className={`grid md:grid-cols-2 gap-12 mb-24 transition-all duration-700 ${
                missionVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-heading font-bold text-white mb-6 text-center">
                  Our Mission
                </h3>

                <ol className="text-white/90 text-base space-y-4 list-decimal list-inside">
                  <li>To provide single source sustainability solutions.</li>
                  <li>To foster sustainability through collaboration.</li>
                  <li>To support Paris Agreement objectives.</li>
                  <li>To promote sustainable practices across industries.</li>
                  <li>To leverage technology for impactful climate solutions.</li>
                </ol>
              </div>

              <img
                src={ah1}
                alt="Mission"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                onError={handleImgError}
              />
            </div>

            {/* Vision */}
            <div
              ref={visionRef}
              className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${
                visionVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <img
                src={ah2}
                alt="Vision"
                className="w-full h-full object-cover rounded-2xl shadow-lg order-last md:order-first"
                onError={handleImgError}
              />

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-heading font-bold text-white mb-6 text-center">
                  Our Vision
                </h3>

                <ol className="text-white/90 text-base space-y-4 list-decimal list-inside">
                  <li>To lead in the voluntary carbon market.</li>
                  <li>To enable carbon neutrality for businesses.</li>
                  <li>To contribute to global climate goals.</li>
                  <li>To innovate in carbon management systems.</li>
                  <li>To make sustainability a global business standard.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;