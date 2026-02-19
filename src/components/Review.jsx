import React from 'react';
import { CheckCircle } from "lucide-react";
import Mammootty from '../assets/Mammootty.jpg'
import Mohanlal from '../assets/Mohanlal.jpg'
import messi from '../assets/messi.jpg'
import download from '../assets/download.jpg'
export default function Review() {
  const celeb = [
    {
      tag: "Actor",
      image: Mammootty,
      name: "Mammootty",
      role: "Celebrity  ",
      text: `"As a Actor, I'm obsessed with  quality. Minnal Mutta eggs have the richest yolks I've ever worked with — they elevate every dish I create."`,
    },
    {
      tag: "Actor",
      image: Mohanlal,
      name: "Mohanlal",
      role: "Celebrity",
      text: `"I eat 6 eggs a day for my training. Minnal Mutta Special eggs are my go-to — clean protein, amazing taste, and I trust what I'm putting in my body."`,
    },
    {
      tag: "Athlete ",
      image: messi,
      name: "Lionel Messi",
      role: "Footballer",
      text: `"Peak performance demands peak nutrition. Minnal Mutta is the only egg brand our team trusts for match-day meals and recovery."`,
    },
    {
      tag: "Actor ",
      image: download,
      name: "Tovino Thomas",
      role: "Actor",
      text: `"I switched my whole family to Minnal Mutta organic eggs. The taste difference is real, and knowing they're farm-fresh makes it even better."`,
    },
  ];

  return (
    <div id="reviews" className='max-w-7xl mx-auto relative min-h-screen overflow-hidden mt-10 px-4 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='font-playfair space-y-5 max-w-3xl mx-auto text-center'>
        <h2 className='text-md text-[#F9BC06] mt-20 mb-5 tracking-widest'>TRUSTED BY THE BEST</h2>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>
          Celebrity <span className='text-[#F9BC06]'>Endorsements</span>
        </h1>
        <p className='text-gray-500 text-sm sm:text-base'>
          Top chefs, athletes, and stars choose Minnal Mutta for quality they can taste and trust.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 py-10'>
        {celeb.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md flex flex-col sm:flex-row overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="w-full sm:w-1/3 h-56 sm:h-auto">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between w-full sm:w-2/3">
              <span className="bg-yellow-400 text-black text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit mb-3">
                {item.tag}
              </span>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 italic">
                {item.text}
              </p>

              <div>
                <div className="flex items-center gap-2 font-semibold">
                  {item.name}
                  <CheckCircle className="text-yellow-500" size={16} />
                </div>
                <p className="text-xs sm:text-sm text-gray-500">{item.role}</p>
              </div>

              <div className="flex gap-1 text-yellow-500 mt-3 text-sm sm:text-base">
                {"★★★★★"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
