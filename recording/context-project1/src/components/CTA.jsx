import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(sectionRef.current, {
      opacity: 0,
      scale: 0.95,
    }, {
        opacity: 1,
      scale: 1.1,
      duration: 1,
      ease: "power3.out",

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 30%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="py-28">

      <div
        ref={sectionRef}
        className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-10 py-20 text-center"
      >

        {/* Glow */}

        <div className="absolute -top-28 -left-20 w-72 h-72 rounded-full bg-white/20 blur-[100px]" />

        <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-yellow-300/20 blur-[120px]" />

        <div className="relative z-10">

          <h2 className="text-5xl lg:text-6xl font-black leading-tight">

            Start Your

            <br />

            Cooking Journey 🍽️

          </h2>

          <p className="mt-8 text-lg max-w-2xl mx-auto text-white/90">

            Discover amazing recipes, create your own cookbook and
            share your favorite meals with the world.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              to="/create"
              className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:scale-105 duration-300"
            >
              ➕ Create Recipe
            </Link>

            <Link
              to="/recipes"
              className="px-8 py-4 rounded-xl border border-white font-semibold hover:bg-white hover:text-black duration-300"
            >
              🍔 Explore Recipes
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;