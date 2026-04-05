import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileCheck, BarChart3, Globe } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "I-REC",
    desc: "I-REC certifies that renewable energy has been produced and helps organizations support and report green energy usage.",
  },
  {
    icon: BarChart3,
    title: "Carbon Credit Issuance & Trading",
    desc: "Carbon credit issuance and trading is the process of creating verified carbon credits from emission-reduction projects and buying or selling them in carbon markets.",
  },
  {
    icon: Globe,
    title: "Carbon Market Consulting",
    desc: "Carbon market consulting is the service of guiding businesses on how to participate in carbon markets to reduce emissions and manage carbon credits effectively.",
  },
];

const whyChoose = [
  { title: "Full Transparency", desc: "Every step of our process is documented and verifiable, ensuring complete trust and accountability.", icon: "🔍" },
  { title: "Trusted Guidance", desc: "Our team of certified experts brings decades of combined experience in carbon markets and sustainability.", icon: "🤝" },
  { title: "Measurable Impact", desc: "We deliver quantifiable results with detailed reporting so you can track your environmental contributions.", icon: "📊" },
  { title: "Global Reach", desc: "Operating across international markets, we connect you with opportunities worldwide for maximum impact.", icon: "🌍" },
];

const ServicesSection = () => {
  const { ref: sRef, isVisible: sVisible } = useScrollAnimation();
  const { ref: wRef, isVisible: wVisible } = useScrollAnimation();

  return (
    <section id="services" className="gradient-teal py-16 md:py-24">
      <div className="section-padding max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
          Empowering Businesses Through Carbon Solutions
        </h2>
        <p className="text-muted-foreground text-sm mb-10">Our services</p>

        <div ref={sRef} className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 ${sVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {services.map((s, i) => (
            <div key={i} className="card-service" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
          Transforming Environmental Responsibility into Measurable Business Value
        </h2>
        <p className="text-muted-foreground text-sm mb-10">Why choose us</p>

        <div ref={wRef} className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${wVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {whyChoose.map((w, i) => (
            <div key={i} className="card-why" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-3xl mb-3">{w.icon}</div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-2">{w.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
