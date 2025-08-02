"use client"; // if you're in app router

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  PaintRoller,
  Brush,
  Award,
  Palette,
} from "lucide-react";

const stats = [
  {
    icon: <PaintRoller className="w-12 h-12 text-[#0d5c52]" />,
    value: 3620,
    label: "Project Complete",
  },
  {
    icon: <Brush className="w-12 h-12 text-[#0d5c52]" />,
    value: 8756,
    label: "Satisfied Clients",
  },
  {
    icon: <Award className="w-12 h-12 text-[#0d5c52]" />,
    value: 8796,
    label: "Awards Winning",
  },
  {
    icon: <Palette className="w-12 h-12 text-[#0d5c52]" />,
    value: 4563,
    label: "Multi Color System",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#f8f5f0] py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-gray-800">
              <CountUp end={stat.value} duration={2} />
            </h3>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </motion.div>
        ))}

        {/* Center static blocks */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1 flex flex-col items-center justify-center text-center space-y-4">
          <div className="bg-[#0d5c52] text-white rounded-lg px-6 py-8 w-full shadow-md">
            <h3 className="text-4xl font-semibold">25</h3>
            <p className="text-lg">Year Of Experience</p>
          </div>
          <div className="bg-yellow-400 text-black rounded-lg px-6 py-8 w-full shadow-md font-semibold">
            <p className="text-lg">Professional<br />& Trusted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
