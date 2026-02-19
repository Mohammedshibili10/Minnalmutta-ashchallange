import React from 'react';
import nadan from "../assets/nadan.png";
import white from "../assets/white.png";
import kada from "../assets/kada.png";
import special from "../assets/special.png";
import eggland from "../assets/eggland.png";

export default function Collection() {
  const eggs = [
    {
      name: "Nadan Eggs",
      description: "Our signature nadan eggs, perfect for all your cooking and baking needs.",
      price: "₹10",
      image: nadan
    },
    {
      name: "White Eggs",
      description: "Our signature white eggs, perfect for all your cooking and baking needs.",
      price: "₹7",
      image: white
    },
    {
      name: "Kada Eggs",
      description: "Our signature kada eggs, perfect for all your cooking and baking needs.",
      price: "₹5",
      image: kada
    },
    {
      name: "Special Eggs 3x 🔥",
      description: "Our signature special eggs, perfect for all your cooking and baking needs.",
      price: "₹15",
      image: special
    },
  ];

  return (
    <div id='products' className='max-w-7xl mx-auto relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-16'>
        {/* Header */}
        <div className='font-playfair space-y-5 max-w-lg mx-auto text-center'>
          <h2 className='text-md text-[#F9BC06] mt-20 mb-5 tracking-widest'>OUR COLLECTION</h2>
          <h1 className='text-4xl sm:text-5xl font-semibold'>Choose Your Eggs</h1>
          <p className='text-gray-500 text-sm sm:text-base'>
            From everyday essentials to premium organic — we have the perfect egg for every need.
          </p>
        </div>

        {/* Eggs Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-6">
          {eggs.map((item, index) => (
            <div key={index} className='shadow-lg rounded-lg overflow-hidden bg-white flex flex-col'>
              <div className='w-full h-48 sm:h-56 md:h-60 lg:h-64'>
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className='px-4 py-3 flex flex-col flex-1'>
                <h3 className="text-lg sm:text-xl font-semibold mt-2 font-playfair">{item.name}</h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base flex-1">{item.description}</p>
                <h2 className="text-lg sm:text-xl font-bold mt-2">{item.price}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Image */}
      <div className="w-full mx-auto py-10 px-2 sm:px-6">
        <img
          src={eggland}
          alt="Collection Background"
          className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
