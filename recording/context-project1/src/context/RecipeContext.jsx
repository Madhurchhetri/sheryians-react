import React, { createContext, useEffect, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = ({ children }) => {
  const [data, setData] = useState(() => {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    return recipes.map((recipe) => ({
      isFavorite: false,
      ...recipe,
    }));
  });

  // Jab bhi data change hoga, localStorage automatically update hoga
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);

  return (
    <recipeContext.Provider value={{ data, setData }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;