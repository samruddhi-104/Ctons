import React from 'react';
import earthImage from '../assets/earthcm.png';

const features = [
  {
    title: 'Strong Regulatory Expertise',
    description:
      'Deep understanding of compliance frameworks and evolving regulatory standards.',
    icon: '📄',
  },
  {
    title: 'Accurate Emission Reporting',
    description:
      'Ensuring reliable benchmarking, reporting, and verification of emissions to meet compliance goals.',
    icon: '📊',
  },
  {
    title: 'Seamless Project Registration',
    description:
      'Managing technical documentation and project approval for compliance-certified credits.',
    icon: '📝',
  },
  {
    title: 'Risk & Compliance Management',
    description:
      'Mitigate organizational and operational risks while aligning with sustainability standards.',
    icon: '⚖️',
  },
  {
    title: 'Strategic Carbon Reduction Planning',
    description:
      'Supporting long-term decarbonization strategies through measurable compliance roadmaps.',
    icon: '🤝',
  },
  {
    title: 'Continuous Advisory Support',
    description:
      'Providing ongoing guidance for adapting policies and carbon market regulations.',
    icon: '🌍',
  },
];

export default function ComplianceMarket() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#d7f1ea] via-[#bde4df] to-[#7db7b5] py-10 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-[#dff1b8] p-8 shadow-lg">
            <h1 className="mb-5 text-3xl font-semibold leading-tight text-gray-900">
              Meeting Global Compliance with Confidence
            </h1>
            <p className="text-sm leading-7 text-gray-700 md:text-base">
              For organizations operating under regulatory carbon frameworks,
              Green Solutions provides guidance on registering projects with
              compliance markets where carbon reductions are recognized,
              measured by law.
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base">
              Our experts help navigate regulatory requirements, prepare
              documentation, and align projects with applicable carbon
              standards. This ensures compliance meets environmental
              regulations while unlocking the potential value of emission
              reductions.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={earthImage}
              alt="Compliance market earth"
              className="h-[360px] w-full max-w-[420px] rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/90 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-3 text-3xl">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
