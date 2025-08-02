/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Residential Painting',
    description:
      'Transform your home with vibrant colors and expert finishes. Our residential painting services are tailored to enhance the beauty and comfort of your living space.',
    image: '/residential.png',
    link: '/Residential',
  },
  {
    title: 'Commercial Painting',
    description:
      'Make a lasting impression on clients with our commercial painting solutions. We ensure a professional look for offices, shops, and other business premises.',
    image: '/commercial.png',
    link: '/Commercial',
  },
  {
    title: 'Industrial Painting',
    description:
      'Durable and efficient painting for factories, warehouses, and large industrial units. We use high-performance coatings for long-lasting protection.',
    image: '/industrial.png',
    link: '/Industrial',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#d2bfa0] px-6 py-20 flex items-center justify-center">
      <div className="w-full max-w-7xl p-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div className="cursor-pointer bg-white/20 backdrop-blur-lg rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-white/30">
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-black  mb-3">{service.title}</h2>
                  <p className="text-black">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
