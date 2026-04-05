import recycleImg from "@/assets/recycle-nature.png";
import farmImg from "@/assets/farm-sunset.jpg";
import co2Img from "@/assets/co2-leaf.png";
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
    title: "Our Approach",
    text: "We combine strategic thinking, regulatory expertise, and a results-oriented mindset to deliver impactful climate solutions. By simplifying complex carbon frameworks and focusing on measurable outcomes, we empower businesses to act decisively and responsibly. Our approach ensures that climate commitments are not just promises but verified actions with real-world impact.",
    img: farmImg,
    imgAlt: "Farm sunset",
    imgLeft: false,
  },
  {
    title: "Driving Measurable Impact",
    text: "We believe that sustainability must be backed by data, credibility, and accountability. Every project we support is aligned with internationally recognized standards, ensuring transparency and tangible environmental benefits. Through collaboration and responsible market participation, C-Tons Solution contributes to meaningful climate progress.",
    img: co2Img,
    imgAlt: "CO2 leaf",
    imgLeft: true,
  },
];

const CommitmentSection = () => {
  return (
    <section className="bg-green-dark py-16 md:py-24">
      <div className="section-padding max-w-6xl mx-auto text-center mb-12">
        <p className="text-primary font-medium text-sm mb-2">Empowering a Greener Future</p>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
          Leading Climate Innovation for a Sustainable Tomorrow
        </h2>
      </div>
      <div className="section-padding max-w-5xl mx-auto space-y-10">
        {blocks.map((b, i) => (
          <CommitmentBlock key={i} {...b} index={i} />
        ))}
      </div>
    </section>
  );
};

const CommitmentBlock = ({ title, text, img, imgAlt, imgLeft, index }: { title: string; text: string; img: string; imgAlt: string; imgLeft: boolean; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-card rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`flex items-center justify-center p-6 ${!imgLeft ? "order-first md:order-last" : ""}`}>
        <img src={img} alt={imgAlt} className="w-48 md:w-64 rounded-xl object-cover" loading="lazy" />
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-center">
        <h3 className="font-heading font-bold text-foreground text-lg mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default CommitmentSection;
