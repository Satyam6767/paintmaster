/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Commercial() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#d2bfa0] px-6 py-20">
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-10">
          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold text-black text-center mb-8">
            Commercial Painting Services
          </h1>

          {/* Banner Image */}
          <img
            src="/commercial.png"
            alt="Commercial Painting"
            className="w-full h-80 object-cover rounded-xl mb-8 shadow-lg"
          />

          {/* Introduction */}
          <p className="text-lg text-black text-center mb-8">
            Enhance your business presence with professional painting solutions tailored to commercial spaces.
            From corporate offices and retail stores to hotels and industrial buildings, we offer reliable, fast,
            and high-quality painting that leaves a lasting impression.
          </p>

          {/* Section: Why Choose Us */}
          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-black mb-4">Why Choose Our Commercial Services?</h2>
            <ul className="list-disc list-inside text-black  text-lg space-y-2 pl-4">
              <li>Minimal downtime — we work evenings and weekends if needed</li>
              <li>High-quality, weather-resistant paints that last</li>
              <li>Certified professionals with safety training</li>
              <li>Custom solutions for branding, mood, and layout</li>
              <li>Color consultation included</li>
            </ul>
          </div>

         

          {/* Final CTA */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-black mb-3">Ready to elevate your commercial space?</h3>
            <p className="text-black mb-6">
              Contact us today to schedule a consultation or request a quote. Our team is here to transform your business environment!
            </p>
            <Link href="/Contact">
              <span className="inline-block bg-[#c77a63] hover:bg-[#a45a49] text-white px-8 py-3 rounded-full text-lg font-medium transition cursor-pointer">
                Request a Quote
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
