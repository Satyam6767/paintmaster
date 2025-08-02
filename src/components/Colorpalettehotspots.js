/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function ColorPaletteWithHotspots() {
  const colors = [
    { name: "Creamy Beige", hex: "#E3D5CA", top: "22%", left: "30%" },
    { name: "Soft Clay", hex: "#D5BDAF", top: "10%", left: "65%" },
    { name: "Golden Frame", hex: "#D6B86C", top: "50%", left: "78%" },
    { name: "Ocean Blue", hex: "#6DAEDB", top: "50%", left: "93%" },
    { name: "Terracotta Accent", hex: "#C77A63", top: "45%", left: "43%" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#e7d9c5] px-10 pt-28 pb-10 flex flex-col items-center justify-center space-y-10">
      
      {/* Introductory Heading */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Signature Color Gallery</h1>
        <p className="text-lg text-gray-700">
          Every shade tells a story. Experience our handpicked color palette curated for elegance, style, and inspiration. Explore how each color breathes life into spaces.
        </p>
      </div>

      {/* Cards Row */}
      <div className="flex flex-wrap justify-center items-center gap-10 w-full max-w-[1200px]">
        {/* Left Card */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white shadow-lg rounded-xl p-6 max-w-md w-full"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Discover Your Perfect Shade
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Dive into a vibrant selection of premium paints designed to elevate your space.
            Whether you’re inspired by the calming tones of nature, warm earth shades, or modern hues,
            we offer a wide range of options to match your style and personality.
            Hover over the image to explore the palette!
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white shadow-md rounded-2xl overflow-hidden p-4 max-w-[600px] w-full"
        >
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
            <img
              src="/CPH.png"
              alt="Color Hotspot"
              className="object-cover w-full h-full rounded-xl"
            />
            {colors.map((color, index) => (
              <div
                key={index}
                className="absolute group"
                style={{
                  top: color.top,
                  left: color.left,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Dot */}
                <div
                  className="w-5 h-5 rounded-full border-2 border-white shadow-md cursor-pointer z-10 transition transform hover:scale-125"
                  style={{ backgroundColor: color.hex }}
                ></div>

                {/* Ping Animation */}
                <div
                  className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full opacity-50 animate-ping pointer-events-none"
                  style={{
                    backgroundColor: color.hex,
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>

                {/* Tooltip */}
                {hoveredIndex === index && (
                  <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 bg-white text-gray-800 px-3 py-1 rounded shadow text-sm z-20 whitespace-nowrap">
                    <strong>{color.name}</strong> <br />
                    {color.hex}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Closing Text */}
      <div className="text-center max-w-xl text-gray-800 text-lg mt-4">
        Ready to give your walls a fresh personality? Explore our collection of tones that spark emotion and creativity.
      </div>

      {/* CTA Button */}
      <Link href="/Explore">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-3 bg-[#C77A63] text-white rounded-lg text-lg shadow-md hover:bg-[#a45a49] transition"
        >
          Explore the World of Colors
        </motion.button>
      </Link>
    </div>
  );
}
