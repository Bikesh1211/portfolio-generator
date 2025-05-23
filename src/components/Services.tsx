import React from "react";

export interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
}

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-white scroll-mt-24"
      tabIndex={-1}
      aria-label="Services offered section"
    >
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
        What I Offer
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="bg-pink-50 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-[1.02]"
          >
            {/* {icon} */}
            <h3 className="text-xl font-semibold mb-3 text-pink-800">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed tracking-wide text-sm">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
