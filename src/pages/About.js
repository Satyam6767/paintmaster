/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const aboutContent = [
  {
    title: "Our Mission",
    text: `We exist to inspire creativity through the power of color. Whether you're a homeowner, artist, or designer, our mission is to make color choice seamless, joyful, and impactful.`,
    image: "/bg1.png", // ✅ New image
  },
  {
    title: "Why Color Matters",
    text: `Color is more than visual—it's emotional. It affects mood, energy, and perception. We help you use color as a powerful tool to transform spaces and ideas.`,
    image: "/bg4.png", // ✅ New image
  },
  {
    title: "Crafted With Purpose",
    text: `Every palette, every shade, every suggestion we offer is hand-picked with intent—balancing beauty, harmony, and versatility.`,
    image: "/bg3.png", // ✅ New image
  },
];

export default function About() {
  return (
    <div className="bg-[#f5ebe0] text-gray-800">
      <Navbar />

      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center px-6 py-20 text-center bg-gradient-to-b from-[#f3d6c1] to-[#f5ebe0]">
        <motion.h1
          className="text-5xl font-bold text-[#5a3e36] mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Who We Are
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          More than paint. More than design. We are a passionate team dedicated to transforming everyday spaces
          into something extraordinary — with nothing but the magic of color.
        </motion.p>
      </section>

      {/* About Details */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {aboutContent.map((item, i) => (
          <motion.div
            key={item.title}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/2 rounded-xl shadow-lg object-cover h-72"
            />
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold text-[#5a3e36]">{item.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-[#e7d5c0] rounded-t-3xl shadow-inner">
        <motion.h3
          className="text-3xl font-bold text-[#5a3e36] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Color Your Space?
        </motion.h3>
        <motion.p
          className="text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Let us bring beauty, harmony, and personality into your space—one stroke at a time.
        </motion.p>
        <Link href="/Contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#c77a63] hover:bg-[#a45a49] text-white px-8 py-3 rounded-full text-lg shadow-lg transition"
          >
            Contact Us
          </motion.button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
