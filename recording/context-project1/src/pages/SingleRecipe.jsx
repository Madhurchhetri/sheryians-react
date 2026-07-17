import React, { useContext, useEffect, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = data.find((item) => item.id === id);
  const { register, handleSubmit, reset } = useForm({
    values: {
      title: recipe?.title || "",
      image: recipe?.image || "",
      chefName: recipe?.chefName || "",
      description: recipe?.description || "",
      ingredients: recipe?.ingredients || "",
      instructions: recipe?.instructions || "",
      category: recipe?.category || "",
    },
  });

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-4xl font-bold">🍲 Recipe Not Found</h1>
      </div>
    );
  }

  const updateHandler = (formData) => {
    const updatedRecipes = data.map((item) =>
      item.id === id ? { ...item, ...formData } : item,
    );
    setData(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    toast.success("Recipe Updated");
    navigate("/recipes");
  };

  const deleteHandler = () => {
    if (!window.confirm("Delete this recipe?")) return;

    const updatedRecipes = data.filter((item) => item.id !== id);

    setData(updatedRecipes);

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    toast.success("Recipe Deleted");
    navigate("/recipes");
  };

  const favoriteHandler = () => {
    const updatedRecipes = data.map((item) =>
      item.id === id
        ? {
            ...item,
            isFavorite: !item.isFavorite,
          }
        : item,
    );

    setData(updatedRecipes);

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    const currentRecipe = updatedRecipes.find((item) => item.id === id);

    if (currentRecipe.isFavorite) {
      toast.success("❤️ Added to Favorites");
    } else {
      toast.info("💔 Removed from Favorites");
    }
  };

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* LEFT */}

        <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-xl">
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-[400px] object-cover"
            />

            <button
              onClick={favoriteHandler}
              className="absolute top-5 right-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-zinc-900/60 backdrop-blur-lg shadow-xl transition-all duration-300 hover:scale-110 hover:bg-zinc-800/80"
            >
              <i
                className={`${
                  recipe.isFavorite
                    ? "ri-heart-fill text-red-500"
                    : "ri-heart-line text-white"
                } text-3xl transition-all duration-300`}
              />
            </button>
          </div>

          <div className="p-8">
            <span className="bg-orange-500 px-4 py-2 rounded-full text-sm">
              {recipe.category}
            </span>

            <h1 className="text-5xl font-bold mt-5">{recipe.title}</h1>

            <p className="mt-4 text-gray-400 text-lg">
              👨‍🍳 Chef :
              <span className="text-white ml-2">{recipe.chefName}</span>
            </p>

            <p className="leading-8 text-gray-300 mt-6">{recipe.description}</p>

            <div className="mt-8 bg-zinc-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">🥬 Ingredients</h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {recipe.ingredients.split(",").map((item, index) => (
                  <li key={index}>{item.trim()}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 bg-zinc-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4">🍳 Instructions</h2>

              <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                {recipe.instructions.split(",").map((item, index) => (
                  <li key={index}>{item.trim()}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        {/* RIGHT */}

        <div className="bg-zinc-900 rounded-3xl shadow-xl p-8 h-fit sticky top-10">
          <h2 className="text-4xl font-bold mb-8">✏️ Update Recipe</h2>

          <form onSubmit={handleSubmit(updateHandler)} className="space-y-5">
            <div>
              <label className="block mb-2 text-gray-300">Recipe Title</label>

              <input
                {...register("title")}
                type="text"
                placeholder="Recipe Title"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Image URL</label>

              <input
                {...register("image")}
                type="url"
                placeholder="Image URL"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Chef Name</label>

              <input
                {...register("chefName")}
                type="text"
                placeholder="Chef Name"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Description</label>

              <textarea
                {...register("description")}
                rows={4}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 outline-none resize-none focus:border-orange-500"
              ></textarea>
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Ingredients</label>

              <textarea
                {...register("ingredients")}
                rows={4}
                placeholder="Separate using comma"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 outline-none resize-none focus:border-orange-500"
              ></textarea>
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Instructions</label>

              <textarea
                {...register("instructions")}
                rows={5}
                placeholder="Separate using comma"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 outline-none resize-none focus:border-orange-500"
              ></textarea>
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Category</label>

              <select
                {...register("category")}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 outline-none focus:border-orange-500"
              >
                <option value="">Select Category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>

            <div className="flex gap-5 pt-4">
              <button
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-700 duration-300 py-4 rounded-xl text-lg font-semibold"
              >
                Update Recipe
              </button>

              <button
                type="button"
                onClick={deleteHandler}
                className="flex-1 bg-red-600 hover:bg-red-700 duration-300 py-4 rounded-xl text-lg font-semibold"
              >
                Delete Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
