'use client'
import { useState } from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function BlogPage() {
  const [expandedPost, setExpandedPost] = useState(null)

  const blogPosts = [
    {
      title: "10 Tips to Make Your Home Shine",
      description: "Learn how a fresh coat of paint and clever color choices can completely transform your space.",
      fullText: "Painting your home is one of the easiest ways to give it a fresh, updated look. Start with lighter tones to open up the space, and always test your samples on the wall before committing. Lighting matters!",
      date: "July 15, 2025",
      image: "/Blog1.png",
    },
    {
      title: "Trending Wall Colors in 2025",
      description: "Explore the latest interior design color trends dominating modern homes this year.",
      fullText: "In 2025, earthy tones like terracotta, olive green, and warm beige are making a strong comeback. Pair them with minimalist decor for a modern, cozy vibe.",
      date: "July 10, 2025",
      image: "/Blog2.png",
    },
    {
      title: "Why Primer is a Must Before Painting",
      description: "Understand the role of primer and how it ensures long-lasting, vibrant finishes.",
      fullText: "Primer preps the wall by sealing imperfections and creating a uniform surface, ensuring your paint sticks better and looks vibrant. Always use primer, especially on new drywall or drastic color changes.",
      date: "July 5, 2025",
      image: "/Blog3.png",
    },
    {
      title: "Accent Walls: When and Where to Use Them",
      description: "Discover how to create impactful spaces with accent walls that draw attention.",
      fullText: "Accent walls add dimension and personality to any room. Choose a bold color or unique texture to make it pop. Ideal spots include living rooms, bedrooms, and behind TV units or headboards.",
      date: "June 25, 2025",
      image: "/Blog4.png",
    },
    {
      title: "Eco-Friendly Paint Options for Your Home",
      description: "Make your home healthier and greener with low-VOC and eco-conscious paint choices.",
      fullText: "Eco-friendly paints reduce indoor air pollution and are safer for both your family and the planet. Look for low or zero VOC labels and consider natural pigments for an earth-first approach.",
      date: "June 18, 2025",
      image: "/Blog5.png",
    },
    {
      title: "How to Choose the Right Finish: Matte, Satin, or Gloss?",
      description: "The right finish changes everything. Learn how to pick the perfect one for every room.",
      fullText: "Matte is perfect for hiding wall imperfections and creating a soft look. Satin is ideal for moderate-traffic areas like bedrooms. Glossy finishes are best for high-use spaces like kitchens and bathrooms.",
      date: "June 10, 2025",
      image: "/Blog6.png",
    },
  ]

  const handleReadMore = (index) => {
    setExpandedPost(expandedPost === index ? null : index)
  }

  return (
    <div>
      <Navbar />
      <div className="bg-[#f5ebe0] min-h-screen pb-16 pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-amber-900">
            From the Paint Masters Blog
          </h1>

          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            Welcome to our vibrant world of color and creativity! Whether you’re planning a major home transformation 
            or simply adding a splash of color to your favorite space, our blog is filled with inspiring ideas, 
            expert advice, and practical how-tos to guide your painting journey.
          </p>

          {/* Blog Card Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <p className="text-gray-700 mb-4">{post.description}</p>
                  <button
                    onClick={() => handleReadMore(index)}
                    className="text-amber-950 font-medium hover:underline"
                  >
                    {expandedPost === index ? 'Show Less' : 'Read More →'}
                  </button>
                  {expandedPost === index && (
                    <p className="mt-4 text-gray-700">{post.fullText}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Closing Paragraph */}
          <p className="mt-14 text-center text-lg text-gray-700 max-w-4xl mx-auto">
            At Paint Masters, we believe every wall has a story waiting to be told. From 
            classic neutrals to bold statement shades, our blog is your guide to turning your 
            vision into reality. Keep exploring, stay inspired, and remember — a brush of color 
            can go a long way!
          </p>
        </div>

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  )
}
