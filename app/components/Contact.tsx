"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import data from "../../data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-3 sm:mb-4">
          Get in Touch
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 px-2">
          Let&apos;s connect and discuss opportunities.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          <a
            href={data.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors text-sm sm:text-base"
          >
            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={data.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-sm sm:text-base"
          >
            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${data.links.email}`}
            className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-sm sm:text-base"
          >
            <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
