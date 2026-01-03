import data from "../../../data";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 {data.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
