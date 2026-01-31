import { useState } from "react";
import logo from "../assets/images/logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Wakalinks Travels" className="h-15 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium text-gray-700">
          <li>
            <a href="#home" className="hover:text-sky-500 transition">Home</a>
          </li>
          <li>
            <a href="#services" className="hover:text-sky-500 transition">Services</a>
          </li>
         
          <li>
            <a href="#destinations" className="hover:text-sky-500 transition">Destinations</a>
          </li>
          <li>
            <a href="#about" className="hover:text-sky-500 transition">About Us</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sky-500 transition">Contact</a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-sky-400 text-white px-4 py-2 rounded-lg hover:bg-sky-500 transition"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
       <button
        className="md:hidden text-3xl font-bold focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        >
        ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-2 px-6 py-4 text-gray-700">
            <li><a href="#home" className="block py-2 hover:text-sky-500">Home</a></li>
            <li><a href="#services" className="block py-2 hover:text-sky-500">Services</a></li>
            
            <li><a href="#destinations" className="block py-2 hover:text-sky-500">Destinations</a></li>
            <li><a href="#about" className="block py-2 hover:text-sky-500">About Us</a></li>
            <li><a href="#contact" className="block py-2 hover:text-sky-500">Contact</a></li>
            <li>
              <a
                href="#book"
                className="block bg-sky-400 text-white px-4 py-2 rounded-lg text-center hover:bg-sky-500 transition"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
