"use client";

import { Spinner } from "@/components/ui/spinner";
import React from "react";

const RecipeCard = ({ mealData }) => {
  const meals = Array.isArray(mealData) ? mealData : [mealData];

  if (!meals || meals.length === 0) {
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
    <div className="py-14 flex flex-col items-center justify-center w-full bg-gradient-to-br from-white to-gray-200 dark:from-neutral-950 dark:to-neutral-900">
      {meals.map((meal, index) => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measure = meal[`strMeasure${i}`];
          if (ingredient && ingredient.trim() !== "") {
            ingredients.push({ ingredient, measure });
          }
        }

        return (
          <div
            key={index}
            className="w-[90%] md:w-[70%] bg-white/60 dark:bg-neutral-800/70 backdrop-blur-xl border border-white/30 dark:border-neutral-700 shadow-2xl rounded-3xl p-10 space-y-10 transition-all hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
          >
            <h2 className="text-center font-extrabold text-5xl bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent tracking-wide">
              {meal.strMeal}
            </h2>

            <div className="relative group rounded-2xl overflow-hidden shadow-xl">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-[25rem] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              <span className="px-4 py-1 bg-rose-100 dark:bg-rose-900/40 rounded-full text-rose-700 dark:text-rose-300 font-semibold shadow">
                🍗 {meal.strCategory}
              </span>
              <span className="px-4 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-700 dark:text-indigo-300 font-semibold shadow">
                🌍 {meal.strArea}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-bold mb-4">🥗 Ingredients</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ingredients.map((item, i) => (
                  <li
                    key={i}
                    className="bg-white/70 dark:bg-neutral-700/60 border border-gray-200 dark:border-neutral-600 rounded-xl px-4 py-3 shadow-md font-semibold flex justify-between"
                  >
                    <span>{item.ingredient}</span>
                    <span className="font-normal">{item.measure}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">🧾 Instructions</h3>
              <p className="text-lg whitespace-pre-line leading-relaxed bg-white/60 dark:bg-neutral-700/50 p-6 rounded-2xl shadow-md">
                {meal.strInstructions}
              </p>
            </div>

            {meal.strYoutube && (
              <div className="flex justify-center">
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-lg text-lg transform hover:scale-105 transition-all"
                >
                  ▶ Watch Recipe Video
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RecipeCard;
