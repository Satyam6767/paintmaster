import Navbar from '@/components/Navbar'
import React from 'react'
import TextureScroller from './TextureScroller'
import ColorCatalogue from '../components/ColorCatalogue'
import Footer from '@/components/Footer'

const Explore = () => {
  return (
    <div>
        <div className='mt-20 '>
        <Navbar/>
        </div>
        <div className='bg-white'>
        <TextureScroller/>
        <ColorCatalogue/>
    </div>
    <Footer/>
    </div>
  )
}

export default Explore