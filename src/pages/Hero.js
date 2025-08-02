import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-[calc(100vh-80px)] relative z-10">
      <div className="text-white text-center space-y-6">
        <div>
          <h1 className="text-5xl font-bold">Welcome to Paint Masters - Professional Paint Studio</h1>
          <p className="mt-4 text-xl">Your vision, our precision.</p>
        </div>

        <Link href="/Explore">
          <button className="mt-6 flex items-center gap-2 mx-auto bg-white text-black px-6 py-3 rounded-full transition-all duration-300 hover:bg-gray-200">
            EXPLORE
            <ArrowRight size={25} />
          </button>
        </Link>
      </div>
    </section>
  )
}
