import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 1. IMPORT ALL IMAGES (This is the most important part)
import em1 from "@/assets/em1.png";
import em2 from "@/assets/em2.png";
import em3 from "@/assets/em3.png";
import em4 from "@/assets/em4.png";
import em5 from "@/assets/em5.png";
import em6 from "@/assets/em6.png";
import em7 from "@/assets/em7.png";

const services = [
  {
    icon: em1,
    title: "I-REC",
    desc: "I-REC verifies that renewable energy has been produced and helps organizations support and report green energy usage.",
  },
  {
    icon: em2,
    title: "Carbon Credit Issuance & Trading",
    desc: "Carbon credit issuance and trading is the process of creating verified carbon credits from emission-reduction projects and buying or selling them in carbon markets.",
  },
  {
    icon: em3,
    title: "Carbon Market Consulting",
    desc: "Carbon market consulting is the service of guiding businesses on how to participate in carbon markets to reduce emissions and manage carbon credits effectively.",
  },
];

const whyChoose = [
  {
    title: "Full Transparency",
    desc: "Every step of our process is documented and verifiable, ensuring complete trust and accountability.",
    icon: em4,
  },
  {
    title: "Trusted Guidance",
    desc: "Our team of certified experts brings decades of combined experience in carbon markets and sustainability.",
    icon: em5,
  },
  {
    title: "Measurable Impact",
    desc: "We deliver quantifiable results with detailed reporting so you can track your environmental contributions.",
    icon: em6,
  },
  {
    title: "Global Reach",
    desc: "Operating across international markets, we connect you with opportunities worldwide for maximum impact.",
    icon: em7,
  },
];

const ServicesSection = () => {
  const { ref: sRef, isVisible: sVisible } = useScrollAnimation();
  const { ref: wRef, isVisible: wVisible } = useScrollAnimation();

  return (
    <section id="services" className="gradient-teal py-24 md:py-32">
      <div className="section-padding max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Empowering Businesses Through Carbon Solutions
        </h2>
        <p className="text-muted-foreground text-base mb-20">Our services</p>

        {/* SERVICES GRID */}
        <div
          ref={sRef}
          className={`grid md:grid-cols-3 gap-10 mb-24 transition-all duration-700 ${
            sVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-green-900/30 p-10 flex flex-col items-center text-center h-full transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-lg"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-20 h-20 mb-6 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img src={s.icon} alt={s.title} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4">{s.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-xs">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE GRID */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
          Transforming Environmental Responsibility into Measurable Business Value
        </h2>
        <p className="text-muted-foreground text-base mb-20">Why choose us</p>

        <div
          ref={wRef}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            wVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {whyChoose.map((w, i) => (
            <div
              key={i}
              className="group flex items-center gap-6 bg-white/80 backdrop-blur rounded-2xl border border-green-800/40 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md hover:border-green-800"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img src={w.icon} alt={w.title} className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;