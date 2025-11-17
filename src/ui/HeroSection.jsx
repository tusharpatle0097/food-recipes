"use client";

import React from "react";
import { Search } from "lucide-react";
import { useFood } from "@/app/context/FoodContext";
import SearchInput from "./SearchInput";

const HeroSection = () => {
  const { foodFirstName, setFoodFirstName, fetchFoodByFirstName, noMealError } =
    useFood();
  console.log(noMealError, "noMealError");
  let placeholder = "Search recipes here...";

  return (
    <>
      <section
        className="w-full  pt-16 px-6"
        style={{ backgroundImage: "url('/images/food-bg.jpg')" }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="ibm-plex-sans text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Find the Perfect Recipe for Every Meal
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto">
            Explore a world of delicious dishes, discover new flavors, and cook
            like a professional. Search any recipe, browse by category, and get
            step-by-step cooking guides instantly.
          </p>

          <p className="text-sm md:text-base text-gray-500">
            Powered by Food-Recipes
          </p>

          {/* <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-md">
              Start Exploring Recipes
            </button>
          </div> */}
        </div>
      </section>
      <div className="flex  justify-center items-center mt-10 mx-auto">
        <div>
          <SearchInput
            onChange={(e) => setFoodFirstName(e.target.value)}
            value={foodFirstName}
            placeholder={placeholder}
          />
        </div>
        <div>
          <button
            onClick={fetchFoodByFirstName}
            type="button"
            className="cursor-pointer"
          >
            <Search width={70} height={35} />
          </button>
        </div>
      </div>
      <p className="text-center mt-2 text-red-700">{noMealError}</p>
    </>
  );
};

export default HeroSection;
