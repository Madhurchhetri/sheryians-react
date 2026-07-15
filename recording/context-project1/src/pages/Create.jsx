// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { nanoid } from 'nanoid'
// import { useContext } from 'react'
// import { recipeContext } from '../context/RecipeContext'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

// const Create = () => {
//     const{data, setData} = useContext(recipeContext);
//     const {register, handleSubmit ,reset} = useForm()
//     const navigate = useNavigate()

//     const submitHandler=(recipeData)=>{
//         recipeData.id = nanoid();
//         const copyData = [...data]
//         copyData.push(recipeData)
//         setData(copyData);
//         localStorage.setItem('recipes', JSON.stringify(copyData)); 
//         toast.success('Recipe added successfully');
//         reset();
//         navigate('/recipes');
//     }
//   return (
//     <>
//         <form onSubmit={handleSubmit(submitHandler)}>
//             <input
//             className='block border-b outline-0 p-2'
//             {...register("title")}
//              type="text" placeholder='Enter Recipe Name' />
//              <input
//             className='block border-b outline-0 p-2'
//             {...register("image")}
//              type="url" placeholder='Enter image url' />
//              <small className='text-red-400'> this is the error is shown</small>
//               <input
//             className='block border-b outline-0 p-2'
//             {...register("chefName")}
//              type="text" placeholder='Enter Chef Name' />
//               <textarea
//               className='block border-b outline-0 p-2'
//               {...register("description")}
//               placeholder='start from here'
//               >
//               </textarea>
//               <textarea
//               className='block border-b outline-0 p-2'
//               {...register("ingredients")}
//               placeholder='write ingredients seperated by comma'
//               >
//               </textarea>
//                <textarea
//               className='block border-b outline-0 p-2'
//               {...register("instructions")}
//               placeholder='write instructions seperated by comma'
//               >
//               </textarea>
//               <select
//               className='block border-b outline-0 p-2 bg-gray-800'
//               {...register("category")}
//               >
//                 <option value="">Select a category</option>
//                 <option value="breakfast">Breakfast</option>
//                 <option value="lunch">Lunch</option>
//                 <option value="dinner">Dinner</option>
//               </select>

//               <button className=' block bg-gray-900 px-4 py-2 rounded mt-3' type='submit'>Save Recipe</button>
             
//         </form>
//     </>
//   )
// }

// export default Create

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const { data, setData } = useContext(recipeContext);
  const navigate = useNavigate();

  const [preview, setPreview] = useState(
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200"
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const image = watch("image");

  React.useEffect(() => {
    if (image) {
      setPreview(image);
    } else {
      setPreview(
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200"
      );
    }
  }, [image]);

  const submitHandler = (formData) => {
    const recipe = {
      id: nanoid(),
      ...formData,
      isFavorite: false,
    };

    const updatedRecipes = [...data, recipe];

    setData(updatedRecipes);

    localStorage.setItem(
      "recipes",
      JSON.stringify(updatedRecipes)
    );

    toast.success("Recipe Created Successfully 🍔");

    reset();

    navigate("/recipes");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">

      <div className="w-full max-w-7xl grid lg:grid-cols-2 rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl">

        {/* LEFT */}

        <div className="relative">

          <img
            src={preview}
            className="w-full h-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-black/55"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-10">

            <span className="bg-orange-500 px-5 py-2 rounded-full w-fit mb-5">
              Create Recipe
            </span>

            <h1 className="text-6xl font-black leading-tight">

              Cook.

              <br />

              Share.

              <br />

              Inspire.

            </h1>

            <p className="text-gray-300 mt-6 leading-8">

              Add your own delicious recipes and build your
              personal cookbook.

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="p-10">

          <h2 className="text-4xl font-bold mb-8">

            🍲 New Recipe

          </h2>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className="space-y-5"
          >

            <div>

              <label className="block mb-2">

                Recipe Name

              </label>

              <input
                {...register("title", {
                  required: "Recipe Name Required",
                })}
                placeholder="Chicken Biryani"
                className="w-full rounded-xl bg-zinc-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

              {errors.title && (
                <small className="text-red-400">

                  {errors.title.message}

                </small>
              )}

            </div>

            <div>

              <label className="block mb-2">

                Image URL

              </label>

              <input
                {...register("image", {
                  required: "Image URL Required",
                })}
                placeholder="https://..."
                className="w-full rounded-xl bg-zinc-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

              {errors.image && (
                <small className="text-red-400">

                  {errors.image.message}

                </small>
              )}

            </div>

            <div>

              <label className="block mb-2">

                Chef Name

              </label>

              <input
                {...register("chefName", {
                  required: "Chef Name Required",
                })}
                placeholder="Chef John"
                className="w-full rounded-xl bg-zinc-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              />

            </div>

            <div className="grid grid-cols-3 gap-4">

              <div>

                <label className="block mb-2">

                  Difficulty

                </label>

                <select
                  {...register("difficulty")}
                  className="w-full rounded-xl bg-zinc-800 p-4"
                >

                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>

                </select>

              </div>

              <div>

                <label className="block mb-2">

                  Time

                </label>

                <input
                  {...register("cookingTime")}
                  placeholder="30 min"
                  className="w-full rounded-xl bg-zinc-800 p-4 outline-none"
                />

              </div>

              <div>

                <label className="block mb-2">

                  Servings

                </label>

                <input
                  {...register("servings")}
                  placeholder="4"
                  className="w-full rounded-xl bg-zinc-800 p-4 outline-none"
                />

              </div>

            </div>
                        <div>

              <label className="block mb-2">
                Description
              </label>

              <textarea
                {...register("description", {
                  required: "Description Required",
                })}
                rows={4}
                placeholder="Write a short description about your recipe..."
                className="w-full rounded-xl bg-zinc-800 p-4 outline-none resize-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              {errors.description && (
                <small className="text-red-400">
                  {errors.description.message}
                </small>
              )}

            </div>

            <div>

              <label className="block mb-2">
                Ingredients
              </label>

              <textarea
                {...register("ingredients", {
                  required: "Ingredients Required",
                })}
                rows={4}
                placeholder="Rice, Chicken, Onion, Tomato..."
                className="w-full rounded-xl bg-zinc-800 p-4 outline-none resize-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <small className="text-gray-400">
                Separate each ingredient using a comma (,)
              </small>

              {errors.ingredients && (
                <small className="block text-red-400 mt-1">
                  {errors.ingredients.message}
                </small>
              )}

            </div>

            <div>

              <label className="block mb-2">
                Instructions
              </label>

              <textarea
                {...register("instructions", {
                  required: "Instructions Required",
                })}
                rows={5}
                placeholder="Boil rice, Fry chicken, Mix everything..."
                className="w-full rounded-xl bg-zinc-800 p-4 outline-none resize-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <small className="text-gray-400">
                Separate each step using a comma (,)
              </small>

              {errors.instructions && (
                <small className="block text-red-400 mt-1">
                  {errors.instructions.message}
                </small>
              )}

            </div>

            <div>

              <label className="block mb-2">
                Category
              </label>

              <select
                {...register("category", {
                  required: "Please select a category",
                })}
                className="w-full rounded-xl bg-zinc-800 p-4 outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select Category</option>
                <option value="breakfast">🍳 Breakfast</option>
                <option value="lunch">🍛 Lunch</option>
                <option value="dinner">🍕 Dinner</option>
              </select>

              {errors.category && (
                <small className="text-red-400">
                  {errors.category.message}
                </small>
              )}

            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02]"
            >
              🍽 Save Recipe
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Create;