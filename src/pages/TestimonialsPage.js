/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Interior Designer",
    message: "PaintMasters has transformed my design process. Their color palettes are thoughtful, trendy, and always wow my clients!",
    image: "client1.png",
  },
  {
    name: "Riya Sharma",
    title: "Homeowner",
    message: "The paint suggestions were spot on! Our living room has never looked more vibrant and cozy.",
    image: "client2.png",
  },
  {
    name: "Kunal Joshi",
    title: "Architect",
    message: "Their collection is inspiring. Every shade tells a story. It’s been a great addition to our workflow.",
    image: "client3.png",
  },
  {
    name: "Sneha Kapoor",
    title: "Boutique Owner",
    message: "Thanks to PaintMasters, my store now has the perfect aesthetic. Customers often ask about the wall shades!",
    image: "client4.png",
  },
  {
    name: "Vikram Shah",
    title: "Real Estate Developer",
    message: "Reliable, innovative, and stylish – PaintMasters delivers every time. Our buyers always notice the difference.",
    image: "client5.png",
  },
  {
    name: "Harshvardhan Shetty",
    title: "Freelance Decorator",
    message: "The team truly understands how color influences space. I use their palettes in all my projects.",
    image: "client6.png",
  },
  {
    name: "Raghav Verma",
    title: "Café Owner",
    message: "People keep complimenting the vibe of our café, and PaintMasters' palette is a big reason why!",
    image: "client7.png",
  },
  {
    name: "Tanish Mishra",
    title: "Lifestyle Blogger",
    message: "From earthy tones to vibrant shades, they always have what I need. Love their service and quality!",
    image: "client8.png",
  },
  {
    name: "Devansh Rathi",
    title: "Renovation Consultant",
    message: "It is  rare to find a brand so consistent in excellence. Their color sense is unmatched.",
    image: "client9.png",
  },
];

const TestimonialsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#f5ebe0] py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-amber-900 mt-10 mb-4"> 
          What Our Clients Say
        </h1>

        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-4">
          At PaintMasters, we take pride in bringing your vision to life through color. 
          Our clients range from homeowners to top architects and designers who trust us for our precision, 
          quality, and palette diversity.
        </p>

        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-8">
          Here is what some of them have to say about their journey with us. 
          Whether you are planning a complete makeover or a subtle refresh, 
          their stories might just inspire your next project!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border"
                />
                <div>
                  <h2 className="text-lg font-semibold text-black">{testimonial.name}</h2>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">“{testimonial.message}”</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-semibold text-amber-900 mb-4">Why People Love PaintMasters</h2>
          <p className="text-gray-700 mb-4">
            • Expert-curated color palettes based on the latest design trends.<br />
            • High-quality paint recommendations for every surface.<br />
            • Exceptional customer service that walks with you from idea to execution.<br />
            • A vibrant community of designers, homeowners, and professionals sharing their color stories.
          </p>
          <p className="text-gray-700">
            Join the PaintMasters family and discover a new way to experience color. Your walls are waiting to tell their story!
          </p>
        </div>

        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
