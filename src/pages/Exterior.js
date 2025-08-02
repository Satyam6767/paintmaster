/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    title: "Residential Exterior Painting",
    description: "Boost curb appeal and protect your home from weathering. Our team ensures clean finishes, weatherproof coatings, and minimal disruption to your day-to-day.",
    image: "/exterior1.png",
  },
  {
    title: "Commercial Building Painting",
    description: "We handle painting for offices, showrooms, and multi-story commercial buildings with industrial-grade finishes and a professional touch.",
    image: "/exterior2.png",
  },
  {
    title: "Weatherproof Coating",
    description: "Our advanced coatings guard against rain, heat, dust, and pollution. Ideal for coastal or high-humidity regions.",
    image: "/exterior3.png",
  },
  {
    title: "Wall Surface Preparation",
    description: "Cracks? Peeling paint? We thoroughly sand, prime, and repair all surfaces for a smooth, long-lasting finish.",
    image: "/exterior4.png",
  },
  
];

const faqs = [
  {
    question: "How long does exterior paint typically last?",
    answer: "With our premium products, your exterior paint can last 7–10 years depending on weather conditions and surface prep.",
  },
  {
    question: "Do you offer waterproofing solutions?",
    answer: "Absolutely. We offer waterproof primers and elastomeric coatings designed for high-moisture zones.",
  },
  {
    question: "What surfaces can you paint?",
    answer: "We paint concrete, wood, metal, stucco, and brick – each with appropriate surface preparation.",
  },
];

export default function Exterior() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#f5ebe0] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-amber-900 mb-4">Exterior Painting Services</h1>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From cozy homes to large-scale commercial buildings, our expert exterior services transform and protect every wall with precision and style.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                  <summary className="font-medium text-gray-800">{faq.question}</summary>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-amber-100 p-8 rounded-xl text-center shadow-inner">
            <h2 className="text-2xl font-semibold text-amber-900 mb-2">Need a Fresh Coat?</h2>
            <p className="text-gray-700 mb-4">Contact us today to schedule your free consultation and color assessment.</p>
            <button className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition">
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
