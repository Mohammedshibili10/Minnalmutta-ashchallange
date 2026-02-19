import React, { useEffect, useState } from "react";
import minnalmutta from "../assets/minnalmutta.png";
import { LuGift, LuShoppingCart } from "react-icons/lu";
import { IoClose, IoMenu } from "react-icons/io5"; // <-- Correct icons
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const productName = "(Egg Name)";
  const phoneNumber = "9745879256";
  const message = `Hello I want to order ${productName}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [show, setShow] = useState(false);
  const [coupen, setCoupen] = useState("");
  const [error, setError] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (coupen === "MINNAL2026") {
      navigate("/spinwheel");
    } else {
      setError("Invalid Coupon Code");
    }
  };
    useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenu]);


  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-lg border-b border-gray-200 px-4 sm:px-6 lg:px-16">
        <div className="w-full max-w-7xl  flex  h-20 mx-auto items-center justify-between ">
          {/* Logo */}
          <img className="h-20  md:h-30 w-auto " src={minnalmutta} alt="Minnal Mutta Logo" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 md:gap-8 text-gray-700 font-medium">
            <a href="#home"><li className="hover:text-[#F9BC06] cursor-pointer transition">Home</li></a>
            <a href="#products"><li className="hover:text-[#F9BC06] cursor-pointer transition">Products</li></a>
            <a href="#benfits"><li className="hover:text-[#F9BC06] cursor-pointer transition">Benefits</li></a>
            <a href="#nutriation"><li className="hover:text-[#F9BC06] cursor-pointer transition">Nutrition</li></a>
            <a href="#reviews"><li className="hover:text-[#F9BC06] cursor-pointer transition">Reviews</li></a>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-row gap-3">
            <button
              onClick={() => setShow(true)}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-black px-4 py-2 rounded-lg border border-gray-500 hover:border-[#F9BC06] hover:scale-105 transition"
            >
              <LuGift className="w-5 h-5 shake-attention" /> Spin & Win
            </button>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-2 text-sm font-semibold text-black px-4 py-2 rounded-lg bg-[#F9BC06] hover:scale-105 transition">
                <LuShoppingCart className="w-5 h-5" /> Order Now
              </button>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 flex flex-col gap-4">
            <a href="#home" onClick={() => setMobileMenu(false)}><p className="hover:text-[#F9BC06] cursor-pointer">Home</p></a>
            <a href="#products" onClick={() => setMobileMenu(false)}><p className="hover:text-[#F9BC06] cursor-pointer">Products</p></a>
            <a href="#benfits" onClick={() => setMobileMenu(false)}><p className="hover:text-[#F9BC06] cursor-pointer">Benefits</p></a>
            <a href="#nutriation" onClick={() => setMobileMenu(false)}><p className="hover:text-[#F9BC06] cursor-pointer">Nutrition</p></a>
            <a href="#reviews" onClick={() => setMobileMenu(false)}><p className="hover:text-[#F9BC06] cursor-pointer">Reviews</p></a>

            {/* Mobile Buttons */}
            <button
              onClick={() => { setShow(true); setMobileMenu(false); }}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-black px-4 py-2 rounded-lg border border-gray-500 hover:border-[#F9BC06] hover:scale-105 transition"
            >
              <LuGift className="w-5 h-5 shake-attention" /> Spin & Win
            </button>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center justify-center gap-2 text-sm font-semibold text-black px-4 py-2 rounded-lg bg-[#F9BC06] hover:scale-105 transition">
                <LuShoppingCart className="w-5 h-5" /> Order Now
              </button>
            </a>
          </div>
        )}
      </nav>

      {/* Spin & Win Modal */}
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[999] p-4 sm:p-0">
          <div className="relative w-full sm:w-[400px] bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-scaleIn">
            <button
              onClick={() => { setShow(false); setCoupen(""); setError(""); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
            >
              <IoClose />
            </button>

            <div className="flex items-center justify-center gap-2 mb-3">
              <LuGift className="w-6 h-6 text-yellow-500" />
              <h1 className="text-2xl font-semibold text-gray-800">Spin & Win</h1>
            </div>

            <p className="text-center text-gray-500 text-sm mb-6">
              Enter your coupon code to unlock the wheel!
            </p>

            <input
              onChange={(e) => setCoupen(e.target.value)}
              type="text"
              placeholder="ENTER COUPON CODE"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm tracking-widest focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <p className="text-sm text-red-500">{error}</p>

            <button
              onClick={handleSubmit}
              className="w-full mt-5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
