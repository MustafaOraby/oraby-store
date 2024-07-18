import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Nav from '../Header/Nav';
function Footer() {
  return (
    <footer className="bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text py-8 mt-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 hidden md:block">
          <Nav/>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default Footer