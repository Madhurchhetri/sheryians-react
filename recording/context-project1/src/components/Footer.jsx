import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-zinc-800 py-12">

      <div className="grid md:grid-cols-3 gap-12">

        {/* Logo */}

        <div>

          <h2 className="text-3xl font-black text-orange-500">

            🍽 RecipeBook

          </h2>

          <p className="mt-4 text-gray-400 leading-7">

            Cook, Share and Discover delicious recipes from around
            the world.

          </p>

        </div>

        {/* Links */}

        <div>

          <h3 className="font-bold text-xl mb-5">

            Quick Links

          </h3>

          <div className="flex flex-col gap-4">

            <Link to="/">Home</Link>

            <Link to="/recipes">Recipes</Link>

            <Link to="/fav">Favorites</Link>

            <Link to="/create-recipe">Create Recipe</Link>

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="font-bold text-xl mb-5">

            Connect With Us

          </h3>

          <div className="flex gap-5 text-3xl">
            <Link to ="https://www.facebook.com/bizzi.keta" target="_blank">
            <i className="ri-facebook-circle-fill hover:text-blue-500 duration-300 cursor-pointer"></i>
            </Link>
            <Link to="https://www.instagram.com/chhetr96/" target="_blank">
            <i className="ri-instagram-fill hover:text-pink-500 duration-300 cursor-pointer"></i>
            </Link>
            <Link to="https://x.com/madhur_chh25405" target="_blank">
            <i className="ri-twitter-x-fill hover:text-white duration-300 cursor-pointer"></i>
            </Link>
            <Link to="https://github.com/Madhurchhetri" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill hover:text-gray-300 duration-300 cursor-pointer"></i>
            </Link>

          </div>

        </div>

      </div>

      <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-gray-500">

        © {new Date().getFullYear()} RecipeBook • Made with ❤️ using React & Tailwind CSS

      </div>

    </footer>
  );
};

export default Footer;