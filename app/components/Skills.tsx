"use client";

import data from "../../data";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiGit,
  SiLeetcode,
} from "react-icons/si";
import { DiSass } from "react-icons/di";
import { FaTachometerAlt } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  js: <SiJavascript className="w-12 h-12" />,
  react: <SiReact className="w-12 h-12" />,
  nextjs: <SiNextdotjs className="w-12 h-12" />,
  typescript: <SiTypescript className="w-12 h-12" />,
  redux: <SiRedux className="w-12 h-12" />,
  git: <SiGit className="w-12 h-12" />,
  sass: <DiSass className="w-12 h-12" />,
  performance: <FaTachometerAlt className="w-12 h-12" />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 sm:mb-10 md:mb-12 text-center">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {data.skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
                  {iconMap[skill.icon] || (
                    <SiJavascript className="w-10 h-10 sm:w-12 sm:h-12" />
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-1 sm:mb-2">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Leetcode Link */}
        {data.links.leetcode && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <a
              href={data.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-sm sm:text-base"
            >
              <SiLeetcode className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>LeetCode</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
