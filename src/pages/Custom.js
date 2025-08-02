/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

export default function Custom() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen bg-[#f5ebe0] mt-20 p-8">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-[#6b4f3b]">Custom Painting Solutions</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Every space is unique. We offer personalized painting services that reflect your style and story.
          </p>
          <img
            src="/custom.png"
            alt="Custom Painting"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-700 text-base text-center">
            Our custom services bring your imagination to life—whether it is textured walls, intricate murals, or designer patterns.
          </p>
        </div>

        {/* Highlights Section */}
        <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Textured Finishes', desc: 'Create tactile elegance with stucco, marble, or grain effects.', img: '/texture.png' },
            { title: 'Wall Murals', desc: 'Add personality and charm with hand-painted or digital murals.', img: '/mural.png' },
            { title: 'Theme Rooms', desc: 'Design with purpose: from kids rooms to calming spa spaces.', img: '/theme.png' },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-xl">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-[#6b4f3b] mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Our Process */}
        <div className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center text-[#6b4f3b] mb-8">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { step: 'Consult', icon: '🧠', desc: 'Understand your vision and space.' },
              { step: 'Design', icon: '🎨', desc: 'Create custom concepts and samples.' },
              { step: 'Paint', icon: '🖌️', desc: 'Bring it to life with precision.' },
              { step: 'Deliver', icon: '🏡', desc: 'Clean, inspect, and finalize your space.' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-[#6b4f3b] mb-2">{item.step}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center text-[#6b4f3b] mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">We never imagined our walls could look like art pieces. Their custom service was outstanding!</p>
              <p className="text-right mt-4 font-semibold text-[#6b4f3b]">— Radhika & Arjun</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">Beautiful finish, quick work, and great communication. I highly recommend their custom paint team!</p>
              <p className="text-right mt-4 font-semibold text-[#6b4f3b]">— Ankit M.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
