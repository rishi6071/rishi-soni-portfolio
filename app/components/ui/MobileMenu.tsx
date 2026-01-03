"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollToSection } from "../utils";

const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Portfolio" },
  { id: "experience", label: "Experience" },
];

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollToSection(id, 24);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <FaTimes className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <FaBars className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        )}
      </button>

      {mobileMenuOpen && (
        <div className="md:hidden pb-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScroll("contact")}
            className="block w-full text-left px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
          >
            Contact me
          </button>
        </div>
      )}
    </>
  );
}
