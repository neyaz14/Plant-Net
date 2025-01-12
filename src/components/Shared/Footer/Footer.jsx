import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2F3E34] text-white p-8">
      <div className="container mx-auto flex justify-between items-start">
        <div className="w-1/3">
          <div className="flex items-center">
            <img src="/path-to-your-logo.png" alt="Planto Logo" className="w-8 h-8 mr-2" />
            <span className="font-bold text-lg">Planto.</span>
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-white">FB</a>
            <a href="#" className="text-white">TW</a>
            <a href="#" className="text-white">LI</a>
          </div>
        </div>

        <div className="w-1/3">
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul>
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">Plant Type’s</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
            <li><a href="#" className="text-white">Privacy</a></li>
          </ul>
        </div>

        <div className="w-1/3">
          <h4 className="font-bold mb-4">For Every Update’s</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Email..."
              className="p-2 rounded-l bg-gray-200 text-black flex-grow"
            />
            <button className="p-2 bg-green-700 rounded-r">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>Planto © All right reserve</p>
      </div>
    </footer>
  );
};

export default Footer;
