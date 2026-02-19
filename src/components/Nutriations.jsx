import React from 'react';
import eggbox from "../assets/eggbox.png";

export default function Nutriations() {
  const nutritionData = [
    { name: "Calories", value: "72kcal", percent: 4 },
    { name: "Protein", value: "34.3g", percent: 40 },
    { name: "Total Fat", value: "4.8g", percent: 6 },
    { name: "Cholesterol", value: "186mg", percent: 62 },
    { name: "Vitamin D", value: "1.1µg", percent: 6 },
    { name: "Vitamin B12", value: "0.6µg", percent: 23 },
    { name: "Selenium", value: "15.4µg", percent: 28 },
    { name: "Choline", value: "147mg", percent: 27 },
    { name: "Iron", value: "0.9mg", percent: 5 },
    { name: "Riboflavin", value: "0.2mg", percent: 18 },
  ];

  return (
    <div id='nutriation' className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 md:gap-20 px-4 sm:px-6 lg:px-8 mt-10'>
      
      {/* Nutrition Info */}
      <div className='lg:flex-1 w-full lg:w-1/2'>
        <div className='font-playfair space-y-5 max-w-xl sm:mx-auto md:mx-0'>
          <h2 className='text-md text-[#F9BC06] text-left mt-10 mb-2 tracking-widest'>SCIENCE-BACKEND</h2>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-left'>
            Nutrition <span className='text-[#F9BC06]'>Facts</span>
          </h1>
          <p className='text-left text-gray-500 text-sm sm:text-base'>
            Per large egg (50g). Eggs are one of the most nutrient-dense foods on the planet, providing essential vitamins and minerals your body needs.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 space-y-3">
          {nutritionData.map((item, index) => (
            <div key={index} className="flex items-center gap-3 sm:gap-4">
              <div className="w-24 sm:w-28 md:w-32 text-sm sm:text-base">{item.name}</div>
              <div className="flex-1 bg-gray-200 h-2 sm:h-3 md:h-4 rounded">
                <div
                  className="bg-yellow-500 h-2 sm:h-3 md:h-4 rounded transition-all duration-700"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
              <div className="w-16 sm:w-20 md:w-24 text-right text-sm sm:text-base">{item.value}</div>
              <div className="w-10 text-yellow-500 text-right text-sm sm:text-base">{item.percent}%</div>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-gray-400 mt-4">
          * % Daily Value based on 2,000 calorie diet
        </p>
      </div>

      {/* Egg Image */}
      <div className='lg:flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-45'>
        <img className='rounded-xl w-64 sm:w-80 md:w-full max-w-md md:max-w-full h-auto object-contain' src={eggbox} alt="Egg Box" />
      </div>
    </div>
  );
}
