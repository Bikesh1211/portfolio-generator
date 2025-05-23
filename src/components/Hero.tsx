import { FaGithub, FaLinkedin } from "react-icons/fa";

interface HeroProps {
  name: string;
  githubUrl: string;
  linkedinUrl: string;
}

export default function Hero({ name, githubUrl, linkedinUrl }: HeroProps) {
  return (
    <section
      id="hero"
      className="max-w-3xl mx-auto my-24 px-6 text-center"
      tabIndex={-1}
      aria-label="Introduction section"
    >
      <h1 className="text-4xl font-light text-gray-900 mb-2">Hello, I'm</h1>
      <h2 className="text-6xl font-extralight text-pink-600 relative inline-block pb-1 cursor-default select-text">
        {name}
        <span className="absolute left-0 bottom-0 w-full h-1 bg-pink-300 rounded-full animate-[underline_2s_ease-in-out_infinite]"></span>
      </h2>

      <p className="mt-6 text-gray-700 max-w-md mx-auto text-lg leading-relaxed tracking-wide">
        Passionate Full-Stack Developer crafting sleek, scalable web apps with
        beautiful UI.
      </p>

      <div className="mt-12 flex justify-center gap-8 text-pink-600">
        {[
          { href: githubUrl, label: "GitHub", icon: <FaGithub size={28} /> },
          {
            href: linkedinUrl,
            label: "LinkedIn",
            icon: <FaLinkedin size={28} />,
          },
        ].map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-3 rounded-full hover:bg-pink-100 transition transform hover:scale-110 text-pink-600"
          >
            {icon}
          </a>
        ))}
      </div>

      <style jsx>{`
        @keyframes underline {
          0%,
          100% {
            width: 0%;
            opacity: 0.5;
          }
          50% {
            width: 100%;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
