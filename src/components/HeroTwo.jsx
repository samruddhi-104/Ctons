import heroTwoImg from "@/assets/herotwo.png";

const HeroTwo = () => {
  return (
    <section className="bg-[#f3f4f2] py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - IMAGE CARD */}
        <div className="flex justify-center md:justify-start">
          <div className="bg-white p-4 shadow-xl rounded-md">
            <img
              src={heroTwoImg}
              alt="Green energy"
              className="w-[260px] md:w-[320px] object-contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-900 leading-snug mb-6">
            Trusted expertise in carbon markets <br />
            and green energy solutions.
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            C-Toss Solution is a sustainability focused advisory firm dedicated
            to advancing climate action through the voluntary carbon market. We
            support renewable energy generators and businesses by providing
            end-to-end solutions in carbon credit and I-REC registration,
            issuance, and trading.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            With integrity, transparency, and accountability at our core, we help
            organizations create measurable environmental impact while achieving
            their sustainability goals.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We envision a world where every business contributes meaningfully to
            climate solutions. Through transparency, innovation, and trusted
            partnerships, we make sustainable practices accessible and profitable
            for organizations of all sizes.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroTwo;