"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Blurb() {
  return (
    <section className="py-16 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-grey-800 leading-relaxed">
              Don&apos;t settle for &quot;good enough.&quot; Take your product and your operations to the next level with ADDVO.
              <br /><br />
              From telephony and IT to print, conference solutions, and office supplies, we cover your entire operational ecosystem.
              <br /><br />
              Whatever your organisation needs, we deliver it with precision, speed and truly scalable expertise.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/support.jpeg"
              alt="ADDVO team support"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
