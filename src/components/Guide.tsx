"use client";

import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded hover:bg-indigo-700"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mt-2">
      <CopyButton text={code} />
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function GuidePage() {
  const nextInstallCode = `npx create-next-app@latest my-portfolio --typescript
cd my-portfolio
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`;

  const installPackageCode = `npm install @bikeshkit/portfolio-generator`;

  const pageCode = `"use client";
import { PortfolioHome } from "@bikeshkit/portfolio-generator";
import data from "../data.json";

export default function Home() {
  return <PortfolioHome {...data} />;
}`;

  const sampleJson = `{
  "name": "John Doe",
  "githubUrl": "https://github.com/johndoe",
  "linkedinUrl": "https://linkedin.com/in/johndoe",
  "email": "john@example.com",
  "projects": [
    {
      "title": "My Portfolio",
      "description": "Built with Next.js and Tailwind.",
      "url": "https://github.com/johndoe/portfolio"
    }
  ],
  "skills": ["React", "Next.js", "Node.js"]
}`;

  return (
    <main className="min-h-screen bg-white py-20 px-6 text-gray-800 font-sans max-w-3xl mx-auto">
      <div className="mb-6">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl shadow hover:shadow-lg hover:bg-indigo-700 transition-all duration-200 font-medium text-sm"
        >
          🔗 View Demo Application
          <FiExternalLink className="w-4 h-4" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">
        How to Set Up and Customize This Portfolio
      </h1>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600">
        🛠 Installation Guide
      </h2>

      <p className="mb-4">
        Follow the steps below to get your personal portfolio site up and
        running.
      </p>

      <ol className="list-decimal list-inside space-y-4 mb-6">
        <li>
          <strong>Create a Next.js App with Tailwind CSS and TypeScript</strong>
          <CodeBlock code={nextInstallCode} />
          <p className="mt-2 text-gray-600">
            Then configure your <code>tailwind.config.js</code> and{" "}
            <code>globals.css</code> as per the Tailwind CSS docs.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            👉 Or visit the{" "}
            <a
              href="https://nextjs.org/docs/app/getting-started/installation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline hover:text-indigo-800"
            >
              official Next.js installation guide
            </a>{" "}
            for the latest instructions.
          </p>
        </li>
        <li>
          <strong>Install the Portfolio Generator Package</strong>
          <CodeBlock code={installPackageCode} />
        </li>

        <li>
          <strong>
            Update Your <code>app/page.tsx</code>
          </strong>
          <p className="mt-2">Replace the contents with the following:</p>
          <CodeBlock code={pageCode} />
        </li>

        <li>
          <strong>
            Create a <code>src/data.json</code> file
          </strong>
          <p className="mt-2">Paste the following sample content:</p>
          <CodeBlock code={sampleJson} />
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600">
        🎨 What You Can Customize
      </h2>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>name</strong>: Your full name to display.
        </li>
        <li>
          <strong>githubUrl</strong>: Your GitHub profile link.
        </li>
        <li>
          <strong>linkedinUrl</strong>: Your LinkedIn profile link.
        </li>
        <li>
          <strong>email</strong>: Your email for the contact button.
        </li>
        <li>
          <strong>projects</strong>: Array of projects (title, description,
          url).
        </li>
        <li>
          <strong>skills</strong>: Array of your technical skills.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600">
        🔁 Updating Your Portfolio
      </h2>

      <p className="mb-4">
        To change the content of this portfolio (like your name, links,
        projects, skills, and email), update the JSON file at:
      </p>

      <CodeBlock code="src/data.json" />

      <p className="text-gray-600">
        After editing <code>data.json</code>, restart your development server if
        needed, and your updates will appear on the site.
      </p>
    </main>
  );
}
