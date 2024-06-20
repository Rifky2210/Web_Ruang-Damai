import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    // Memisahkan path menjadi bagian awal sebelum / (contoh: video/1 menjadi video)
    const pathParts = path.split('/')[1];
    // Memisahkan location.pathname menjadi bagian awal sebelum / (contoh: /video/1 menjadi video)
    const locationParts = location.pathname.split('/')[1];
    
    // Memeriksa apakah bagian awal path sama dengan bagian awal location.pathname
    return locationParts === pathParts ? "font-bold bg-white rounded-3xl" : "";
  };

  return (
    <nav className="bg-[#38B6FF] p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row w-full">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Ruang Damai" className="h-10 mr-2 bg-white p-1 rounded-3xl" />
          </div>
          <div className="md:hidden">
            <button onClick={toggleDropdown} className="text-white">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-grow md:items-center md:w-auto`}>
            <div className="w-full flex flex-row items-center">
              <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-sm ml-5 w-2/3">
                <li>
                  <Link to="/" className={`text-gray-800 px-2 hover:text-gray-950 block py-2 md:py-0 ${isActive("/")}`}>
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link to="/artikel" className={`text-gray-800 px-2  hover:text-gray-950 block py-2 md:py-0 ${isActive("/artikel")}`}>
                    Artikel
                  </Link>
                </li>
                <li>
                  <Link to="/video" className={`text-gray-800 px-2  hover:text-gray-950 block py-2 md:py-0 ${isActive("/video")}`}>
                    Video
                  </Link>
                </li>
                <li>
                  <Link to="/konseling" className={`text-gray-800 px-2  hover:text-gray-950 block py-2 md:py-0 ${isActive("/konseling")}`}>
                    Konseling
                  </Link>
                </li>
                <li>
                  <Link to="/webinar" className={`text-gray-800 px-2  hover:text-gray-950 block py-2 md:py-0 ${isActive("/webinar")}`}>
                    Webinar
                  </Link>
                </li>
              </ul>
              <ul className="flex justify-end flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-sm ml-5 gap-1 w-1/3">
                <li>
                  <Link to="/login" className={`text-white  px-2 flex flex-row hover:text-white py-2 md:py-0 ${isActive("/login")}`}>
                    <img src="/images/user.png" className="w-10 h-10" alt="" />
                    <p className="place-content-center ml-2">Hi, Bima Prayoga!</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
