"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContact } from "./ContactContext";

export default function CTA() {
  const { openContact } = useContact();

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/footer.jpeg"
        alt="Background"
        fill
        className="object-cover kenburns"
        sizes="100vw"
        priority
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[500px] md:min-h-[600px] px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl"
        >
          Ready to Take Your Company to The Next Level?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
        >
          We&apos;ll help you reach new heights and stay ahead of the competition.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={openContact}
          className="btn-primary text-lg"
        >
          Let&apos;s Talk
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
        </motion.button>
      </div>
    </section>
  );
}
