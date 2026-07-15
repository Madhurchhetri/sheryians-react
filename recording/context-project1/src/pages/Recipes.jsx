import React, { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipeContext);

  if (data.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh]">

        <i className="ri-restaurant-line text-8xl text-orange-500"></i>

        <h1 className="text-4xl font-bold mt-5">

          No Recipes Found

        </h1>

        <p className="text-gray-400 mt-3">

          Create your first delicious recipe 🍲

        </p>

      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10">

      {data.map((recipe) => (

        <RecipeCard
          key={recipe.id}
          recipe={recipe}
        />

      ))}

    </div>
  );
};

export default Recipes;