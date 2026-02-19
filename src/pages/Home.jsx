import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Collection from '../components/Collection'
import Benfits from '../components/Benfits'
import Farmvideosection from '../components/Farmvideosection'
import Nutriations from '../components/Nutriations'
import Review from '../components/Review'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className=''>
       <Navbar/>
       <Herosection/>
       <Collection/>
       <Benfits/>
       <Farmvideosection/>
       <Nutriations/>
       <Review/>
       <Testimonials/>
       <Footer/>
    </div>
  )
}
