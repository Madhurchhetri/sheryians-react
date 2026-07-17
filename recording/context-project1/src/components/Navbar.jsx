import React, { useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const { data } = useContext(recipeContext);

  const favoriteCount = data.filter(
    (recipe) => recipe.isFavorite
  ).length;

  const totalRecipes = data.length;

  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "top top",
        end: "max",

        onUpdate: (self) => {
          gsap.to(navRef.current, {
            y: self.direction === 1 ? -120 : 0,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-5 z-50 mb-10"
    >
      <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl px-8 py-4 flex justify-between items-center shadow-xl">

        {/* LEFT */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <div className="bg-orange-500 w-12 h-12 rounded-xl flex justify-center items-center">
            🍽
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              RecipeBook
            </h1>

            <p className="text-xs text-gray-400">
              Cook • Share • Inspire
            </p>
          </div>
        </NavLink>

        {/* CENTER */}
        <div className="hidden lg:flex gap-8 text-lg">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "hover:text-orange-400 duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "hover:text-orange-400 duration-300"
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/create-recipe"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "hover:text-orange-400 duration-300"
            }
          >
            Create
          </NavLink>

          <NavLink
            to="/fav"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500"
                : "hover:text-orange-400 duration-300"
            }
          >
            Favorites
          </NavLink>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          <div className="bg-zinc-800 px-4 py-2 rounded-xl">
            📖 {totalRecipes}
          </div>

          <div className="bg-red-500 px-4 py-2 rounded-xl">
            ❤️ {favoriteCount}
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;