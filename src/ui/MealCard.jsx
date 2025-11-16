"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import Link from "next/link";

const RecipeCard = ({ mealData }) => {
  console.log(mealData, "mealData");
  return (
    <>
      {mealData.length === 0 ? (
        ""
      ) : (
        <div className="mb-5">
          <h1
            style={{ letterSpacing: "4px" }}
            className="uppercase lg:text-[2rem] text-[1rem] font-semibold  tracking-wide"
          >
            meals
          </h1>
          <p className="bg-red-600 lg:w-28 lg:h-1 h-[3px] w-17 "></p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mealData.map((item, index) => (
          <Card
            key={index}
            className="
            group
            relative
            flex
            h-full
            flex-col
            overflow-hidden
            border
            border-border/70
            bg-gradient-to-br from-background via-background/95 to-muted/70
            shadow-sm
            backdrop-blur
            transition-all
            duration-300
            hover:-translate-y-1.5
            hover:border-primary/70
            hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]
          "
          >
            {/* soft glow */}
            <div
              className="
              pointer-events-none
              absolute -top-20 -right-20 h-40 w-40
              rounded-full
              bg-primary/15
              blur-3xl
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
            />

            <div className="relative z-10 flex flex-col gap-5 p-5">
              {/* top: image + title */}
              <div className="flex items-center gap-4">
                <div
                  className="
                  relative
                  h-16 w-16
                  shrink-0
                  overflow-hidden
                  rounded-2xl
                  border border-border/60
                  bg-gradient-to-br from-muted/60 via-background to-muted/40
                  shadow-md
                  transition-all duration-300
                  group-hover:shadow-lg
                  group-hover:border-primary/70
                  group-hover:scale-[1.03]
                "
                >
                  <img
                    src={item.strMealThumb}
                    alt={item.strMealThumb}
                    className="object-contain p-2"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-semibold tracking-tight">
                      {item.strMeal}
                    </h2>
                    <span
                      className="
      inline-flex items-center rounded-full border border-primary/30
      bg-primary/10 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.16em]
      text-primary/90
    "
                    >
                      #{item.idMeal}
                    </span>
                  </div>

                  {/* Country Display */}
                  <span
                    className="
    w-fit
  inline-flex items-center gap-1.5
  rounded-full bg-blue-50 text-blue-600
  border border-blue-200
  px-2 py-0.5 text-[11px] font-medium uppercase
  tracking-[0.14em]
  "
                  >
                    🌍 {item.strArea}
                  </span>

                  <p className="text-xs text-muted-foreground">
                    Perfect base for countless recipes
                  </p>
                </div>
              </div>

              <div className="mt-1 flex items-center justify-between gap-3 text-xs ">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {item.strCategory}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    Everyday meals
                  </span>
                </div>
                <Link href={`/meal/${item.idMeal}`}>
                  <button
                    type="button"
                    className="
                  cursor-pointer
                  inline-flex items-center gap-1.5 rounded-full border border-border/80
                  bg-background/70 px-3 py-1.5 text-[11px] font-medium
                  uppercase tracking-[0.16em]
                  transition-all duration-300
                  group-hover:border-primary/70
                  group-hover:bg-primary/90
                  group-hover:text-primary-foreground
                "
                  >
                    full recipe
                    <span className="text-xs group-hover:translate-x-0.5 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default RecipeCard;

// "use client";

// import { Spinner } from "@/components/ui/spinner";
// import React from "react";

// const RecipeCard = ({ mealData }) => {
//   const meals = Array.isArray(mealData) ? mealData : [mealData];

//   if (!meals || meals.length === 0) {
//     return (
//      <div className="py-10 flex items-center justify-center">
//         <div>
//           <Spinner />
//           <p className="text-[1.2rem] ml-4">Please Wait...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="py-14 flex flex-col items-center justify-center w-full bg-gradient-to-br from-white to-gray-200 dark:from-neutral-950 dark:to-neutral-900">
//       {meals.map((meal, index) => {
//         const ingredients = [];
//         for (let i = 1; i <= 20; i++) {
//           const ingredient = meal[`strIngredient${i}`];
//           const measure = meal[`strMeasure${i}`];
//           if (ingredient && ingredient.trim() !== "") {
//             ingredients.push({ ingredient, measure });
//           }
//         }

//         return (
//           <div
//             key={index}
//             className="w-[90%] md:w-[70%] bg-white/60 dark:bg-neutral-800/70 backdrop-blur-xl border border-white/30 dark:border-neutral-700 shadow-2xl rounded-3xl p-10 space-y-10 transition-all hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
//           >
//             <h2 className="text-center font-extrabold text-5xl bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent tracking-wide">
//               {meal.strMeal}
//             </h2>

//             <div className="relative group rounded-2xl overflow-hidden shadow-xl">
//               <img
//                 src={meal.strMealThumb}
//                 alt={meal.strMeal}
//                 className="w-full h-[25rem] object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>

//             <div className="flex gap-4 flex-wrap justify-center">
//               <span className="px-4 py-1 bg-rose-100 dark:bg-rose-900/40 rounded-full text-rose-700 dark:text-rose-300 font-semibold shadow">
//                 🍗 {meal.strCategory}
//               </span>
//               <span className="px-4 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-700 dark:text-indigo-300 font-semibold shadow">
//                 🌍 {meal.strArea}
//               </span>
//             </div>

//             <div className="space-y-3">
//               <h3 className="text-3xl font-bold mb-4">🥗 Ingredients</h3>
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {ingredients.map((item, i) => (
//                   <li
//                     key={i}
//                     className="bg-white/70 dark:bg-neutral-700/60 border border-gray-200 dark:border-neutral-600 rounded-xl px-4 py-3 shadow-md font-semibold flex justify-between"
//                   >
//                     <span>{item.ingredient}</span>
//                     <span className="font-normal">{item.measure}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-3xl font-bold mb-4">🧾 Instructions</h3>
//               <p className="text-lg whitespace-pre-line leading-relaxed bg-white/60 dark:bg-neutral-700/50 p-6 rounded-2xl shadow-md">
//                 {meal.strInstructions}
//               </p>
//             </div>

//             {meal.strYoutube && (
//               <div className="flex justify-center">
//                 <a
//                   href={meal.strYoutube}
//                   target="_blank"
//                   className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-lg text-lg transform hover:scale-105 transition-all"
//                 >
//                   ▶ Watch Recipe Video
//                 </a>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default RecipeCard;
