import heroImg from "@/assets/hero-forest.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* MEDIUM SPEED DRONE FORWARD EFFECT */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={heroImg} 
          alt="Misty forest" 
          className="w-full h-full object-cover animate-drone-medium" 
          style={{ transformOrigin: 'center center' }} 
          width={1920} 
          height={1080} 
        />
      </div>
      
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      <div className="relative z-20 text-center px-4 max-w-4xl animate-fade-up">
        <h2 className="text-4xl md:text-7xl font-heading font-bold text-white italic leading-tight mb-6 drop-shadow-2xl">
          Powering Climate Action Through Trusted Solutions.
        </h2>
        <p className="text-white/90 text-base md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
          Empowering businesses with carbon credit solutions, I-REC certifications, and expert consulting to achieve measurable climate goals.
        </p>
      </div>

      {/* CUSTOM CSS FOR MEDIUM SPEED MOVEMENT */}
      <style>{`
        @keyframes droneMedium {
          0% {
            transform: scale(1.0);
          }
          100% {
            /* 1.25 gives a clear forward motion without pixelating the image too much */
            transform: scale(1.25);
          }
        }
        .animate-drone-medium {
          /* 12s is the 'sweet spot' for a cinematic medium-speed drone shot */
          animation: droneMedium 12s ease-in-out infinite alternate;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;