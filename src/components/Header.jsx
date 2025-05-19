import React from "react";

const Header = () => (
  <header className="flex justify-between items-center p-6">
    <h1 className="text-3xl font-bold text-white">BrainyLingo</h1>
    <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-2 rounded-full">
      Sign Out
    </button>
  </header>
);

export default Header;
