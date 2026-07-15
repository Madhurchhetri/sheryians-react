import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";

const RecipeCard = ({ recipe }) => {

  const { data, setData } = useContext(recipeContext);

  const favoriteHandler = (e) => {

    e.preventDefault();

    const updatedRecipes = data.map((item) =>
      item.id === recipe.id
        ? {
            ...item,
            isFavorite: !item.isFavorite,
          }
        : item
    );

    setData(updatedRecipes);

    localStorage.setItem(
      "recipes",
      JSON.stringify(updatedRecipes)
    );

    toast.success(
      recipe.isFavorite
        ? "Removed from Favorites ❤️"
        : "Added to Favorites ❤️"
    );
  };

  return (

    <Link
      to={`/recipes/details/${recipe.id}`}
      className="group bg-zinc-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-orange-500/20 duration-300 hover:-translate-y-2"
    >

      <div className="relative overflow-hidden">

        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-60 w-full object-cover duration-500 group-hover:scale-110"
        />

        <button
          onClick={favoriteHandler}
          className="absolute top-4 right-4 bg-black/60 backdrop-blur-md w-12 h-12 rounded-full flex justify-center items-center"
        >

          <i
            className={
              recipe.isFavorite
                ? "ri-heart-fill text-red-500 text-2xl"
                : "ri-heart-line text-white text-2xl"
            }
          ></i>

        </button>

        <span className="absolute bottom-4 left-4 bg-orange-500 px-4 py-1 rounded-full text-sm">

          {recipe.category}

        </span>

      </div>

      <div className="p-5">

        <h2 className="text-2xl font-bold">

          {recipe.title}

        </h2>

        <p className="text-gray-400 mt-2">

          👨‍🍳 {recipe.chefName}

        </p>

        <p className="text-gray-500 mt-4 line-clamp-2">

          {recipe.description}

        </p>

        <div className="flex justify-between mt-6 text-sm">

          <span className="bg-zinc-800 px-3 py-2 rounded-lg">

            ⭐ {recipe.difficulty}

          </span>

          <span className="bg-zinc-800 px-3 py-2 rounded-lg">

            ⏱ {recipe.cookingTime}

          </span>

          <span className="bg-zinc-800 px-3 py-2 rounded-lg">

            🍽 {recipe.servings}

          </span>

        </div>

        <button
          className="mt-6 w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-xl py-3 font-semibold hover:scale-[1.02] duration-300"
        >

          View Recipe →

        </button>

      </div>

    </Link>

  );
};

export default RecipeCard;