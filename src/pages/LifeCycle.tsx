import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

import lcaImage1 from "../assets/lca1.png";
import lcaImage2 from "../assets/lca2.png";

const features = [
  {
    title: "Comprehensive Lifecycle Analysis",
    description:
      "We evaluate environmental impacts from raw material extraction through production, distribution, use, and disposal.",
  },
  {
    title: "Identification of Environmental Hotspots",
    description:
      "Our analysis highlights stages in the lifecycle where environmental impacts are highest.",
  },
  {
    title: "Sustainable Product Development Support",
    description:
      "We provide insights that help businesses design products with lower environmental footprints.",
  },
  {
    title: "Resource Optimization Strategies",
    description:
      "Our recommendations help reduce energy consumption, material waste, and environmental impact.",
  },
];

const benefits = [
  "Development of more sustainable responsible products",
  "Reduced resource consumption and environmental impact",
  "Stronger sustainability credentials for products and services",
  "Better decision-making for product design and production strategies",
];

export default function LifeCycle() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#6eb9b3] via-[#87c8c2] to-[#9bd5cf]">

      <Navbar />

      {/* ✅ Proper spacing BELOW navbar */}
      <div className="pt-28 pb-10 px-6 md:px-12 flex-1">

        {/* TOP CARD */}
        <div className="mx-auto max-w-6xl rounded-[28px] bg-[#ececec] p-8 md:p-10 shadow-xl">
          
          <h1 className="mb-10 text-center text-2xl md:text-3xl font-medium text-[#2e2e2e]">
            Understand the Environmental Impact of Products Across Their Entire Lifecycle
          </h1>

          {/* IMAGE + FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* ✅ IMAGE FIXED (no cut) */}
            <div className="flex justify-center">
              <img
                src={lcaImage1}
                alt="Lifecycle"
                className="w-full max-w-[280px] h-auto object-contain rounded-2xl shadow-md"
              />
            </div>

            {/* FEATURES */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              {features.map((feature, index) => (
                <div key={index}>
                  <h2 className="mb-2 text-md font-semibold text-[#2f2f2f]">
                    {feature.title}
                  </h2>
                  <p className="text-sm text-gray-700 leading-6">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GREEN STRIP */}
        <div className="mx-auto max-w-6xl mt-10 rounded-xl bg-[#2f5d50] px-6 py-5 text-center text-white">
          Through life cycle assessment (LCA), we evaluate the environmental impact of a product or process across its entire lifecycle—from raw material extraction to production, use, and disposal. This helps companies identify improvement areas and design more sustainable products and processes.
        </div>

        {/* IMAGE + BENEFITS */}
        <div className="mx-auto max-w-6xl mt-14 grid md:grid-cols-2 gap-10 items-center">

          {/* ✅ HANDSHAKE IMAGE FIXED */}
          <div className="flex justify-center">
            <img
              src={lcaImage2}
              alt="Handshake"
              className="w-full max-w-[350px] h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>

          {/* BENEFITS */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-[#356b55] text-center md:text-left">
              Benefits of Choosing C-Tons
            </h3>

            <ul className="space-y-3">
              {benefits.map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-800">
                  <span className="text-[#356b55]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="mt-20">
          <ContactSection />
        </div>

      </div>

      <Footer />
    </div>
  );
}