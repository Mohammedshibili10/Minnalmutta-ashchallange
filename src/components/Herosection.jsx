import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";
import minnalmutta from "../assets/minnalmutta.png";

export default function Herosection() {
  const productName = "(Egg Name)";
  const phoneNumber = "9745879256";
  const message = `Hello I want to order ${productName}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      id='home'
      className='max-w-7xl mx-auto font-playfair relative min-h-screen flex flex-col lg:flex-row gap-10 lg:gap-20 px-4 sm:px-6 md:px-10 pt-20 md:pt-40 lg:pt-60 overflow-hidden font-[var(--font-playfair)]'
    >
      {/* Left Section */}
      <div className='flex-1'>
        <div className='w-60 sm:w-65 h-7 sm:h-9 bg-[#F9BC06]/25 backdrop-blur-md px-4 text-xs sm:text-sm  rounded-full  font-medium mb-6 text-center py-2 text-[#F9BC06] inline-flex items-center justify-center mt-3'>
          <TiStarFullOutline className='text-[#F9BC06] mr-2 mb-1 w-5 h-5' />Minnal Mutta — Premium Eggs
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-left sm:mt-5">
          Nature's <br />
          <span className="text-[#F9BC06]">Perfect</span><br />
          Protein
        </h1>

        <p className="text-left text-gray-700 text-sm sm:text-base md:text-lg mt-4 w-full md:w-100">
          Hand-picked from free-range farms. Packed with nutrients that fuel your brain, muscles, and energy — every single day.
        </p>

        <div className='text-left text-black flex flex-col sm:flex-row gap-3 mt-6'>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-40 h-10 bg-[#F9BC06] px-6 rounded-md">Shop Now</button>
          </a>
          <button className="w-full sm:w-40 h-10 border border-gray-500 px-6 rounded-md">Learn More</button>
        </div>

        <div className='flex  sm:flex-row ml-10 sm:ml-0 items-center gap-2 sm:gap-5 mt-5'>
          <div className="flex -space-x-3 mt-4 sm:mt-0">
            {["A", "B", "C", "D"].map((letter, index) => (
              <div
                key={index}
                className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-medium border-2 border-white"
              >
                {letter}
              </div>
            ))}
          </div>

          <div>
            <div className="text-yellow-400 text-lg sm:text-xl">★★★★★</div>
            <p className="text-sm sm:text-base">
              <span className="font-semibold text-black">2,400+</span> happy customers
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative bottom-20 flex-1 flex items-center justify-center mt-25 md:10  lg:mt-0">
        {/* Background circles */}
        <div className="absolute w-40 sm:w-100 h-40 sm:h-100 rounded-full border-2 border-gray-500/20"></div>
        <div className="absolute w-72 sm:w-126 h-72 sm:h-126 rounded-full border border-[#F9BC06]/30"></div>

        {/* Floating badges */}
        <div className='absolute left-10 sm:left-115 top-0 sm:top-50 border border-gray-800 rounded-xl w-28 sm:w-30 px-3 sm:px-4 text-center py-2 shadow-lg animate-[jump_1.5s_ease-in-out_infinite]'>
          <p className='text-sm sm:text-md font-bold'>Protein</p>
          <p className='font-bold text-[#F9BC06] text-lg sm:text-xl'>13g</p>
        </div>

        <div className='absolute bottom-10 sm:bottom-45 right-10 sm:right-115 bg-background text-center border border-gray-800 rounded-xl px-3 sm:px-4 py-2 w-28 sm:w-30 shadow-lg animate-[jump_1.5s_ease-in-out_infinite]'>
          <p className="text-sm sm:text-md text-muted-foreground font-bold">Omega-3</p>
          <p className='text-lg sm:text-xl font-bold text-red-500'>Rich</p>
        </div>

        {/* Egg Image */}
        <img src={minnalmutta} alt="Egg" className="w-72 sm:w-72 md:w-180 h-72 sm:h-72 md:h-180 relative drop-shadow-2xl z-10 animate-[jump_1.5s_ease-in-out_infinite]" />
      </div>
    </div>
  )
}
