"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContact } from "./ContactContext";

const serviceOptions = [
  "Select...",
  "Enterprise Software Development",
  "Mobile App Cross Development",
  "IT Consulting",
  "Dedicated Development Remote Team",
  "UI/UX Modern Testing & Development",
  "Q&A Testing Dedicate Team Service",
  "Marketing",
  "AI Receptionist",
  "VoIP – Voice Over IP",
  "Company Mobile Solutions",
];

export default function ContactOverlay() {
  const { isContactOpen, closeContact } = useContact();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    closeContact();
    // Reset form after animation
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isContactOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-grey-900 rounded-2xl p-6 md:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            {/* Back Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 left-4 text-white/70 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </button>

            {isSubmitted ? (
              /* Success Message */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                <p className="text-grey-400">We&apos;ll be in touch soon.</p>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="mt-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  Get in Touch
                </h2>

                {/* Name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-white/80 text-sm mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-grey-800 border border-grey-700 rounded-lg text-white placeholder-grey-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-white/80 text-sm mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-grey-800 border border-grey-700 rounded-lg text-white placeholder-grey-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-white/80 text-sm mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-grey-800 border border-grey-700 rounded-lg text-white placeholder-grey-500 focus:outline-none focus:border-white transition-colors"
                    placeholder="+46 70 123 4567"
                  />
                </div>

                {/* Service */}
                <div className="mb-4">
                  <label
                    htmlFor="service"
                    className="block text-white/80 text-sm mb-2"
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-grey-800 border border-grey-700 rounded-lg text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option === "Select..." ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-white/80 text-sm mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-grey-800 border border-grey-700 rounded-lg text-white placeholder-grey-500 focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Submit form
                      <svg
                        width="20"
                        height="20"
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
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
