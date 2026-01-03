"use client";

import { useState } from "react";
import { HiLink } from "react-icons/hi";
import data from "../../../data";

type ProjectCategory = "professional" | "self";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("professional");

  const categories: ProjectCategory[] = ["professional", "self"];
  const filteredProjects = data.projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-3 sm:mb-4">
          My <span className="text-blue-600 dark:text-blue-400">{"{dev}"}</span>{" "}
          projects
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
          From Web Apps to Websites & Games.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 border-b border-gray-200 dark:border-gray-800 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors capitalize whitespace-nowrap cursor-pointer ${
                activeTab === category
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="h-48 sm:h-54 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 dark:text-gray-600 text-sm">
                      Project Image
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        aria-label={`Open ${project.title} in new tab`}
                      >
                        <HiLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-600 dark:text-gray-400">
            No projects in this category yet.
          </div>
        )}

        {/* {activeTab === "apps" && filteredProjects.length > 0 && (
          <div className="text-center">
            <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              See all apps
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
}
