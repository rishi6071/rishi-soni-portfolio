import data from "../../../data";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 sm:mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {data.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      !exp.logo ? "bg-gray-200 dark:bg-gray-800" : ""
                    }`}
                  >
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    ) : (
                      <FaBriefcase className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 dark:text-gray-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {exp.duration}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>{exp.type}</span>
                </div>
              </div>

              {Array.isArray(exp.description) ? (
                <ul className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed list-disc list-outside ml-5 space-y-2">
                  {exp.description.map((item, descIndex) => (
                    <li key={descIndex} className="pl-2">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                exp.description && (
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                    {exp.description}
                  </p>
                )
              )}

              {exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
