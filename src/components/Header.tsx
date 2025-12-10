import React from "react";

const Header: React.FC = () => {
  return (
    <header className="glass-header shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-white">EmailJS Contact</h1>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white/80 hover:text-white transition duration-300"
            >
              Home
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
