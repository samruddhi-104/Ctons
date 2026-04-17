import React from "react";
import Navbar from "@/components/Navbar";
import ccImage from "../assets/cc1vm.png";
import co2Image from "../assets/co2vm.png";

import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";

const goalCards = [
  {
    title: "Develop High-Impact Carbon Projects",
    description:
      "Create verified carbon offset projects that reduce greenhouse gas emissions while generating measurable environmental and financial value.",
    icon: <img src={v1} alt="icon1" className="w-16 h-16 object-contain mx-auto" />,
  },
  {
    title: "Participate in Global Carbon Markets",
    description:
      "Register your projects in recognized voluntary carbon markets and unlock opportunities to trade verified carbon credits internationally.",
    icon: <img src={v2} alt="icon2" className="w-16 h-16 object-contain mx-auto" />,
  },
  {
    title: "Drive Corporate Climate Responsibility",
    description:
      "Support organizations in achieving sustainability commitments by generating and utilizing high-quality carbon credits for emission offsetting.",
    icon: <img src={v3} alt="icon3" className="w-16 h-16 object-contain mx-auto" />,
  },
];

export default function VoluntaryCarbonMarket() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <div className="mt-20 md:mt-24 w-full bg-gradient-to-r from-[#d9efe8] via-[#c4e4dd] to-[#9cc9c5] px-6 md:px-12 py-10">

        <div className="mx-auto max-w-7xl">

          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <img
              src={ccImage}
              alt="Carbon credits"
              className="w-full h-[320px] md:h-[380px] rounded-3xl object-cover shadow-xl transition duration-500 hover:scale-105"
            />

            <div className="rounded-3xl border-2 border-[#9db28e] bg-[#e8f5d0] p-8 shadow-lg transition duration-300 hover:shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Unlocking Opportunities in the Voluntary Carbon Market
              </h2>

              <p className="text-base md:text-lg text-gray-700 leading-7">
                C-Tons Solution supports organizations and project developers in registering carbon reduction projects within the voluntary carbon market. We assist in identifying suitable carbon standards, preparing project design documents, coordinating validation and verification processes, and ensuring compliance with global registries such as Verra, GCC, and UCR. 
                Once the project is successfully registered, verified emission reductions can be converted into carbon credits that can be traded in international markets.
              </p>

              <p className="mt-4 text-base md:text-lg text-gray-700 leading-7">
                Once approved, emission reductions convert into tradable carbon
                credits in international markets.
              </p>
            </div>
          </div>

          {/* QUOTE */}
          <div className="mt-10 max-w-5xl mx-auto bg-[#556f2f] text-white text-lg md:text-xl rounded-xl px-10 py-6 text-center shadow-xl transition hover:scale-[1.02]">
            A clear carbon footprint today lays the foundation for long-term
            climate resilience and sustainable innovation.
          </div>

          {/* WHY CHOOSE */}
          <div className="mt-12 grid md:grid-cols-2 gap-10 items-center bg-white/80 p-10 rounded-3xl shadow-xl border border-gray-200">

            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Choose C-Tons Solution
              </h3>

              <div className="space-y-4 text-lg text-gray-700 leading-7">
                <p>✔️ From project feasibility to carbon credit issuance, we guide you through every stage of voluntary carbon market project development.</p>
                <p>✔️ Our team identifies the most suitable international standards and methodologies to maximize project success and credit generation.</p>
                <p>✔️ We prepare accurate project documentation and coordinate with verification bodies to ensure smooth registration.</p>
                <p>✔️ Strategic advisory to help you position and trade your carbon credits effectively in global voluntary markets.</p>
              </div>
            </div>

            <img
              src={co2Image}
              alt="CO2"
              className="w-full h-[350px] md:h-[420px] rounded-3xl object-cover shadow-xl transition duration-500 hover:scale-105"
            />
          </div>

          {/* GOALS */}
          <h2 className="mt-16 text-center text-4xl font-bold text-[#4d5f2d]">
            Fulfill Your Environmental Goals
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

            {goalCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#e6f5c9] p-8 rounded-3xl border-2 border-[#a3b88c] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#6a8f3a]"
              >
                {/* ✅ CENTERED ICON */}
                <div className="mb-4 flex justify-center">
                  {card.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 text-center">
                  {card.title}
                </h3>

                <p className="text-base md:text-lg text-gray-700 leading-7 text-center">
                  {card.description}
                </p>
              </div>
            ))}

          </div>   

        </div>
      </div>
    </div>
  );
}