"use client";

import React from "react";
import HeroSection from "@/ui/HeroSection";
import CategoryList from "./categoryList/page";
import Footer from "@/ui/Footer";

const page = () => {
  return (
    <>
      <HeroSection />
      <CategoryList />
     
    </>
  );
};

export default page;

// "use client";

// import React from "react";
// import { useFood } from "./context/FoodContext";
// import FoodCard from "@/ui/FoodCard";
// import ListButton from "@/ui/ListButton";
// import MealCard from "../ui/MealCard";
// import HeroSection from "@/ui/HeroSection";
// import CategoryList from "./categoryList/page";

// const page = () => {
//   const {
//     allCategoryButtonList,
//     searchFilterCategory,
//     setSelectCategory,
//     selectCategory,
//     foodFirstNameData,
//   } = useFood();

//   return (
//     <>
//       <HeroSection />
//       <div className="px-10 py-10 hidden lg:block">
//         <div className="grid grid-cols-[10%_90%] ">
//           <div>
//             {allCategoryButtonList.map((items, key) => {
//               return (
//                 <ListButton
//                   selectCategory={selectCategory === items.strCategory}
//                   onClick={() => setSelectCategory(items.strCategory)}
//                   key={key}
//                 >
//                   {items.strCategory}
//                 </ListButton>
//               );
//             })}
//           </div>

//           <div>
//             <MealCard mealData={foodFirstNameData} />
//             <div className="py-10">
//               <h1
//                 style={{ letterSpacing: "4px" }}
//                 className="uppercase text-[2rem] font-semibold  tracking-wide"
//               >
//                 categories
//               </h1>
//               <p className="bg-red-600 w-55 h-1 mb-5"></p>
//               <FoodCard searchFilterCategory={searchFilterCategory} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* this is for mobile view */}
//       <div className="px-2 py-10 block lg:hidden ">
//         {/* <div>
//           {allCategoryButtonList.map((items, key) => {
//             return (
//               <ListButton
//                 selectCategory={selectCategory === items.strCategory}
//                 onClick={() => setSelectCategory(items.strCategory)}
//                 key={key}
//               >
//                 {items.strCategory}
//               </ListButton>
//             );
//           })}
//         </div> */}

//         <div>
//           <MealCard mealData={foodFirstNameData} />

//           <div>
//             <div className="lg:ml-21 ml-2 py-5">
//               <h1
//                 style={{ letterSpacing: "4px" }}
//                 className="uppercase lg:text-[2rem] text-[1rem] font-semibold  tracking-wide"
//               >
//                 categories
//               </h1>
//               <p className="bg-red-600 lg:w-55 lg:h-1 h-[3px] w-32 "></p>
//             </div>
//             <FoodCard searchFilterCategory={searchFilterCategory} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;
