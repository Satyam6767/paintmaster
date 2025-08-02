// pages/StoreLocation.js
//* eslint-disable @next/next/no-img-element */
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

export default function StoreLocation() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <section className="text-center py-16 px-6 bg-gradient-to-br text-black">
        <h1 className="text-4xl font-bold mb-4">Visit Our Store</h1>
        <p className="text-lg text-black max-w-xl mx-auto">
          We welcome you to visit our store and explore our painting services in person. Here is our exact location:
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4158732640403!2d73.7950218!3d18.5552805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2762e31bab%3A0x34e04b3504af07d4!2sPurushottam%20Plaza!5e0!3m2!1sen!2sin!4v1753441618555!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
