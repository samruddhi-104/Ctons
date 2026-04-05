import React from 'react';
import lcaImage1 from '../assets/lca1.png';
import lcaImage2 from '../assets/lca2.png';

const features = [
  {
    title: 'Comprehensive Lifecycle Analysis',
    description:
      'We evaluate environmental impacts from raw material extraction through production, usage, and end-of-life disposal to provide a complete sustainability perspective.',
  },
  {
    title: 'Identification of Environmental Hotspots',
    description:
      'Our analysis highlights stages in the lifecycle where the highest emissions, waste, or resource use occur, enabling targeted improvement actions.',
  },
];

const benefits = [
  'Data-driven sustainability decision making',
  'Product-level carbon and resource optimization',
  'Support for eco-design and green innovation',
  'Alignment with global lifecycle standards',
];

export default function LifeCycleAssessment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6eb9b3] via-[#87c8c2] to-[#9bd5cf] px-6 py-10 md:px-12">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-[#ececec] p-8 shadow-xl md:p-10">
        <h1 className="mb-8 text-center text-3xl font-medium text-[#2e2e2e]">
          Understand the Environmental Impact of Products Across Their Entire Lifecycle
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <img
              src={lcaImage1}
              alt="Lifecycle overview"
              className="h-[260px] w-full rounded-3xl object-cover shadow-lg"
            />
          </div>

          {features.map((feature, index) => (
            <div key={index} className="flex flex-col justify-center">
              <h2 className="mb-4 text-xl font-semibold text-[#2f2f2f]">
                {feature.title}
              </h2>
              <p className="text-sm leading-7 text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h3 className="mb-5 text-2xl font-semibold text-[#356b55]">
              Why Choose Our LCA Services?
            </h3>
            <div className="space-y-4">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-xl text-[#356b55]">✔</span>
                  <p className="text-base text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src={lcaImage2}
              alt="LCA process"
              className="h-[280px] w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
