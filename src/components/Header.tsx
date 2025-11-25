"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContact } from "./ContactContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openContact } = useContact();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-6">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold text-white hover:opacity-80 transition-opacity"
        >
          ADDVO
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-white hover:opacity-80 transition-opacity font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="text-white hover:opacity-80 transition-opacity font-medium"
          >
            About
          </button>
          <button
            onClick={openContact}
            className="text-white hover:opacity-80 transition-opacity font-medium"
          >
            Contact
          </button>
          <button
            onClick={openContact}
            className="btn-primary"
          >
            Get Connected
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
              <path
                d="M10 8L14 12L10 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-white text-2xl font-medium hover:opacity-80 transition-opacity"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-white text-2xl font-medium hover:opacity-80 transition-opacity"
              >
                About
              </button>
              <button
                onClick={() => {
                  openContact();
                  setIsMobileMenuOpen(false);
                }}
                className="text-white text-2xl font-medium hover:opacity-80 transition-opacity"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  openContact();
                  setIsMobileMenuOpen(false);
                }}
                className="btn-primary mt-4"
              >
                Get Connected
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M10 8L14 12L10 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white p-2"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
