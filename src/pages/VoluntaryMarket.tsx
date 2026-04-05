import React from 'react';
import ccImage from '../assets/cc1vm.png';
import co2Image from '../assets/co2vm.png';

const goalCards = [
  {
    title: 'Develop High-Impact Carbon Projects',
    description:
      'Create verifiable carbon projects that deliver measurable greenhouse gas reductions and long-term financial value.',
    icon: '🌱',
  },
  {
    title: 'Participate in Global Carbon Markets',
    description:
      'Register your projects in recognized voluntary carbon markets and unlock opportunities with international buyers and sustainability-focused investors.',
    icon: '🌐',
  },
  {
    title: 'Drive Corporate Climate Responsibility',
    description:
      'Support organizations in achieving sustainability commitments by generating high-quality carbon credits aligned with global offsetting standards.',
    icon: '🤝',
  },
];

export default function VoluntaryCarbonMarket() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#d9efe8] via-[#c4e4dd] to-[#9cc9c5] px-6 py-10 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <img
              src={ccImage}
              alt="Carbon credits"
              className="h-[260px] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>

          <div className="rounded-2xl border border-[#9db28e] bg-[#dff0c8] p-6 shadow-md">
            <h2 className="mb-4 text-center text-xl font-semibold text-gray-900">
              Unlocking Opportunities in the Voluntary Carbon Market
            </h2>
            <p className="text-sm leading-6 text-gray-700">
              C-Tera Solution supports organizations and project developers in
              registering carbon reduction projects under voluntary carbon
              standards. We help identify suitable carbon standards, prepare
              project design documents, coordinate validation and verification
              processes, and ensure compliance with global integrity benchmarks.
            </p>
            <p className="mt-4 text-sm leading-6 text-gray-700">
              Once the project is successfully approved, verified emission
              reductions can be converted into carbon credits that can be traded
              in international markets.
            </p>
          </div>
        </div>

        {/* Quote Banner */}
        <div className="mx-auto mt-8 max-w-5xl rounded-md bg-[#556f2f] px-8 py-6 text-center text-white shadow-lg">
          A clear carbon footprint today lays the foundation for long-term
          climate resilience and sustainable innovation.
        </div>

        {/* Why Choose Section */}
        <div className="mt-10 grid grid-cols-1 items-center gap-8 rounded-2xl bg-white/80 p-6 shadow-lg md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Why Choose C-Tons Solution
            </h3>
            <div className="space-y-3 text-sm leading-6 text-gray-700">
              <p>
                ✔️ Our expert team delivers end-to-end support, helping you
                transform climate goals into measurable market value.
              </p>
              <p>
                ✔️ We build long-term market participation strategies and
                technology-backed carbon project pipelines.
              </p>
              <p>
                ✔️ By project conceptualization through credit monetization, we
                streamline every step.
              </p>
              <p>
                ✔️ Reliable advisory services help reduce risk and maximize
                transparency across carbon initiatives.
              </p>
            </div>
          </div>

          <div>
            <img
              src={co2Image}
              alt="CO2 market"
              className="h-[260px] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Goals */}
        <h2 className="mt-12 text-center text-3xl font-semibold text-[#4d5f2d]">
          Fulfill Your Environmental Goals
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {goalCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#dff0b9] p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-3 text-3xl">{card.icon}</div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="text-sm leading-6 text-gray-700">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
