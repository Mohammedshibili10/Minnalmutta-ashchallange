import React from "react";
import minnalmutta from "../assets/minnalmutta.png";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F1624] text-gray-300 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-12">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/4">
          <img src={minnalmutta} alt="Minnal Mutta" className="w-32 mb-4" />
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Premium farm-fresh eggs delivered to your doorstep. Nature's perfect nutrition.
          </p>
        </div>

        {/* Links & Contact */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-15 text-center md:text-left mt-12">
          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer hover:text-yellow-400">
                <a href="#products">White Eggs</a>
              </li>
              <li className="cursor-pointer hover:text-yellow-400">
                <a href="#products">Brown Eggs</a>
              </li>
              <li className="cursor-pointer hover:text-yellow-400">
                <a href="#products">Organic Eggs</a>
              </li>
              <li className="cursor-pointer hover:text-yellow-400">
                <a href="#products">Omega-3 Eggs</a>
              </li>
            </ul>
          </div>


          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
              <li className="hover:text-yellow-400 cursor-pointer">Our Farms</li>
              <li className="hover:text-yellow-400 cursor-pointer">Sustainability</li>
              <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-yellow-400 cursor-pointer">FAQ</li>
              <li className="hover:text-yellow-400 cursor-pointer">Delivery</li>
              <li className="hover:text-yellow-400 cursor-pointer">Returns</li>
              <li className="hover:text-yellow-400 cursor-pointer">WhatsApp Order</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="">
            <h4 className="font-bold mb-4 text-white">Contact Us</h4>
            <ul className="  space-y-3 text-sm text-center ">
              <li className="flex sm:items-start gap-2 opacity-70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-yellow-400" />
                <span>Malappuram,Kerala,676505</span>
              </li>
              <li>
                <a
                  href="tel:+919745879256"
                  className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-yellow-400 transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-yellow-400" />
                  +91 9745879256
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@minnalmutta.in"
                  className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-yellow-400 transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-yellow-400" />
                  hello@minnalmutta.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919745879256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-yellow-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 text-yellow-400" />
                  WhatsApp Order
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © 2026 Minnal Mutta. All rights reserved.
      </div>
    </footer>
  );
}

