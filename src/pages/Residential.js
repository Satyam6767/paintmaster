/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

export default function Residential() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#d2bfa0] px-6 py-20 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-10">
          <h1 className="text-4xl font-bold text-black mb-6">Residential Painting</h1>
          <img
            src="/residential.png"
            alt="Residential"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-black text-lg leading-relaxed">
            Transform your home with vibrant colors and expert finishes. Our residential painting services are tailored
            to enhance the beauty and comfort of your living space. Whether you are renovating a single room or the entire
            house, we provide meticulous attention to detail, color consultation, and clean, timely execution.
            <br /><br />
            We specialize in both interior and exterior residential painting. From accent walls to textured finishes, 
            we offer a variety of techniques and paint types to suit your personal taste and architectural style. 
            Our experienced painters ensure smooth application, surface preparation, and durable finishes that withstand time.
            <br /><br />
            We take pride in using eco-friendly, low-VOC paints that are safe for your family and pets. Our team ensures
            minimal disruption during the process by maintaining cleanliness, protecting your furniture, and sticking to schedules.
            <br /><br />
            Whether it’s refreshing your living room, revamping your kitchen cabinets, or giving your entire house a new personality,
            we’re here to bring your vision to life with color, care, and craftsmanship.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
