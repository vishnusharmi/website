import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 ">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved. by busitron
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
