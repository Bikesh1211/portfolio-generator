"use client";
import { useState } from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Projects from "../Projects";
import Skills from "../Skills";
import Services from "../Services";
import ContactCTA from "../ContactCTA";
import Footer from "../Footer";
import React from "react";
interface Project {
  title: string;
  description: string;
  url: string;
}

interface PortfolioProps {
  name: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  projects: Project[];
  skills: string[];
  services: any;
  contactData: any;
}

export default function PortfolioHome({
  name,
  githubUrl,
  linkedinUrl,
  email,
  projects,
  skills,
  services,
  contactData,
}: PortfolioProps) {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        name={name}
        githubUrl={githubUrl}
        linkedinUrl={linkedinUrl}
        onNavigate={handleNavClick}
      />
      {/* Content */}
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50 text-gray-800 font-sans pt-20 scroll-smooth">
        {/* Hero */}
        <Hero name={name} githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
        {/* Projects */}
        <Projects projects={projects} />
        {/* Skills */}
        <Skills skills={skills} />
        {/* Services */}
        <Services services={services} />
        {/* Contact CTA */}
        <ContactCTA {...contactData} />
        {/* Footer */}
        <Footer name={name} />
      </main>
    </>
  );
}
