"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-14">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-2xl font-semibold tracking-wide">
          🍽 Food Recipes – Discover, Cook & Enjoy
        </h2>

        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Explore thousands of delicious recipes from around the world. Cook
          smarter, eat better, and share love through food.
        </p>

        <div className="h-[1px] bg-gray-700 w-full my-4" />

        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Meal Recepie. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
