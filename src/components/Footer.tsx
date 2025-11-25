"use client";

import { useContact } from "./ContactContext";

export default function Footer() {
  const { openContact } = useContact();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black py-12 md:py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">ADDVO</h3>
            <p className="text-grey-400">
              While others fill roles, we build real solutions.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h4 className="text-white font-semibold mb-4">Sections</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-grey-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={openContact}
                  className="text-grey-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-grey-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-4">Socials</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/addvo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  LinkedIn
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/addvoab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Instagram
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-grey-800">
          <p className="text-grey-500 text-sm text-center">
            © {new Date().getFullYear()} ADDVO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
