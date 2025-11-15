"use client";

import React from "react";

import MealCard from "@/ui/MealCard";
import { useFood } from "@/app/context/FoodContext";


const MealDetailsCard = () => {
  let { mealData } = useFood();
  return (
    <div>
      <MealCard mealData={mealData} />
    </div>
  );
};

export default MealDetailsCard;
