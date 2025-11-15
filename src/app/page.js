"use client";

import React from "react";
import { useFood } from "./context/FoodContext";
import FoodCard from "@/ui/FoodCard";
import ListButton from "@/ui/ListButton";
import SearchInput from "@/ui/SearchInput";
import MealCard from "../ui/MealCard";
import { Search } from "lucide-react";

const page = () => {
  const {
    allCategoryButtonList,
    searchFilterCategory,
    setSelectCategory,
    // setSearchCategory,
    // searchCategory,
    selectCategory,
    foodFirstNameData,
    foodFirstName,
    setFoodFirstName,
  } = useFood();

  console.log(foodFirstNameData, "OPOP");
  let placeholder = "Search Any Food...";
  return (
    <>
      <section className="w-full bg-white pt-16 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
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

          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-md">
              Start Exploring Recipes
            </button>
          </div>
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
          <button type="button" className="cursor-pointer">
            <Search width={70} height={35} />
          </button>
        </div>
      </div>
      {/* <div className="mt-10 w-[50%] mx-auto">
        
      </div> */}
      <div className="px-10 py-10 hidden lg:block">
        <div className="grid grid-cols-[10%_90%] ">
          <div>
            {allCategoryButtonList.map((items, key) => {
              return (
                <ListButton
                  selectCategory={selectCategory === items.strCategory}
                  onClick={() => setSelectCategory(items.strCategory)}
                  key={key}
                >
                  {items.strCategory}
                </ListButton>
              );
            })}
          </div>

          <div>
            {foodFirstNameData.length === null ||
            foodFirstNameData.length >= 1 ? (
              <MealCard mealData={foodFirstNameData} />
            ) : (
              <FoodCard searchFilterCategory={searchFilterCategory} />
            )}
          </div>
        </div>
      </div>

      <div className="px-2 py-10 block lg:hidden ">
        <div>
          {allCategoryButtonList.map((items, key) => {
            return (
              <ListButton
                selectCategory={selectCategory === items.strCategory}
                onClick={() => setSelectCategory(items.strCategory)}
                key={key}
              >
                {items.strCategory}
              </ListButton>
            );
          })}
        </div>

        <div>
          {foodFirstNameData.length === null ||
          foodFirstNameData.length >= 1 ? (
            <MealCard mealData={foodFirstNameData} />
          ) : (
            <FoodCard searchFilterCategory={searchFilterCategory} />
          )}
        </div>
      </div>
    </>
  );
};

export default page;
