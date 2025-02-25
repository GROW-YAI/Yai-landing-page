import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 py-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-5 pb-5">

        <div>
          <h2 className="text-lg font-bold mb-4 text-white">About Us</h2>
          <p className="text-gray-300">
            we are team of peopbcfb gfdtyzd thxxhg hgfkfyjdd
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>
          <ul>
            <li> <a href="" className="hover:underline text-gray-300">Home</a></li>
            <li> <a href="" className="hover:underline text-gray-300">About us</a></li>
            <li> <a href="" className="hover:underline text-gray-300">Products</a></li>
            <li> <a href="" className="hover:underline text-gray-300">Vision</a></li>
            <li> <a href="" className="hover:underline text-gray-300">Blog</a></li>
            <li> <a href="" className="hover:underline text-gray-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Follow Us</h2>

          <ul className="flex space-x-4 items-center justify-center">
            <li>
              {""}
              <FaFacebookF className="text-blue-500" />{""}
              <a href="" className="hover:underline text-gray-300">Facebook
                </a>
                </li>

            <li>
              <FaTwitter className="text-sky-500" />
              <a href="" className="hover:underline text-gray-300">Twitter

              </a>
            </li>

            <li>
              <FaInstagram className="text-orange-500" />
              <a href="" className="hover:underline text-gray-300">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-gray-600 border-t pt-6 text-gray-300 text-center mt-6">
        <p>©2025 All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
