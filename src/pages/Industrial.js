/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

export default function Industrial() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#d2bfa0] px-6 py-20 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-10">
          <h1 className="text-4xl font-bold text-black mb-6">Industrial Painting</h1>
          <img
            src="/industrial.png"
            alt="Industrial"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-black text-lg leading-relaxed">
            Our industrial painting services are designed for factories, warehouses, plants, and other large-scale
            facilities. We use high-performance coatings and durable materials that stand up to heavy wear, extreme
            weather, and chemical exposure. Safety and longevity are our top priorities.
            <br /><br />
            From surface preparation to final coating, we ensure every step is handled with precision and industry-grade
            standards. Our team is trained to work in hazardous environments and can adapt to strict industrial safety protocols.
            We offer solutions such as rust-proof coatings, anti-corrosive treatments, epoxy flooring, and fire-retardant finishes.
            <br /><br />
            Whether you need maintenance coating or a complete repaint, our services are tailored to extend the life of your
            assets while minimizing downtime. Let us help you protect your infrastructure and maintain operational efficiency
            with reliable, high-quality industrial painting solutions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
