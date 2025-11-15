"use client";

import { useFood } from "@/app/context/FoodContext";

import SearchInput from "@/ui/SearchInput";
import MealCard from '../../../ui/MealCard'

import CategoryFilterCard from "@/ui/CategoryFilterCard";
import { Spinner } from "@/components/ui/spinner";
const page = () => {
  let { searchCategoryFilter, setCategoryFilter, categoryFilterSearch,    foodFirstNameData,
    foodFirstName,
    setFoodFirstName, } =
    useFood();

  if (!searchCategoryFilter || searchCategoryFilter.length === 0) {
    return (
      <div className="py-10 flex items-center justify-center">
        <div>
          <Spinner />
          <p className="text-[1.2rem] ml-4">Please Wait...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 w-[50%] mx-auto">
         <SearchInput
          onChange={(e) => setFoodFirstName(e.target.value)}
          value={foodFirstName}
        />
      </div>

      <div>
        {foodFirstNameData.length === null || foodFirstNameData.length >= 1 ? (
          <MealCard mealData={foodFirstNameData} />
        ) : (
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 px-20 py-10">
            <CategoryFilterCard searchCategoryFilter={searchCategoryFilter} />
          </div>
        )}
      </div>
    </>
  );
};

export default page;
