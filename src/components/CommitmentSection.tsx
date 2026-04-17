import recycleImg from "@/assets/recycle-nature.png";
import farmImg from "@/assets/farm-sunset.jpg";
import co2Img from "@/assets/em8.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const blocks = [
  {
    title: "Our Commitment to Climate Responsibility",
    text: "At C-Tons Solution, integrity drives every decision we make. We are committed to promoting ethical participation in carbon markets and ensuring that every initiative contributes meaningfully to global climate goals. Our work is grounded in trust, compliance, and long-term environmental value, helping organizations confidently navigate the evolving sustainability landscape.",
    img: recycleImg,
    imgAlt: "Recycle nature",
    imgLeft: true,
  },
  {
    title: "OUR APPROACH",
    text: "We combine strategic thinking, regulatory expertise, and a results-oriented mindset to deliver impactful climate solutions. By simplifying complex carbon frameworks and focusing on measurable outcomes, we empower businesses to act decisively and responsibly. Our approach ensures that climate commitments are not just promises but verified actions with real-world impact.",
    img: farmImg,
    imgAlt: "Farm sunset",
    imgLeft: false,
  },
  {
    title: "Driving Measurable Impact",
    text: "We believe that sustainability must be backed by data, credibility, and accountability. Every project we support is aligned with internationally recognized standards, ensuring transparency and tangible environmental benefits. Through collaboration and responsible market participation, C-Tons Solution contributes to meaningful climate progress.",
    img: co2Img,
    imgAlt: "em8",
    imgLeft: true,
  },
];

const CommitmentSection = () => {
  return (
    <section className="bg-[#052e16] py-20 md:py-32"> {/* Deep dark green background from reference */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <p className="text-[#34d399] font-medium text-base mb-3">
          Empowering a Greener Future
        </p>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
          Leading Climate Innovation for a Sustainable Tomorrow
        </h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-8 px-4">
        {blocks.map((b, i) => (
          <CommitmentBlock key={i} {...b} index={i} />
        ))}
      </div>
    </section>
  );
};

const CommitmentBlock = ({
  title,
  text,
  img,
  imgAlt,
  imgLeft,
  index,
}: {
  title: string;
  text: string;
  img: string;
  imgAlt: string;
  imgLeft: boolean;
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`
        bg-[#d1fae5] rounded-[32px] overflow-hidden 
        grid md:grid-cols-2 items-center min-h-[320px]
        transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
      `}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Image Container */}
      <div
        className={`flex items-center justify-center p-8 md:p-12 ${
          !imgLeft ? "md:order-last" : ""
        }`}
      >
        <img
          src={img}
          alt={imgAlt}
          className="w-full max-w-[300px] rounded-2xl object-cover shadow-sm"
        />
      </div>

      {/* Text Container */}
      <div className="p-8 md:p-12 flex flex-col justify-center">
        <h3 className="font-heading font-bold text-xl md:text-2xl text-[#064e3b] mb-4 uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-[#065f46] text-sm md:text-base leading-relaxed font-medium">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CommitmentSection;