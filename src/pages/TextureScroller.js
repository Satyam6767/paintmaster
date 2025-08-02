/* eslint-disable @next/next/no-img-element */
import React from 'react';

const images = ['T1.png', 'T2.png', 'T3.png', 'T4.png', 'T5.png', 'T6.png'];

const TextureScroller = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-16">
      {/* Section Heading */}
      <div className="text-center mb-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Discover Our Exclusive Wall Texture Collection
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Elevate your interiors with our curated range of artistic wall textures. From modern minimalism to bold abstract patterns, our textures redefine how walls express personality.
        </p>
        <p className="text-md text-gray-500">
          Each texture is crafted using the finest materials and designed to inspire creativity and elegance in every space — be it residential, commercial, or hospitality interiors.
        </p>
       
      </div>

      {/* Scrolling Texture Images */}
      <div className="scroll-track flex animate-scroll whitespace-nowrap">
        {[...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 mx-2">
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 hover:rotate-45 hover:scale-110 transition-all duration-500 overflow-hidden">
              <img
                src={src}
                alt={`Texture ${index + 1}`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Inline CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .scroll-track {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default TextureScroller;
