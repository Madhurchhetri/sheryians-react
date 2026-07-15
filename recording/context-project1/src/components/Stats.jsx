import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: 500,
    suffix: "+",
    title: "Recipes",
    icon: "🍲",
    color: "from-orange-500 to-red-500",
  },
  {
    number: 120,
    suffix: "+",
    title: "Professional Chefs",
    icon: "👨‍🍳",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 1500,
    suffix: "+",
    title: "Happy Foodies",
    icon: "❤️",
    color: "from-pink-500 to-red-500",
  },
  {
    number: 35,
    suffix: "+",
    title: "Categories",
    icon: "🍕",
    color: "from-green-500 to-emerald-500",
  },
];

const Stats = () => {
  const sectionRef = useRef(null);
const cardsRef = useRef([]);
const countersRef = useRef([]);

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
  cardsRef.current,
    {
        opacity: 0,
        y: 80,
    },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
    },
    clearProps: "opacity,transform",
  }
);

    countersRef.current.forEach((counter, index) => {
      gsap.fromTo(
        counter,
        {
          innerText: 0,
        },
        {
          innerText: stats[index].number,
          duration: 2,
          ease: "power1.out",
          snap: {
            innerText: 1,
          },
          scrollTrigger: {
            trigger: cardsRef.current[index],
            start: "top 85%",
            once: true,
          },
        }
      );
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      className="py-24"
    >
      <div className="text-center mb-16">

        <span className="text-orange-500 uppercase tracking-[6px] font-semibold">
          Our Journey
        </span>

        <h2 className="text-5xl font-black mt-4">
          We Love Food ❤️
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Thousands of recipes shared by amazing chefs around the world.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {stats.map((item, index) => (
            

          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="stat-card relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 hover:-translate-y-3 duration-300 group"
          >
          {/* console.log(stats); */}
            <div
              className={`absolute inset-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br ${item.color}`}
            ></div>

            <div className="relative z-10">

              <div className="text-6xl mb-6">
                {item.icon}
              </div>

              <h2 className="text-5xl font-black">

                <span
                   ref={(el) => (countersRef.current[index] = el)}
                >
                  0
                </span>

                {item.suffix}

              </h2>

              <p className="mt-4 text-lg text-gray-400">
                {item.title}
              </p>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
};

export default Stats;