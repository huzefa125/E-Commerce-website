import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full max-w-[1920px] mx-auto bg-white z-50">
      {/* Main Navigation Container */}
      <div className="flex items-center justify-between py-5 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        {/* Brand Logo */}
        <Link to='/'>
        <img
          src={assets.logo}
          className="w-28 sm:w-32 md:w-36 lg:w-40 transition-all duration-300"
          alt="Logo"
          />
          </Link> 

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base text-gray-700">
          <li>
            <NavLink to="/" className="flex flex-col items-center gap-1">
              {({ isActive }) => (
                <>
                  <p className="hover:text-black transition-colors duration-200">HOME</p>
                  <hr className={`w-1/4 border-none h-[1.5px] ${isActive ? 'bg-gray-700' : 'hidden'}`} />
                </>
              )}
            </NavLink>
          </li>
          {["collection", "about", "contact"].map((route) => (
            <li key={route}>
              <NavLink to={`/${route}`} className="flex flex-col items-center gap-1">
                {({ isActive }) => (
                  <>
                    <p className="hover:text-black transition-colors duration-200 capitalize">{route.toUpperCase()}</p>
                    <hr className={`w-1/4 border-none h-[1.5px] ${isActive ? 'bg-gray-700' : 'hidden'}`} />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right-Side Features */}
        <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
          {/* Search Icon */}
          <img
            src={assets.search_icon}
            className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200"
            alt="Search"
          />
          
          {/* Profile Dropdown */}
          <div className="relative group">
            <img
              src={assets.profile_icon}
              className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200"
              alt="Profile"
            />
            <div className="hidden group-hover:block absolute right-0 pt-4 dropdown-menu z-50">
              <div className="flex flex-col gap-2 w-32 sm:w-36 py-3 px-4 bg-slate-100 text-gray-500 rounded shadow-md">
                <p className="text-sm hover:text-black transition-colors cursor-pointer">My Profile</p>
                <p className="text-sm hover:text-black transition-colors cursor-pointer">Orders</p>
                <p className="text-sm hover:text-black transition-colors cursor-pointer">Logout</p>
              </div>
            </div>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              className="w-5 h-5 hover:scale-110 transition-transform duration-200"
              alt="Cart"
            />
            <span className="absolute -right-1 -bottom-1 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs sm:text-[10px]">
              10
            </span>
          </Link>

          {/* Mobile Toggle */}
          <img
            src={assets.menu_icon}
            className="w-5 h-5 cursor-pointer md:hidden hover:scale-110 transition-transform duration-200"
            alt="Menu"
            onClick={() => setVisible(true)}
          />
        </div>
      </div>

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed inset-0 overflow-hidden transition-all duration-300 ease-out ${
          visible ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={() => setVisible(false)} />
        
        <div className="relative bg-white h-full w-64 shadow-xl">
          <div className="flex items-center justify-between p-4 pt-6 border-b">
            <img
              src={assets.dropdown_icon}
              className="h-4 w-4 rotate-180 cursor-pointer"
              alt="Close"
              onClick={() => setVisible(false)}
            />
          </div>

          <nav className="space-y-1 p-2">
            {["home", "collection", "about", "contact"].map((link) => (
              <NavLink
                key={link}
                to={`/${link === 'home' ? '' : link}`}
                className="flex items-center p-3 px-6 text-sm font-medium capitalize hover:bg-gray-100 rounded-lg hover:text-black"
                onClick={() => setVisible(false)}
              >
                {link.toUpperCase()}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
