/* eslint-disable @next/next/no-img-element */
// pages/GalleryPage.js
import React from "react";

const images = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/8.png",
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Our Gallery</h1>
        <p className="text-gray-600 mt-2">Explore the colors we bring to life</p>
      </div>

      {/* New Descriptive Text Section */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-gray-700 text-lg leading-relaxed">
          At Loop and Love, we pour creativity and craftsmanship into every thread. 
          Our gallery is a testament to the beauty of handcrafted crochet — vibrant hues, 
          intricate patterns, and the love that ties it all together. From cozy essentials 
          to decorative pieces, each photo below captures the essence of our work.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md group relative"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold">
              Photo {index + 1}
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
}
