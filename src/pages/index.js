import ColorPalette from '@/components/Colorpalettehotspots'
import Footer from '@/components/Footer'
import Hero from '@/pages/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/pages/Services'
import React, { useEffect, useState } from 'react'
import StoreLocation from './StoreLocation'
import StatsSection from './StatsSection'
import GalleryPage from './GallerPage'


const backgroundImages = [
  '/bg1.png',
  '/bg2.png',
  '/bg3.png',
  '/bg4.png',
  // Add more image paths placed in `/public`
]

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url('${backgroundImages[currentImageIndex]}')` }} >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
    <Services/>
     <StatsSection/>
     <GalleryPage/>
    <ColorPalette/>
    <StoreLocation/>
     <div>
      <Footer/>
     </div>
    </div>
  )
}

export default Index
