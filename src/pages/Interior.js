//*eslint-disable @next/next/no-img-element */
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const benefits = [
  "Expert color consultation to match your style",
  "Use of high-quality, low-odor, eco-friendly paints",
  "Clean and hassle-free experience",
  "Precise workmanship with attention to detail",
  "Affordable and transparent pricing",
];

export default function Interior() {
  return (
    <div className="bg-gradient-to-br from-[#f2ebe6] to-white text-black">
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Interior Painting Services
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Transform your home into a beautiful, comforting space with our professional interior painting solutions.
            Whether you prefer bold accent walls or calm neutral tones, our team ensures precision and perfection in every brushstroke.
          </motion.p>

          <motion.img
            src="/bg1.png"
            alt="Interior Painting"
            className="w-full max-h-[400px] object-cover rounded-xl shadow-lg mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-12 items-center px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Why Choose Our Interior Services?</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="hover:translate-x-1 transition-transform duration-300">
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.img
            src="/CPH.png"
            alt="Interior Room Design"
            className="rounded-lg shadow-xl object-cover h-80 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-3">Let us Color Your World!</h3>
          <p className="text-gray-700 mb-6">
            Contact us today for a free estimate or to schedule a home consultation.
          </p>
          <Link href="/Contact">
            <span className="inline-block bg-[#c77a63] hover:bg-[#a45a49] text-white px-8 py-3 rounded-full text-lg font-medium transition cursor-pointer shadow-lg">
              Get a Free Quote
            </span>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
  