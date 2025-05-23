import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">MinhaMarca</div>
        <ul className="hidden md:flex space-x-10 text-gray-700 font-semibold">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-600 transition-colors duration-300>"
            >
              Sobre a empresa
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
