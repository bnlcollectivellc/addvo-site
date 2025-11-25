"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-grey-100">
      {/* Vision & Mission Grid */}
      <div className="grid md:grid-cols-2">
        {/* Our Vision */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[400px] md:min-h-[500px] overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/vision.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-12 lg:p-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-white/90 leading-relaxed">
              To be the leading tech partner for businesses driving digital
              transformation. We envision a future where tech powers every part of
              a company: agile, adaptable, and built to thrive. We don&apos;t just
              solve problems, we redefine what&apos;s possible. Tech pros who
              genuinely give a damn.
            </p>
          </div>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative min-h-[400px] md:min-h-[500px] overflow-hidden"
        >
          <Image
            src="/images/mission.png"
            alt="Our Mission"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-12 lg:p-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-white/90 leading-relaxed">
              Transform how companies work with ADDVO&apos;s proven methods and
              innovative tech solutions. We help businesses grow with smart,
              scalable IT strategies that boost innovation, streamline workflows,
              and strengthen digital capabilities. We turn complex challenges into
              opportunities for success in today&apos;s fast-paced tech world!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Final Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-24 px-6 md:px-12 text-center bg-grey-100"
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-grey-800 max-w-4xl mx-auto leading-relaxed">
          Together, we&apos;ll break barriers and unlock your business&apos;s
          potential: Turning every tech challenge into a breakthrough through
          tailored solutions and elite teams.
        </p>
      </motion.div>
    </section>
  );
}
