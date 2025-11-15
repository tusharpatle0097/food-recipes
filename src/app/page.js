"use client";

import React from "react";
import { useFood } from "./context/FoodContext";
import FoodCard from "@/ui/FoodCard";
import ListButton from "@/ui/ListButton";
import SearchInput from "@/ui/SearchInput";
import MealCard from "../ui/MealCard";

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

  return (
    <>
      <div className="mt-10 w-[50%] mx-auto">
        <SearchInput
          onChange={(e) => setFoodFirstName(e.target.value)}
          value={foodFirstName}
        />
      </div>
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

{/* this is for mobile view only  */}

        <div className="px-10 py-10 block lg:hidden ">
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
