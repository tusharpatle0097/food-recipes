"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  let params = useParams();
  console.log(params, "xxx");

  const [foodCategory, setFoodCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All");
  const [searchCategory, setSearchCategory] = useState("");
  const [meal, setMeal] = useState([]);
  const [categoryFilterSearch, setCategoryFilter] = useState("");
  const [mealData, setMealData] = useState([]);
  const [foodFirstName, setFoodFirstName] = useState(null);
  const [foodFirstNameData, setFoodFirstNameData] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    fetchFoodByFirstName();
  }, [foodFirstName]);

  useEffect(() => {
    if (params?.id) {
      fatchCategoryFilter();
      fetchMealData();
    }
  }, [params?.id]);

  const fetchCategory = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        setFoodCategory(res.data.categories);
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
        console.log(res.data.meals, "sexxx");
        setFoodFirstNameData(res.data.meals || []);
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
      .get(`https:www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`)
      .then((res) => {
        setMeal(res.data.meals || []);
      })
      .catch((err) => {
        console.log(err);
        setMeal([]);
      });
  };

  const searchCategoryFilter = (meal || []).filter((items) =>
    items.strMeal.toLowerCase().includes(categoryFilterSearch.toLowerCase())
  );

  const fetchMealData = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then((res) => {
        console.log(res.data.meals[0], "89");
        setMealData(res.data.meals || []);
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
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => useContext(FoodContext);
