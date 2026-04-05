import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import earthImg from "@/assets/earth-green.png";
import lightbulbImg from "@/assets/lightbulb-eco.png";
import handshakeImg from "@/assets/handshake.jpg";
import greenHandsImg from "@/assets/green-hands.jpg";
import logo from "@/assets/logo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-24 pb-12 bg-background text-center">
        <div className="section-padding max-w-4xl mx-auto animate-fade-up">
          <h2 className="text-xl md:text-2xl font-heading font-semibold text-primary italic mb-3">
            A Sustainable Future Begins Today
          </h2>
          <p className="text-lg md:text-2xl font-heading font-bold text-foreground leading-snug">
            Lead the Change.<br />
            We Enable Responsible Climate Action.
          </p>
        </div>
      </section>

      {/* About Hero - dark green split */}
      <section ref={heroRef} className="bg-green-dark">
        <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-0 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Left text */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <p className="text-primary text-xs uppercase tracking-widest mb-2">About us</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Transforming Carbon into Opportunity
            </h2>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              C-Tons Solution is committed to advancing climate responsibility through trusted carbon market solutions. We support renewable energy generators and businesses in unlocking the value of carbon credits and I-RECs while maintaining transparency, integrity, and measurable impact. Our goal is to simplify complex carbon processes and help organizations move confidently toward their sustainability commitments.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <img
                src={lightbulbImg}
                alt="Eco solutions"
                className="w-40 h-40 object-cover rounded-2xl"
                loading="lazy"
              />
              <p className="text-primary-foreground/90 text-sm italic leading-relaxed self-center">
                We are dedicated to helping our clients reduce their environmental impact and create a more sustainable future.
              </p>
            </div>
          </div>
          {/* Right image */}
          <div className="flex items-center justify-center p-4 md:p-8">
            <img
              src={earthImg}
              alt="Green earth"
              className="w-full max-w-md rounded-2xl object-cover"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-green-dark/95 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0v40M0 20h40\' stroke=\'%23ffffff\' stroke-width=\'.5\' fill=\'none\'/%3E%3C/svg%3E")' }} />

        <div className="section-padding max-w-6xl mx-auto relative z-10">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-primary italic text-center mb-16">
            Leading the Path Toward a Cleaner, Greener Tomorrow
          </h2>

          {/* Mission */}
          <div ref={missionRef} className={`grid md:grid-cols-2 gap-10 items-center mb-20 transition-all duration-700 ${missionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-heading font-bold text-primary-foreground mb-4 uppercase tracking-wide text-center">
                Our Mission
              </h3>
              <ol className="text-primary-foreground/80 text-sm leading-relaxed space-y-3 list-decimal list-inside">
                <li>To provide single source to companies that demands based sustainability solutions.</li>
                <li>To foster the sustainability through collaborative efforts.</li>
                <li>To collaborate with companies that need to participate in meeting the objectives of Paris agreement with integrity & accountability.</li>
              </ol>
            </div>
            <div className="flex justify-center">
              <img
                src={handshakeImg}
                alt="Partnership handshake"
                className="w-full max-w-sm rounded-2xl object-cover shadow-lg"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>

          {/* Vision */}
          <div ref={visionRef} className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-700 ${visionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="flex justify-center order-last md:order-first">
              <img
                src={greenHandsImg}
                alt="Green energy"
                className="w-full max-w-sm rounded-2xl object-cover shadow-lg"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-heading font-bold text-primary-foreground mb-4 uppercase tracking-wide text-center">
                Our Vision
              </h3>
              <ol className="text-primary-foreground/80 text-sm leading-relaxed space-y-3 list-decimal list-inside">
                <li>To become a trusted leader in the voluntary carbon market by delivering transparent and credible climate solutions.</li>
                <li>To empower businesses and renewable energy generators to achieve carbon neutrality through innovative and responsible practices.</li>
                <li>To contribute meaningfully toward global climate goals by promoting integrity, accountability, and sustainable growth.</li>
              </ol>
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
