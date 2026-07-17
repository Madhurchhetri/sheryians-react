import React, { useContext, useMemo, useState, useEffect, useRef } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Favorites = () => {
  const { data } = useContext(recipeContext);

  const [search, setSearch] = useState("");

  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const searchRef = useRef(null);

  const favoriteRecipes = useMemo(() => {
    return data.filter((recipe) => {
      return (
        recipe.isFavorite &&
        recipe.title.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [data, search]);

  useEffect(() => {
    const ctx = gsap.context(() => {
        cardsRef.current = cardsRef.current.slice(0, favoriteRecipes.length);

        sectionRef.current = sectionRef.current;
        searchRef.current = searchRef.current;
        gsap.fromTo(sectionRef.current, {
            opacity: 0,
            y: 50,
        },{
            opacity: 1,
            y: 0,
            duration: 0.8,
            scale: 0.95,
            ease: "power3.out",
        })

        gsap.fromTo(searchRef.current, {
            opacity: 0,
            y: 50,
        },{
            opacity: 1,
            y: 0,
            duration: 0.8,
            scale: 0.95,
            ease: "power3.out",
        })

        gsap.fromTo(searchRef.current, {
            opacity: 0,
            y: 50,
        },{
            opacity: 1,
            y: 0,
            duration: 0.8,
            scale: 0.95,
            ease: "power3.out",
        })

    if (favoriteRecipes.length) {
      gsap.from(cardsRef.current, {
        y: 70,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
    }
    }, sectionRef);
    

  }, [favoriteRecipes]);

  return (
    <div className="min-h-screen py-10">

      {/* Heading */}

      <div
      ref={sectionRef}
       className="text-center">

        <h1 className="text-5xl font-black">
          ❤️ My Favorite Recipes
        </h1>

        <p className="text-zinc-400 mt-4">
          Save the recipes you love and cook them anytime.
        </p>

      </div>

      {/* Search */}

      <div 
      ref={searchRef}
      className="max-w-xl mx-auto mt-10">

        <input
          type="text"
          placeholder="🔍 Search Favorite Recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
        />

      </div>

      {/* Count */}

      <div className="mt-8 flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          Favorite Recipes
        </h2>

        <span className="bg-red-500 px-5 py-2 rounded-full font-semibold">
          ❤️ {favoriteRecipes.length}
        </span>

      </div>

      {/* Empty */}

      {favoriteRecipes.length === 0 ? (
        <div className="mt-28 text-center">

          <div className="text-8xl">
            💔
          </div>

          <h2 className="text-4xl font-bold mt-6">
            No Favorite Recipes
          </h2>

          <p className="text-zinc-400 mt-3">
            Start adding recipes you love.
          </p>

          <Link
            to="/recipes"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold"
          >
            Explore Recipes
          </Link>

        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

          {favoriteRecipes.map((recipe, index) => (
            <div
              key={recipe.id}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Favorites;