"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    id: "vanessa",
    name: "Vanessa Vo",
    title: "CEO",
    photo: "/images/team/vanessa.png",
    bio: "The ultimate multitasker! When she's not brainstorming brilliant business ideas, she's designing for her own children's clothing brand, VANVO. Obsessed with fashion and self-development - soaks up podcasts and books like they're going out of style!",
    zoom: false,
  },
  {
    id: "samuel",
    name: "Samuel Albertsson",
    title: "Partnership Growth Lead",
    photo: "/images/team/samuel.png",
    bio: 'A tech gadget geek by day, gym enthusiast by night, and a relationship-building legend 24/7. People can\'t get enough of his genuine, honest vibes... and neither can sales! When he\'s not closing deals, he\'s probably closing his fitness rings or sharing a laugh with friends.',
    zoom: "110",
  },
  {
    id: "lucas",
    name: "Lucas Vo",
    title: "Country Sales Manager",
    photo: "/images/team/lucas.jpeg",
    bio: "Gadget guru, tech trendsetter, and innovation enthusiast. He's the guy who's always a step ahead, whether it's the latest must-have device or the next big tech breakthrough. Lucas lives on the cutting edge, constantly hunting down what's new and making it look effortless.",
    zoom: false,
  },
  {
    id: "chanaka",
    name: "Chanaka Mannapperuma",
    title: "Chief Data & Technology Officer",
    photo: "/images/team/chanaka.png",
    bio: "Bio coming soon.",
    zoom: "115",
  },
  {
    id: "emilia",
    name: "Emilia Gautruche",
    title: "Regional Sales Manager",
    photo: "/images/team/emilia.jpeg",
    bio: "Her love for all things French runs deep, from the language to the culture, and she always makes time for her cherished second house in the south of France. Whether she's spending time with her family or savoring the simple pleasures of life in France, Emilia always finds a way to make it special.",
    zoom: false,
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <section id="team" className="pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Our Team
          </h2>
          <p className="text-grey-600 max-w-2xl mx-auto text-lg">
            A tight-knit team of designers, developers, and strategists turning
            bold ideas into digital realities. We move fast, think smart, and
            build with purpose.
          </p>
        </motion.div>

        {/* Team Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Mobile: 3 on first row, 2 on second row */}
          <div className="flex flex-wrap justify-center gap-4 md:hidden">
            {/* First row - 3 members */}
            <div className="flex justify-center gap-4 w-full">
              {teamMembers.slice(0, 3).map((member) => (
                <button
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className={`relative w-24 h-24 rounded-full overflow-hidden transition-all duration-300 ${
                    selectedMember.id === member.id
                      ? "opacity-100 ring-4 ring-black ring-offset-4"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={member.zoom ? { transform: `scale(1.${member.zoom.toString().slice(-2)})` } : undefined}
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
            {/* Second row - 2 members */}
            <div className="flex justify-center gap-4 w-full">
              {teamMembers.slice(3, 5).map((member) => (
                <button
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className={`relative w-24 h-24 rounded-full overflow-hidden transition-all duration-300 ${
                    selectedMember.id === member.id
                      ? "opacity-100 ring-4 ring-black ring-offset-4"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={member.zoom ? { transform: `scale(1.${member.zoom.toString().slice(-2)})` } : undefined}
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: all in one row */}
          <div className="hidden md:flex justify-center gap-8">
            {teamMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`relative w-36 h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden transition-all duration-300 ${
                  selectedMember.id === member.id
                    ? "opacity-100 ring-4 ring-black ring-offset-4"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  style={member.zoom ? { transform: `scale(1.${member.zoom.toString().slice(-2)})` } : undefined}
                  sizes="(max-width: 1024px) 112px, 128px"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Selected Member Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMember.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
              {selectedMember.name}
            </h3>
            <p className="text-grey-500 font-medium mb-4">{selectedMember.title}</p>
            <p className="text-grey-700 max-w-2xl mx-auto leading-relaxed">
              {selectedMember.bio}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
