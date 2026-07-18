import React, { useContext, useEffect, useRef } from "react";
import { recipeContext } from "../context/RecipeContext";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturedRecipes = () => {
  const { data } = useContext(recipeContext);

  const sectionRef = useRef(null);

  const featuredRecipes = data.slice(0, 4);

  useEffect(() => {
    if (!featuredRecipes.length) return;

    const ctx = gsap.context(() => {
      gsap.from(".featured-card", {
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "opacity,transform",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [featuredRecipes]);

  return (
    <section
      ref={sectionRef}
      className="py-24"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center mb-16">

        <div>
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Featured Recipes
          </span>

          <h2 className="text-5xl font-black mt-4">
            Fresh From Our Kitchen
          </h2>
        </div>

        <Link
          to="/recipes"
          className="mt-6 lg:mt-0 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition"
        >
          View All Recipes →
        </Link>
      </div>

      {featuredRecipes.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-zinc-700 bg-zinc-900 py-20 text-center">

          <div className="text-7xl mb-6">
            🍽
          </div>

          <h2 className="text-3xl font-bold">
            No Recipes Yet
          </h2>

          <p className="text-gray-400 mt-4">
            Create your first recipe and it will appear here.
          </p>

          <Link
            to="/create-recipe"
            className="inline-block mt-8 bg-orange-500 px-7 py-3 rounded-xl hover:bg-orange-600"
          >
            Create Recipe
          </Link>

        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {featuredRecipes.map((recipe) => (

            <Link
              key={recipe.id}
              to={`/recipes/details/${recipe.id}`}
              className="featured-card group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-orange-500 duration-300 hover:-translate-y-3"
            >

              <div className="relative overflow-hidden">

                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-60 object-cover duration-500 group-hover:scale-110"
                />

                <span className="absolute top-4 left-4 bg-orange-500 px-4 py-1 rounded-full text-sm">
                  {recipe.category}
                </span>

                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md w-12 h-12 rounded-full flex justify-center items-center text-xl">
                  {recipe.isFavorite ? "❤️" : "🤍"}
                </span>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {recipe.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  👨‍🍳 {recipe.chefName}
                </p>

                <p className="line-clamp-2 mt-5 text-gray-500">
                  {recipe.description}
                </p>

                <div className="flex justify-between mt-6 text-sm">

                  <span className="bg-zinc-800 px-3 py-2 rounded-lg">
                    ⭐ {recipe.difficulty || "Easy"}
                  </span>

                  <span className="bg-zinc-800 px-3 py-2 rounded-lg">
                    ⏱ {recipe.cookingTime || "15 min"}
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>
      )}
    </section>
  );
};

export default FeaturedRecipes;