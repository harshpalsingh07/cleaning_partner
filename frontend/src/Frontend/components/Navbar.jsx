import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    const header = document.getElementById("main-header");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add("bg-white", "shadow-md", "py-2");
        header.classList.remove("py-4");
      } else {
        header.classList.remove("bg-white", "shadow-md", "py-2");
        header.classList.add("py-4");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup (important)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        id="main-header"
        className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 py-4"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-green-600 p-1.5 rounded-lg">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2917/2917995.png"
                className="w-6 invert"
                alt="logo"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight">Cleanify</span>
          </div>

          <nav className="hidden md:flex gap-8 font-bold text-gray-700">
            <a href="#" className="text-green-600">
              Home
            </a>
            <a href="#" className="hover:text-green-600">
              Pages
            </a>
            <a href="#" className="hover:text-green-600">
              Projects
            </a>
            <Link to="/services" className="hover:text-green-600">
              Services
            </Link>

            <a href="#" className="hover:text-green-600">
              Blog
            </a>
            <a href="#" className="hover:text-green-600">
              Contact
            </a>
          </nav>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-bold">
            Request Service
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
