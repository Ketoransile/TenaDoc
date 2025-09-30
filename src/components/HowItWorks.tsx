import React from "react";

type Step = {
  number: number;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    number: 1,
    title: "Find a Specialist",
    desc: "Search for doctors by specialty, experience, ratings, or availability.",
  },
  {
    number: 2,
    title: "Book an Appointment",
    desc: "Select a convenient time slot from the doctor's available schedule.",
  },
  {
    number: 3,
    title: "Make Payment",
    desc: "Complete your booking by paying the consultation fee securely.",
  },
  {
    number: 4,
    title: "Get Consultation",
    desc: "Connect with your doctor via video call at the scheduled time.",
  },
];

const StepCard: React.FC<{ step: Step }> = ({ step }) => {
  return (
    <article
      aria-labelledby={`how-step-${step.number}-title`}
      className="flex items-start gap-4"
    >
      {/* narrow left column for number */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg md:text-xl shadow-sm">
          {step.number}
        </div>
      </div>

      {/* wider details column */}
      <div className="flex-1">
        <h3
          id={`how-step-${step.number}-title`}
          className="text-xl md:text-2xl font-bold text-gray-900"
        >
          {step.title}
        </h3>
        <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
          {step.desc}
        </p>
      </div>
    </article>
  );
};

export const HowItWorks: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 items-center py-20 ">
      {/* Header (keeps same style as your Features header) */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold text-blue-600 text-center">
          How It Works
        </h1>
        <h2 className="text-4xl font-bold text-black text-center">
          Simple process, quality care
        </h2>
        <h3 className="text-xl text-gray-600 max-w-2xl text-center">
          Getting medical advice has never been easier. Follow these simple
          steps to connect with a doctor.
        </h3>
      </div>

      {/* Steps grid: 1 column on small, 4 columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 w-full max-w-7xl px-4">
        {steps.map((s) => (
          <div
            key={s.number}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
          >
            <StepCard step={s} />
          </div>
        ))}
      </div>
    </section>
  );
};
