"use client";

import { useFood } from "@/app/context/FoodContext";
import MealCard from "../../../ui/MealCard";
import CategoryFilterCard from "@/ui/CategoryFilterCard";
import HeroSection from "@/ui/HeroSection";
import Loading from "@/ui/Loading";

const page = () => {
  let {
    searchCategoryFilter,
    foodFirstNameData,
  } = useFood();

  if (!searchCategoryFilter || searchCategoryFilter.length === 0) {
    return <Loading />;
  }
  let placeholder = "Search Any Food...";
  return (
    <>
      <HeroSection />

      <div>
        <div className="lg:px-20 px-2 py-2 pt-5">
          <MealCard mealData={foodFirstNameData} />
        </div>

        <div>
          <div className="lg:ml-21 ml-2">
            <h1
              style={{ letterSpacing: "4px" }}
              className="uppercase lg:text-[2rem] text-[1rem] font-semibold  tracking-wide"
            >
              meals
            </h1>
            <p className="bg-red-600 lg:w-28 lg:h-1 h-[3px] w-17 "></p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:px-20 px-2 py-5">
            <CategoryFilterCard searchCategoryFilter={searchCategoryFilter} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
