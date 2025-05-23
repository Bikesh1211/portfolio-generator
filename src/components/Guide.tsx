"use client";

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6 text-gray-800 font-sans max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">
        How to Customize This Portfolio
      </h1>

      <p className="mb-4">
        To change the content of this portfolio (like your name, links,
        projects, skills, and email), you need to update the JSON file at:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-6">
        <code>src/data/data.json</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-600">
        What You Can Change
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
        Example
      </h2>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-6">
        <code>
          {`{
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
}`}
        </code>
      </pre>

      <p className="text-gray-600">
        After editing <code>data.json</code>, restart your development server if
        needed, and your updates will appear on the site.
      </p>
    </main>
  );
}
