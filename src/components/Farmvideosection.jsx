import React from 'react';
import farm from "../assets/farm.mp4";
import { MapPin, Users, Leaf } from "lucide-react";

export default function Farmvideosection() {
  const stats = [
    {
      value: "12+",
      label: "Partner Farms",
      icon: MapPin,
    },
    {
      value: "200+",
      label: "Local Farmers",
      icon: Users,
    },
    {
      value: "100%",
      label: "Free-Range",
      icon: Leaf,
    },
  ];

  return (
    <div className='bg-gray-500/20 py-10'>
      <div className='max-w-7xl mx-auto relative overflow-hidden px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='font-playfair space-y-5 max-w-3xl mx-auto text-center'>
          <h2 className='text-md text-[#F9BC06] mt-20 mb-5 tracking-widest'>FROM FARM TO TABLE</h2>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>
            Meet Our <span className='text-[#F9BC06]'>Farmers</span>
          </h1>
          <p className='text-gray-500 text-sm sm:text-base'>
            One egg. Six incredible benefits. The most nutrient-dense food nature ever created.
          </p>
        </div>

        {/* Video Section */}
        <div className='pt-10'>
          <video
            className="w-full h-56 sm:h-80 md:h-96 lg:h-[28rem] aspect-video object-cover rounded-xl"
            loop
            autoPlay
            muted
            playsInline
          >
            <source src={farm} type="video/mp4" />
          </video>
        </div>

        {/* Stats Cards */}
        <div className='flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 md:gap-20 mt-10'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='flex items-center gap-4 w-full sm:w-64 border border-gray-200 bg-white rounded-lg px-5 py-6 shadow-lg'
            >
              <div className='bg-[#F9BC06]/20 p-3 rounded-lg flex items-center justify-center'>
                <stat.icon className="w-10 h-10 text-[#F9BC06]" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F9BC06]">
                  {stat.value}
                  <span className="text-gray-400 text-sm font-normal block">{stat.label}</span>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
