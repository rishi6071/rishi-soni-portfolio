import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "../ui/MobileMenu";
import ScrollButton from "../ui/ScrollButton";

const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Portfolio" },
  { id: "experience", label: "Experience" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded"></div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-black dark:text-white">
                Rishi Soni
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                Frontend Engineer
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <ScrollButton
                key={item.id}
                sectionId={item.id}
                headerOffset={24}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </ScrollButton>
            ))}
            <ScrollButton
              sectionId="contact"
              headerOffset={24}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
            >
              Contact me
            </ScrollButton>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
        {/* Mobile Menu Content - rendered by MobileMenu component */}
      </nav>
    </header>
  );
}
