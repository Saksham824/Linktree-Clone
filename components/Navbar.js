'use client';
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const links = ['Products', 'Templates', 'Marketplace', 'Learn', 'Pricing'];
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const route =()=>{
    router.push('/generate')
  }

  return (
    <nav
      className={clsx(
        'fixed top-4 left-1/2 transform -translate-x-1/2 w-[90vw] z-50 rounded-full transition-all duration-300',
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-md'
      )}
    >
      <div className="flex justify-between items-center px-6 py-5">
        {/* Logo and Links */}
        <div className="flex items-center gap-8">
          <img className="h-6" src="linktree.png" alt="logo" />

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
            {links.map(link => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-gray-600 text-sm font-medium hover:text-green-500 relative group"
              >
                {link}
                <span className="block h-0.5 max-w-0 group-hover:max-w-full bg-green-500 transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-[#eff0ec] font-semibold rounded-md px-6 py-2 hover:bg-[#ebe9e9] text-sm">
            Log in
          </button>
          <button onClick={route} className="bg-[#1e2330] text-white font-semibold rounded-full px-6 py-2 hover:bg-[#282e3e] text-sm">
            Sign up free
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={clsx(
          'md:hidden rounded-xl fixed top-20 left-0 w-full bg-white z-40 shadow-xl transition-transform duration-300 ease-in-out',
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center gap-4 px-6 py-4">
          {links.map(link => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-gray-700 text-base font-medium hover:text-green-500"
            >
              {link}
            </a>
          ))}
          <button className="w-full bg-[#eff0ec] font-semibold rounded-md px-6 py-2 hover:bg-[#ebe9e9] text-sm">
            Log in
          </button>
          <button onClick={route} className="w-full bg-[#1e2330] text-white font-semibold rounded-full px-6 py-2 hover:bg-[#282e3e] text-sm">
            Sign up free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
