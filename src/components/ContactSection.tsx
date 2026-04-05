import contactBg from "@/assets/contact-bg.jpg";
import logo from "@/assets/logo.png";
import { MapPin, Mail, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contactus" className="relative py-16 md:py-24">
      <img src={contactBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-green-dark/80" />
      <div ref={ref} className={`relative z-10 section-padding max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <img src={logo} alt="C-Tons Solution" className="w-20 h-20 rounded-full border-4 border-primary" />
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
              Have Any Question? <span className="text-primary">Contact Us Directly</span>
            </h2>
            <div className="flex flex-wrap gap-6 mt-3 text-primary-foreground/90 text-sm">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Pune, Maharashtra</span>
              <span className="flex items-center gap-2"><Mail size={16} className="text-primary" /> sy@gmail.com</span>
              <span className="flex items-center gap-2"><Phone size={16} className="text-primary" /> 9112378892</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary rounded-2xl p-6 text-primary-foreground text-center text-sm leading-relaxed">
            C-Tons Solution helps businesses and renewable energy producers create real climate impact through trusted carbon market solutions.
          </div>
          <div className="bg-primary rounded-2xl p-6 text-primary-foreground text-center text-sm leading-relaxed">
            Partner with C-Tons Solution to unlock the value of green energy and contribute to a sustainable future.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
