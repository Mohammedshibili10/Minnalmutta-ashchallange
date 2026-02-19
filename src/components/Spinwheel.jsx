import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // NEW

export default function SpinWheel() {
  const navigate = useNavigate(); // NEW

  const options = [
    "₹1 Cashback",
    "10% OFF",
    "25% OFF",
    "₹5 Cashback",
    "Free Shipping",
    "Better Luck",
  ];

  const colors = [
    "#1f2937",
    "#facc15",
    "#3b82f6",
    "#ef4444",
    "#22c55e",
    "#8b5cf6",
  ];

  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState("");
  const [hasSpun, setHasSpun] = useState(false);

  const sliceAngle = 360 / options.length;

  const spinWheel = () => {
    if (spinning || hasSpun) return;

    setSpinning(true);
    setResult("");

    const randomIndex = Math.floor(Math.random() * options.length);
    const pointerOffset = 80;

    const stopAngle =
      360 * 5 +
      (360 - randomIndex * sliceAngle - sliceAngle / 2 - pointerOffset);

    const newRotation = rotation + stopAngle;
    setRotation(newRotation);

    setTimeout(() => {
      setResult(options[randomIndex]);
      setSpinning(false);
      setHasSpun(true);

      // Redirect to home page after 5 seconds
      setTimeout(() => {
        navigate("/"); // <-- change "/" if your home route is different
      }, 5000);

    }, 4000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-[999]  w-full mx-auto">
  
    <div className="flex flex-col items-center mt-10 shadow-lg  bg-white w-140 h-150 rounded-xl py-10 ">
      <h1 className="text-3xl font-bold mb-6">🎁 Spin & Win</h1>

      <div className="relative w-[350px] h-[350px]">
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 z-20 rotate-180">
          <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-yellow-500"></div>
        </div>

        <svg
          viewBox="0 0 200 200"
          className="w-full h-full transition-transform duration-[4000ms] ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {options.map((option, index) => {
            const startAngle = index * sliceAngle;
            const endAngle = startAngle + sliceAngle;
            const largeArc = sliceAngle > 180 ? 1 : 0;

            const x1 = 100 + 100 * Math.cos((Math.PI * startAngle) / 180);
            const y1 = 100 + 100 * Math.sin((Math.PI * startAngle) / 180);
            const x2 = 100 + 100 * Math.cos((Math.PI * endAngle) / 180);
            const y2 = 100 + 100 * Math.sin((Math.PI * endAngle) / 180);

            const textAngle = startAngle + sliceAngle / 2;
            const textX = 100 + 60 * Math.cos((Math.PI * textAngle) / 180);
            const textY = 100 + 60 * Math.sin((Math.PI * textAngle) / 180);

            return (
              <g  key={index}>
                <path
                  d={`M100 100 L${x1} ${y1} A100 100 0 ${largeArc} 1 ${x2} ${y2} Z`}
                  fill={colors[index]}
                />
                <text
                  x={textX}
                  y={textY}
                  fill="white"
                  fontSize="10"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${textAngle} ${textX} ${textY})`}
                >
                  {option}
                </text>
              </g>
            );
          })}
        </svg>

        <button
          onClick={spinWheel}
          disabled={spinning || hasSpun}
          className="absolute inset-0 m-auto w-24 h-24 bg-yellow-500 rounded-full font-bold shadow-lg z-10"
        >
          SPIN
        </button>
      </div>
       <div className="w-100 h-30 border border-gray-700/50 mt-5 rounded-xl ">
      {result && (
      
        <p className="mt-6 text-lg font-semibold text-center text-green-600">
          🎉 You Won: {result}
        </p>
      
      )}
        </div>
    </div>
    </div>
  
  );
}
