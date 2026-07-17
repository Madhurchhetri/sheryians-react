import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Home Chef",
    image: "https://i.pravatar.cc/150?img=5",
    review:
      "The recipes are incredibly easy to follow and my family absolutely loves them.",
  },
  {
    name: "Rahul Sharma",
    role: "Food Blogger",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Beautiful UI and amazing recipe collection. One of my favorite food apps.",
  },
  {
    name: "Emily Wilson",
    role: "Restaurant Owner",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "I discovered many unique recipes here. Highly recommended for beginners.",
  },
];

const Testimonials = () => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(".review-card", {
      opacity: 0,
      y: 80,},
      {
    opacity: 1,
    y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24"
    >
      <div className="text-center mb-16">

        <span className="uppercase tracking-[6px] text-orange-500 font-semibold">
          Testimonials
        </span>

        <h2 className="text-5xl font-black mt-4">
          What Our Users Say
        </h2>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {reviews.map((item, index) => (

          <div
            key={index}
            className="review-card bg-zinc-900 rounded-3xl border border-zinc-800 p-8 hover:-translate-y-3 duration-300"
          >

            <div className="flex items-center gap-4">

              <img
                src={item.image}
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>

                <h3 className="font-bold text-xl">

                  {item.name}

                </h3>

                <p className="text-gray-500">

                  {item.role}

                </p>

              </div>

            </div>

            <div className="flex gap-1 mt-6 text-yellow-400 text-xl">

              ⭐⭐⭐⭐⭐

            </div>

            <p className="mt-6 text-gray-400 leading-8">

              "{item.review}"

            </p>

          </div>

        ))}

      </div>
    </section>
  );
};

export default Testimonials;