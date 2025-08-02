/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const colorThemes = [
  {
    title: "Sunset Glow",
    image: "/1.png",
    hoverImage: "/2.png",
  },
  {
    title: "Ocean Breeze",
    image: "/3.png",
    hoverImage: "/4.png",
  },
  {
    title: "Forest Whisper",
    image: "/5.png",
    hoverImage: "/6.png",
  },
  {
    title: "Coral Bloom",
    image: "/7.png",
    hoverImage: "/8.png",
  },
  {
    title: "Lavender Mist",
    image: "/9.png",
    hoverImage: "/10.png",
  },
  {
    title: "Desert Sand",
    image: "/11.png",
    hoverImage: "/12.png",
  },
  {
    title: "Royal Velvet",
    image: "/13.png",
    hoverImage: "/14.png",
  },
  {
    title: "Skyline",
    image: "/15.png",
    hoverImage: "/16.png",
  },
  {
    title: "Autumn Leaves",
    image: "/17.png",
    hoverImage: "/18.png",
  },
  {
    title: "Mint Fresh",
    image: "/19.png",
    hoverImage: "/20.png",
  },
];

const ColorCatalogue = () => {
  const scrollRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-[#f0d6c6] py-16 px-6">
      {/* Top Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Color Catalogue</h2>
        <p className="text-lg text-gray-700 mb-3">
          Welcome to our curated Color Catalogue – a perfect place to explore color themes that inspire, energize, and transform your living spaces.
        </p>
        <p className="text-md text-gray-600">
          Each palette below is carefully designed to reflect natural moods, seasons, and aesthetics. Hover to experience the unique transformation of each theme.
        </p>
      </div>

      {/* Scroll Buttons */}
      <div className="flex justify-center mb-6">
        <div className="flex gap-3">
          <button onClick={() => scroll('left')} className="bg-white hover:bg-pink-100 p-2 rounded-full shadow-md transition">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="bg-white hover:bg-pink-100 p-2 rounded-full shadow-md transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 py-4 px-4 scroll-smooth scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-pink-100"
      >
        {colorThemes.map((theme, index) => (
          <div
            key={index}
            className="min-w-[240px] w-[240px] h-[360px] rounded-2xl overflow-hidden shadow-xl bg-white flex flex-col transform hover:scale-105 transition duration-300 ease-in-out"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="relative h-full">
              <img
                src={hoverIndex === index ? theme.hoverImage : theme.image}
                alt={theme.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-0 w-full bg-white/80 text-center py-2">
                <h3 className="font-semibold text-gray-800 text-base">{theme.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="max-w-3xl mx-auto text-center mt-12">
        <p className="text-md text-gray-700 mb-2">
          Looking for something specific or custom? We’re here to help you find the perfect color combination that reflects your personality and lifestyle.
        </p>
        <p className="text-lg font-medium text-gray-800">
          Let colors speak for you — start your transformation journey today!
        </p>
      </div>
    </div>
  );
};

export default ColorCatalogue;
