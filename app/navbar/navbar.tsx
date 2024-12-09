import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-slate-100 text-black">
      <h1 className="text-xl font-bold">Bandage</h1>
      <nav className="flex-grow flex justify-center space-x-4">
        <a href="#" className="hover:text-yellow-300">Home</a>
        <a href="#" className="hover:text-yellow-300">Shop</a>
        <a href="#" className="hover:text-yellow-300">About</a>
        <a href="#" className="hover:text-yellow-300">Blog</a>
      </nav>
    </header>
  );
};

export default Navbar;

