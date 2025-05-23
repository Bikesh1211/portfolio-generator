import React from "react";

interface ContactCTAProps {
  heading: string;
  description: string;
  email: string;
  buttonText?: string;
  ariaLabel?: string;
  className?: string; // Optional extra styling classNames
}

const ContactCTA: React.FC<ContactCTAProps> = ({
  heading,
  description,
  email,
  buttonText = "Contact Me",
  ariaLabel,
  className = "",
}) => {
  return (
    <section
      id="contact"
      className={`py-20 px-6 text-center scroll-mt-24 ${className}`}
      tabIndex={-1}
      aria-label="Contact section"
    >
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-wide">
        {heading}
      </h2>
      <p className="text-gray-700 mb-10 max-w-xl mx-auto leading-relaxed text-base tracking-wide">
        {description}
      </p>
      <a
        href={`mailto:${email}`}
        className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-3xl font-semibold transition shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-300 text-base"
        aria-label={ariaLabel || `Contact me via email: ${email}`}
      >
        {buttonText}
      </a>
    </section>
  );
};

export default ContactCTA;
