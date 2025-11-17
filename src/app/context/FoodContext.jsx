"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  let params = useParams();
  console.log(params, "params");

  const [foodCategory, setFoodCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All");
  const [searchCategory, setSearchCategory] = useState("");
  const [meal, setMeal] = useState([]);
  const [categoryFilterSearch, setCategoryFilter] = useState("");
  const [mealData, setMealData] = useState([]);
  const [foodFirstName, setFoodFirstName] = useState("");
  const [foodFirstNameData, setFoodFirstNameData] = useState([]);
  const [mealDis, setMealDis] = useState([]);
  const [noMealError, setNoMealError] = useState("");

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    // fetchFoodByFirstName();
  }, [foodFirstName]);

  useEffect(() => {
    if (params?.id) {
      fatchCategoryFilter();
      fetchMealData();
      mealByDetails();
    }
  }, [params?.id]);

  const fetchCategory = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        let newD = (res.data.categories)
        let removeBeef =newD.slice(1) 
        setFoodCategory(removeBeef);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchFoodByFirstName = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodFirstName}`
      )
      .then((res) => {
        let meals = res.data.meals || [];
        setFoodFirstNameData(meals);
        if (meals.length === 0 || meals.length === 0) {
          setNoMealError("No any food found.");
        }
        if (meals.length >= 1) {
          setNoMealError("");
        }

        if (foodFirstName.length === 0 || foodFirstName.length === null) {
          setNoMealError("Please enter a value before submitting.");
          setTimeout(() => {
            setNoMealError("");
          }, 2000);
          return;
        }

        console.log(res.data.meals, "problem");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let allCategoryButtonList = [{ strCategory: "All" }, ...foodCategory];

  let filterCategory =
    selectCategory === "All"
      ? foodCategory
      : foodCategory.filter((items) => items.strCategory === selectCategory);

  const searchFilterCategory = filterCategory.filter((items) =>
    items.strCategory.toLowerCase().includes(searchCategory.toLowerCase())
  );

  const fatchCategoryFilter = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`)
      .then((res) => {
        setMeal(res.data.meals || []);
        console.log(res, "iii");
      })
      .catch((err) => {
        console.log(err, "mobile error");
      });
  };

  const searchCategoryFilter = (meal || []).filter((items) =>
    items.strMeal.toLowerCase().includes(categoryFilterSearch.toLowerCase())
  );

  const fetchMealData = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then((res) => {
        setMealData(res.data.meals || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const mealByDetails = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then((res) => {
        console.log(res.data.meals, "sex");
        setMealDis(res.data.meals || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FoodContext.Provider
      value={{
        allCategoryButtonList,
        searchFilterCategory,
        setSelectCategory,
        setSearchCategory,
        searchCategory,
        selectCategory,
        searchCategoryFilter,
        setCategoryFilter,
        categoryFilterSearch,
        mealData,
        foodFirstNameData,
        foodFirstName,
        setFoodFirstName,
        // fetchMealData
        mealDis,
        fetchFoodByFirstName,
        noMealError,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => useContext(FoodContext);
