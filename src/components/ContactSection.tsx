import contactBg from "@/assets/contact-bg.jpg";
import logo from "@/assets/logo.png";
import { MapPin, Mail, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contactus" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <img
        src={contactBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Overlay to darken background slightly for contrast */}
      <div className="absolute inset-0 bg-[#052e16]/80" /> {/* Dark Green from Commitment */}

      {/* Content Container */}
      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 md:px-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header Layout (Logo + Text Info) */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-16">
          
          {/* Logo with White circular border */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="C-Tons Solution Logo"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full border-[6px] border-white shadow-lg p-2 bg-white object-contain"
            />
          </div>

          {/* Text and Contact Info Section */}
          <div className="flex-1 text-center md:text-left">
            {/* 1. Updated Heading color for "Contact Us Directly" to light green */}
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Have Any Question?{" "}
              <span className="text-emerald-400">Contact Us Directly</span>
            </h2>

            {/* Contact Info Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-10 gap-y-4 text-white text-lg md:text-xl font-medium">
              
              {/* MapPin with Light Green Icon */}
              <span className="flex items-center gap-3">
                <MapPin size={26} className="text-emerald-400" />
                Pune, Maharashtra
              </span>

              {/* Mail with Light Green Icon */}
              <span className="flex items-center gap-3">
                <Mail size={26} className="text-emerald-400" />
                sy@gmail.com
              </span>

              {/* Phone with Light Green Icon */}
              <span className="flex items-center gap-3">
                <Phone size={26} className="text-emerald-400" />
                9112378892
              </span>
            </div>
          </div>
        </div>

        {/* Lower Boxes (Green Background Boxes) */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Box */}
          <div className="bg-[#15803d] rounded-2xl p-10 text-white text-lg md:text-xl leading-relaxed text-center shadow-lg transition-transform duration-300 hover:scale-105">
            C-Tons Solution helps businesses and renewable energy producers
            create real climate impact through trusted carbon market solutions.
          </div>

          {/* Right Box */}
          <div className="bg-[#15803d] rounded-2xl p-10 text-white text-lg md:text-xl leading-relaxed text-center shadow-lg transition-transform duration-300 hover:scale-105">
            Partner with C-Tons Solution to unlock the value of green energy and
            contribute to a sustainable future.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;