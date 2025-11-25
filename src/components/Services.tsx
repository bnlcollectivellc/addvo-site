"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useContact } from "./ContactContext";

const services = [
  {
    title: "Enterprise Software Development",
    description:
      "Custom software solutions built for large-scale businesses, helping you streamline processes and enhance productivity.",
    media: "/images/services/enterprise.mp4",
    isVideo: true,
  },
  {
    title: "Mobile App Cross Development",
    description:
      "Build powerful mobile apps that work seamlessly across platforms, giving your users the best experience on any device.",
    media: "/images/services/mobile.jpeg",
    isVideo: false,
  },
  {
    title: "IT Consulting",
    description:
      "Expert IT support for small and large businesses, helping you leverage technology to grow and improve your operations.",
    media: "/images/services/it-consulting.jpg",
    isVideo: false,
  },
  {
    title: "Dedicated Development Remote Team",
    description:
      "Hire a remote team of developers tailored to your project needs, working closely with you to deliver the best results.",
    media: "/images/services/remote-team.jpeg",
    isVideo: false,
  },
  {
    title: "UI/UX Modern Testing & Development",
    description:
      "Ensure your app or website offers a smooth and intuitive experience with modern design and user testing services.",
    media: "/images/services/uiux.jpeg",
    isVideo: false,
  },
  {
    title: "Q&A Testing Dedicate Team Service",
    description:
      "A dedicated team focused on testing your software to guarantee top quality and bug-free performance.",
    media: "/images/services/qa-testing.jpg",
    isVideo: false,
  },
  {
    title: "Marketing",
    description:
      "Grow your business with data-driven marketing, SEO, and social media that boosts visibility and brings in the right customers. Drive engagement, reach new customers, and scale with smart solutions.",
    media: "/images/services/marketing.jpg",
    isVideo: false,
  },
  {
    title: "AI Receptionist",
    description:
      "Smart AI-driven reception services that automate calls, messages and scheduling, giving your customers fast, accurate support around the clock.",
    media: "/images/services/ai-receptionist.jpg",
    isVideo: false,
  },
  {
    title: "VoIP – Voice Over IP",
    description:
      "Cloud-based telephony with secure, high-quality voice services that scale with your business and keep your team reachable on any device, anywhere.",
    media: "/images/services/voip.jpg",
    isVideo: false,
  },
  {
    title: "Company Mobile Solutions",
    description:
      "Complete mobility solutions for modern teams. From corporate devices to managed services, helping you streamline operations and keep everyone connected.",
    media: "/images/services/mobile-solutions.jpg",
    isVideo: false,
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { openContact } = useContact();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-grey-100 rounded-2xl overflow-hidden flex flex-col h-full"
    >
      {/* Media */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {service.media ? (
          service.isVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            >
              <source src={service.media} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={service.media}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-grey-300 to-grey-400" />
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
        <p className="text-grey-600 text-sm leading-relaxed flex-grow">
          {service.description}
        </p>
        <button
          onClick={openContact}
          className="btn-primary-dark text-sm mt-4 self-start"
        >
          Get in touch
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="11" fill="white" stroke="white" strokeWidth="2" />
            <path
              d="M10 8L14 12L10 16"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

function AccordionItem({
  service,
  isOpen,
  onToggle,
}: {
  service: (typeof services)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { openContact } = useContact();

  return (
    <div className="border-b border-grey-200">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-black">{service.title}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4">
              {/* Media */}
              {service.media && (
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  {service.isVideo ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={service.media} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={service.media}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  )}
                </div>
              )}

              <p className="text-grey-600 mb-4">{service.description}</p>
              <button
                onClick={openContact}
                className="btn-primary-dark text-sm"
              >
                Get in touch
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="11" fill="white" stroke="white" strokeWidth="2" />
                  <path
                    d="M10 8L14 12L10 16"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-12 md:mb-16"
        >
          Services
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden">
          {services.map((service, index) => (
            <AccordionItem
              key={service.title}
              service={service}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
