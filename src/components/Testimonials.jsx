import React from 'react';

export default function Testimonials() {
  const testi = [
    {
      text: `"Best eggs I've ever tasted! The yolk is so rich and orange. My morning omelets have never been better."`,
      name: "Priya Sharma",
      role: "Fitness Enthusiast",
    },
    {
      text: `"Switched to Minnal Mutta organic eggs and the difference in baking is incredible. Superior quality!"`,
      name: "Rahul Mehta",
      role: "Home Chef",
    },
    {
      text: `"I recommend Minnal Mutta to all my clients. Farm-fresh, nutrient-rich, and consistently high quality!"`,
      name: "Anita Desai",
      role: "Nutritionist",
    },
    {
      text: `"Perfect protein source for my training. The Omega-3 enriched eggs are a game-changer for recovery."`,
      name: "Vikram Singh",
      role: "Bodybuilder",
    },
    {
      text: `"My kids love these eggs! Knowing they're organic and antibiotic-free gives me peace of mind."`,
      name: "Meera Patel",
      role: "Mother of 3",
    },
    {
      text: `"We exclusively use Minnal Mutta in our restaurant. Our customers notice the quality difference immediately."`,
      name: "Arjun Reddy",
      role: "Restaurant Owner",
    },
  ];

  return (
    <div className='max-w-7xl mx-auto relative min-h-screen overflow-hidden mt-8 px-4 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='font-playfair space-y-4 max-w-3xl mx-auto text-center'>
        <h2 className='text-md text-[#F9BC06] mt-16 mb-2 tracking-widest'>TESTIMONIALS</h2>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold'>What Our Customers Say</h1>
        <p className='text-2xl sm:text-3xl text-[#F9BC06]'>★★★★★</p>
        <p className='text-gray-500 text-sm sm:text-base'>4.9 out of 5 based on 2,400+ reviews</p>
      </div>

      {/* Testimonials Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8">
        {testi.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between"
          >
            <div className="text-yellow-400 text-4xl sm:text-5xl mb-3">“</div>

            <p className="text-gray-600 italic text-sm sm:text-base leading-relaxed mb-5">
              {item.text}
            </p>

            <div className="flex justify-between items-center mt-auto">
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.role}
                </p>
              </div>

              <div className="text-yellow-500 text-sm sm:text-base">
                ★★★★★
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
