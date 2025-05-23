import React from "react";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-pink-50 scroll-mt-24"
      tabIndex={-1}
      aria-label="Skills section"
    >
      <h2 className="text-3xl font-extrabold text-center text-pink-900 mb-10 tracking-wide">
        Skills
      </h2>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-5">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-pink-200 text-pink-900 px-6 py-2 rounded-full font-semibold shadow-lg text-base cursor-default select-none tracking-wide"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
