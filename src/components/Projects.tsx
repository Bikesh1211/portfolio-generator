import React, { KeyboardEvent } from "react";

interface Project {
  title: string;
  description: string;
  url: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, url: string) => {
    if (e.key === "Enter") {
      window.open(url, "_blank");
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white scroll-mt-24"
      tabIndex={-1}
      aria-label="Projects section"
    >
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map(({ title, description, url }, idx) => (
          <div
            key={idx}
            className="bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02]"
            onClick={() => window.open(url, "_blank")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, url)}
            aria-label={`View project: ${title}`}
          >
            <h3 className="text-xl font-semibold mb-3 text-pink-800">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              {description}
            </p>
            <span className="inline-block mt-6 text-pink-700 hover:text-pink-900 font-medium transition-all duration-300 text-sm">
              View Project →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
