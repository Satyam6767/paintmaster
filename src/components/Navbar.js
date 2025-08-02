'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleServices = () => setServicesOpen(!servicesOpen)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 backdrop-blur-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full relative">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/Hero.png"
              alt="Logo"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>

          {/* Hamburger (Mobile) */}
          <div className="lg:hidden ml-auto">
            <button onClick={toggleMenu}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 space-x-6 bg-transparent">
            <div className="flex items-center space-x-4 text-lg font-medium text-black bg-transparent">
              <Link href="/" className="hover:text-amber-950">Home</Link>
              <Link href="/About" className="hover:text-amber-950">About</Link>
              <div className="relative group">
                <button
                  onClick={toggleServices}
                  className="flex items-center gap-1 hover:text-amber-950 bg-transparent text-black"
                >
                  Services <ChevronDown size={30} />
                </button>
                {servicesOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <Link href="/Interior" className="block px-4 py-2 text-black hover:bg-gray-100">Interior</Link>
                    <Link href="/Exterior" className="block px-4 py-2 text-black hover:bg-gray-100">Exterior</Link>
                    <Link href="/Custom" className="block px-4 py-2 text-black hover:bg-gray-100">Custom</Link>
                  </div>
                )}
              </div>
            </div>

            <div className="text-3xl font-extrabold text-black whitespace-nowrap px-6">
              Paint Masters
            </div>

            <div className="flex items-center space-x-4 text-lg font-medium text-black bg-transparent">
              <Link href="/TestimonialsPage" className="hover:text-amber-950">Reviews</Link>
              <Link href="/BlogPage" className="hover:text-amber-950">Blog</Link>
              <Link href="/Contact" className="hover:text-amber-950">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-3 text-base font-medium text-black">
          <div className="text-xl font-extrabold text-amber-950">Paint Masters</div>
          <Link href="/" className="block hover:text-amber-950">Home</Link>
          <Link href="/About" className="block hover:text-amber-950">About</Link>
          <div>
            <button onClick={toggleServices} className="flex items-center gap-1 hover:text-amber-950">
              Services <ChevronDown size={30} />
            </button>
            {servicesOpen && (
              <div className="mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <Link href="/Interior" className="block px-4 py-2 text-black hover:bg-gray-100">Interior</Link>
                <Link href="/Exterior" className="block px-4 py-2 text-black hover:bg-gray-100">Exterior</Link>
                <Link href="/Custom" className="block px-4 py-2 text-black hover:bg-gray-100">Custom</Link>
              </div>
            )}
          </div>
          <Link href="/TestimonialsPage" className="block hover:text-amber-950">Reviews</Link>
          <Link href="/BlogPage" className="block hover:text-amber-950">Blog</Link>
          <Link href="/Contact" className="block hover:text-amber-950">Contact</Link>
        </div>
      )}
    </nav>
  )
}
