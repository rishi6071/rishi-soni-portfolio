import Image from "next/image";
import data from "../../../data";
import { FaDownload, FaGraduationCap, FaCode, FaUsers } from "react-icons/fa";
import ScrollButton from "../ui/ScrollButton";

const iconMap: Record<string, React.ReactNode> = {
  education: <FaGraduationCap className="w-5 h-5" />,
  teamwork: <FaUsers className="w-5 h-5" />,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black"
      aria-label="Hero and About"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full order-2 lg:order-1">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white mb-3 sm:mb-4">
              Frontend Engineer
            </h1>

            {/* Technologies */}
            <div className="mb-3 sm:mb-4 text-xs sm:text-sm md:text-base lg:text-xl text-gray-700 dark:text-gray-300 w-full overflow-hidden">
              <span className="font-mono break-words">
                {"{ "}
                <span className="break-words">
                  {data.personal.technologies.join(", ")}
                </span>
                {"... }"}
              </span>
            </div>

            {/* Description */}
            <p className="max-w-2xl mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed px-2 sm:px-0">
              {data.personal.tagline}
            </p>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 w-full max-w-2xl text-left hidden sm:block">
              {data.personal.points.map(
                (point: { icon: string; text: string }, index: number) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded text-blue-600 dark:text-blue-400">
                      {iconMap[point.icon] || (
                        <FaCode className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex-1 text-left">
                      {point.text}
                    </p>
                  </div>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 mb-4 sm:mb-6 lg:mb-0 items-center">
              <ScrollButton
                sectionId="projects"
                className="w-56 sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
              >
                See my dev works
              </ScrollButton>
              <a
                href={data.personal.resume}
                download
                className="w-56 sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-900 font-medium rounded-full transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
              >
                <FaDownload />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex flex-col items-center lg:items-start lg:pl-8 order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0 mt-8 sm:mt-0">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start w-full">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem] rounded-full bg-gray-200 dark:bg-gray-900 flex items-center justify-center overflow-hidden relative shadow-lg">
                {data.personal.profileImage ? (
                  <Image
                    src={data.personal.profileImage}
                    alt={data.personal.name}
                    fill
                    className="object-cover rounded-full"
                  />
                ) : (
                  <span className="text-gray-400 dark:text-gray-600 text-xs sm:text-sm">
                    Profile Image
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
