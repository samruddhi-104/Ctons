import React from 'react';
import carbonImg from '../assets/cfa1.png';

const benefits = [
  {
    title: 'Comprehensive Emission Measurement',
    desc: 'We accurately measure greenhouse gas emissions across your organization’s operations, energy consumption, and supply chains to provide a clear understanding of your environmental footprint.',
    icon: '🌿',
  },
  {
    title: 'Identification of Emission Hotspots',
    desc: 'Our analysis identifies key areas where emissions are highest, helping organizations focus on the most impactful reduction strategies.',
    icon: '🔍',
  },
  {
    title: 'Strategic Sustainability Planning',
    desc: 'We transform carbon data into actionable insights that support long-term climate strategies and corporate sustainability goals.',
    icon: '♻️',
  },
  {
    title: 'Alignment with Global Carbon Standards',
    desc: 'Our carbon footprint assessments follow internationally recognized frameworks to ensure credibility and transparency in reporting.',
    icon: '⚙️',
  },
];

const checklist = [
  'Experienced sustainability and carbon accounting experts',
  'Data-driven methodologies for precise emission calculations',
  'Customized solutions tailored to different industries and operations',
  'Strategic guidance to support long term climate goals',
];

export default function CarbonFootprintAccounting() {
  return (
    <div className="min-h-screen bg-[#e9e9e9]">
      {/* Header */}
      <section className="px-6 py-10 text-center">
        <h1 className="text-4xl font-semibold text-[#416d43]">
          Measure Your Carbon Impact and Build a Clear Path Toward Sustainability
        </h1>
        <p className="mx-auto mt-4 max-w-4xl text-lg text-gray-700">
          We help organizations measure and understand their greenhouse gas emissions through structured carbon footprint assessments.
        </p>
      </section>

      {/* Benefits strip */}
      <section className="bg-[#c6dca8] px-6 py-10">
        <h2 className="mb-8 text-center text-2xl font-medium text-[#4f6b38]">
          Benefits of Choosing C-Tons Solution for Carbon Footprinting
        </h2>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-3 text-4xl">{item.icon}</div>
              <h3 className="mb-3 text-lg font-semibold text-[#445b34]">{item.title}</h3>
              <p className="text-sm leading-6 text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom section */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 lg:grid-cols-2">
          <div className="rounded-l-3xl border border-black bg-white p-4 shadow-lg">
            <img
              src={carbonImg}
              alt="Carbon footprint accounting"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          <div className="rounded-r-3xl bg-[#a8c96d] p-10 shadow-lg">
            <div className="space-y-8">
              {checklist.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-[#486234]">✔</span>
                  <p className="text-lg leading-8 text-[#324b26]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
