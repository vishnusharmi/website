import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
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
          <a href="#" className="hover:text-white">
            About Us
          </a>
          <a href="#" className="hover:text-white">
            Careers
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-white" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-white" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-white" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
