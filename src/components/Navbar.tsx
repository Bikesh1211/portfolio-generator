"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

interface NavbarProps {
  name: string;
  githubUrl: string;
  linkedinUrl: string;
  onNavigate: (id: string) => void;
}

export default function Navbar({
  name,
  githubUrl,
  linkedinUrl,
  onNavigate,
}: NavbarProps) {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setNavOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-colors duration-500"
      style={{ backdropFilter: "saturate(180%) blur(8px)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <div
          className="text-gray-900 font-extrabold text-2xl cursor-pointer select-none tracking-wide transition hover:text-pink-600 hover:scale-105"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Scroll to top"
        >
          {name}
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium text-lg">
          {["projects", "skills", "services", "contact"].map((section) => (
            <li
              key={section}
              className="relative cursor-pointer after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-pink-600 after:rounded after:transition-[width] after:duration-300 hover:after:w-full hover:text-pink-600"
              onClick={() => handleNavClick(section)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleNavClick(section);
              }}
              role="button"
              aria-label={`Navigate to ${section}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
          {/* Social icons */}
          <li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center p-2 rounded hover:text-pink-600 transition-transform duration-300 hover:scale-110"
            >
              <FaGithub className="text-xl" />
            </a>
          </li>
          <li>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center p-2 rounded hover:text-pink-600 transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </li>
        </ul>

        {/* Mobile nav toggle */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden text-gray-700 text-3xl focus:outline-none focus:ring-2 focus:ring-pink-400 rounded p-1 hover:bg-pink-200 hover:text-pink-700 transition-colors duration-300"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile nav menu */}
      <div
        className={`md:hidden fixed top-[56px] right-4 left-4 bg-white bg-opacity-95 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ${
          navOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
        style={{ backdropFilter: "saturate(180%) blur(12px)" }}
      >
        <ul className="flex flex-col px-6 py-6 space-y-6 text-gray-700 font-semibold text-lg tracking-wide select-none">
          {["projects", "skills", "services", "contact"].map((section) => (
            <li
              key={section}
              className="cursor-pointer hover:text-pink-600 transition duration-300 ease-in-out"
              onClick={() => handleNavClick(section)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleNavClick(section);
              }}
              role="button"
              aria-label={`Navigate to ${section}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
          <li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-pink-600 transition flex items-center gap-3 font-semibold"
            >
              <FaGithub className="text-xl" /> GitHub
            </a>
          </li>
          <li>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-pink-600 transition flex items-center gap-3 font-semibold"
            >
              <FaLinkedin className="text-xl" /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
