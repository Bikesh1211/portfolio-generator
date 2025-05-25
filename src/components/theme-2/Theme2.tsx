"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
// import data from "../theme-2/data.json";

export default function Theme2({ data }: any) {
  const [activeSection, setActiveSection] = useState<
    "home" | "about" | "projects" | "contact"
  >("home");

  const { hero, about, projects, contact } = data;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 bg-black bg-opacity-70 fixed top-0 w-full z-10">
        <h1 className="text-2xl font-bold tracking-wider">MyPortfolio</h1>
        <nav className="space-x-6">
          {["home", "about", "projects", "contact"].map((section) => (
            <button
              key={section}
              className={`capitalize text-sm hover:text-yellow-400 ${
                activeSection === section ? "text-yellow-400" : ""
              }`}
              onClick={() => setActiveSection(section as any)}
            >
              {section}
            </button>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      {activeSection === "home" && (
        <section className="flex flex-col justify-center items-center text-center h-screen">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {hero.greeting} <span className="text-yellow-400">{hero.name}</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {hero.tagline}
          </motion.p>
        </section>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="min-h-screen flex flex-col justify-center items-center px-10 text-center">
          <h3 className="text-3xl font-bold mb-4">{about.title}</h3>
          <p className="max-w-2xl text-lg text-gray-300">{about.description}</p>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === "projects" && (
        <section className="min-h-screen flex flex-col justify-center items-center px-10">
          <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project: any, idx: any) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-6 rounded-2xl shadow-md transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </motion.a>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <section className="min-h-screen flex flex-col justify-center items-center px-10 text-center">
          <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
          <p className="text-gray-300 mb-6">
            Feel free to reach out to me at{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-yellow-400 underline"
            >
              {contact.email}
            </a>
          </p>
          <div className="space-x-4">
            {Object.entries(contact.socials).map(([platform, url]: any) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400"
              >
                {platform}
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
