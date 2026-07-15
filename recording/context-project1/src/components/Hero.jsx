import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Hero = () => {
  const floatingCards = useRef([]);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
      .from(
        textRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        btnRef.current.children,
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
        },
        "-=0.3"
      )
      .from(
        imageRef.current,
        {
          x: 120,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

    gsap.to(floatingCards.current, {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
      stagger: 0.3,
    });
  }, heroRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black min-h-[90vh] flex items-center"
    >
      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[140px] -top-40 -left-32"></div>

      <div className="absolute w-[450px] h-[450px] rounded-full bg-red-500/10 blur-[130px] bottom-0 right-0"></div>

      <div className="relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center px-12 py-20">

        {/* LEFT */}

        <div>

          <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 border border-orange-500/40 px-5 py-2 rounded-full mb-8">

            🍴 World's Best Recipe Collection

          </span>

          <h1
            ref={titleRef}
            className="text-6xl lg:text-7xl font-black leading-tight"
          >
            Cook

            <span className="text-orange-500">
              {" "}
              Delicious
            </span>

            <br />

            Food

            <br />

            Like A

            <span className="text-orange-500">
              {" "}
              Pro
            </span>
          </h1>

          <p
            ref={textRef}
            className="mt-8 text-gray-400 text-lg leading-8 max-w-xl"
          >
            Discover amazing recipes, create your own cookbook,
            save favorites and share delicious meals with everyone.
          </p>

          <div
            ref={btnRef}
            className="flex gap-5 mt-10"
          >
            <Link
              to="/recipes"
              className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 duration-300 font-semibold"
            >
              Explore Recipes
            </Link>

            <Link
              to="/create"
              className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-orange-500 hover:bg-zinc-900 duration-300"
            >
              Create Recipe
            </Link>
          </div>

          <div className="flex gap-10 mt-14">

            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                500+
              </h2>

              <p className="text-gray-500">
                Recipes
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                200+
              </h2>

              <p className="text-gray-500">
                Chefs
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                1000+
              </h2>

              <p className="text-gray-500">
                Users
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div
          ref={imageRef}
          className="relative flex justify-center"
        >

          <img
            src="/images/hero-food.jpg"
            alt=""
            className="w-[550px] rounded-[40px] shadow-2xl object-cover"
          />

          {/* Floating cards yahin se continue honge */}

                    {/* Rating Card */}

          <div
           ref={(el) => (floatingCards.current[0] = el)}
           className="floating-card absolute top-8 -left-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 shadow-2xl">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-orange-500 flex justify-center items-center text-xl">
                ⭐
              </div>

              <div>
                <h3 className="font-bold text-lg">4.9 Rating</h3>
                <p className="text-sm text-gray-300">
                  From Food Lovers
                </p>
              </div>

            </div>

          </div>

          {/* Favorite Card */}

          <div 
          ref={(el) => (floatingCards.current[1] = el)}
          className="floating-card absolute bottom-12 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 shadow-2xl">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-red-500 flex justify-center items-center text-xl">
                ❤️
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  100+ Favorites
                </h3>

                <p className="text-sm text-gray-300">
                  Loved by everyone
                </p>

              </div>

            </div>

          </div>

          {/* Chef Card */}

          <div
          ref={(el) => (floatingCards.current[2] = el)}
           className="floating-card absolute bottom-32 left-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 shadow-2xl">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center text-xl">
                👨‍🍳
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Professional Chefs
                </h3>

                <p className="text-sm text-gray-300">
                  Easy step-by-step recipes
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;