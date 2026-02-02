import { useState } from "react";
import logo from "../assets/images/logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // Track active menu link

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close mobile menu after clicking
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Destinations", href: "#destinations" },
    { name: "About Us", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact", special: true },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Wakalink Travels" loading="lazy" className="h-15 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium text-gray-700">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`transition ${
                  activeLink === item.href
                    ? item.special
                      ? "bg-sky-400 text-white px-4 py-2 rounded-lg"
                      : "text-sky-500"
                    : item.special
                    ? "bg-sky-400 text-white px-4 py-2 rounded-lg hover:bg-sky-500"
                    : "hover:text-sky-500"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl font-bold focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"} {/* Toggle icon */}
        </button>
      </div>
        
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-2 px-6 py-4 text-gray-700">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`block py-2 text-center transition ${
                    activeLink === item.href
                      ? item.special
                        ? "bg-sky-400 text-white rounded-lg"
                        : "text-sky-500"
                      : item.special
                      ? "bg-sky-400 text-white rounded-lg hover:bg-sky-500"
                      : "hover:text-sky-500"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
