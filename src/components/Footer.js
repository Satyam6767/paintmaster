/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1f333b] text-white px-10 py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Welcome to Paint Masters - Professional Paint Studio</h2>
          <hr className="border-gray-600 mb-4" />
          <p className="text-gray-300 mb-4">
            We are your one-stop solution for all your painting needs. We offer
            professional services such as commercial painting, industrial
            painting, and residential painting.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              <FaYoutube />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded hover:bg-gray-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <hr className="border-gray-600 mb-4" />
          <div className="flex gap-10">
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/About" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/Residential" className="hover:underline">Residential</Link>
              </li>
              <li>
                <Link href="/Industrial" className="hover:underline">Industrial</Link>
              </li>
            </ul>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/Commercial" className="hover:underline">Commercial</Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <hr className="border-gray-600 mb-4" />
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-medium text-white">Location</h4>
                <p>
                  Office 309, Purushottam Plaza, Aundh-Baner Rd, Pashan Rd, <br />
                  Pune, Maharashtra 411045
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-medium text-white">Email Us</h4>
                <p>livlavish9999@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-medium text-white">Phone Us</h4>
                <p>+91 9403932396</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <img src="/Hero.png" alt="Logo" className="w-52 mt-4 md:mt-0" />
        <p className="text-gray-400 mt-4 md:mt-0">
          © Developed and Designed by <span className="text-white font-semibold">Midbrains Technology</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
