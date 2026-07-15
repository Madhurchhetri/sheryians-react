// import React, { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// const categories = [
//   {
//     title: "Breakfast",
//     icon: "🍳",
//     color: "from-yellow-500 to-orange-500",
//   },
//   {
//     title: "Lunch",
//     icon: "🍛",
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     title: "Dinner",
//     icon: "🍕",
//     color: "from-red-500 to-pink-500",
//   },
//   {
//     title: "Dessert",
//     icon: "🍰",
//     color: "from-pink-500 to-purple-500",
//   },
//   {
//     title: "Drinks",
//     icon: "🥤",
//     color: "from-cyan-500 to-blue-500",
//   },
//   {
//     title: "Healthy",
//     icon: "🥗",
//     color: "from-lime-500 to-green-600",
//   },
// ];

// const Categories = () => {
//   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     gsap.from(".category-card", {
// //       opacity: 0,
// //       y: 80,
// //       duration: 0.8,
// //       stagger: 0.15,
// //       ease: "power3.out",
// //       scrollTrigger: {
// //         trigger: sectionRef.current,
// //         start: "top 80%",
// //       },
// //     });
// //   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-24"
//     >
//       <div className="text-center mb-14">

//         <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
//           Categories
//         </span>

//         <h2 className="text-5xl font-black mt-4">
//           Browse By Category
//         </h2>

//         <p className="text-gray-400 mt-5 max-w-xl mx-auto">
//           Pick your favorite food category and discover delicious recipes.
//         </p>

//       </div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

//         {categories.map((item, index) => (

//           <div
//             key={index}
//             className="category-card group cursor-pointer relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-3 hover:border-orange-500"
//           >
//             <div
//               className={`absolute inset-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br ${item.color}`}
//             ></div>

//             <div className="relative z-10 flex flex-col items-center">

//               <div className="text-7xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125">
//                 {item.icon}
//               </div>

//               <h3 className="mt-6 text-2xl font-bold">
//                 {item.title}
//               </h3>

//               <p className="mt-3 text-center text-gray-400">
//                 Discover delicious {item.title.toLowerCase()} recipes
//                 curated for every taste.
//               </p>

//               <button
//                 className="mt-8 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 font-semibold"
//               >
//                 Explore
//               </button>

//             </div>
//           </div>

//         ))}

//       </div>
//     </section>
//   );
// };

// export default Categories;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Breakfast",
    icon: "🍳",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Lunch",
    icon: "🍛",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Dinner",
    icon: "🍕",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Dessert",
    icon: "🍰",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Drinks",
    icon: "🥤",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Healthy",
    icon: "🥗",
    color: "from-lime-500 to-green-600",
  },
];

const Categories = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".category-card", {
        opacity: 0,
        y: 80,},{
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
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="text-center mb-14">
        <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
          Categories
        </span>

        <h2 className="text-5xl font-black mt-4">
          Browse By Category
        </h2>

        <p className="text-gray-400 mt-5 max-w-xl mx-auto">
          Pick your favorite food category and discover delicious recipes.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className="category-card group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-8 cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:border-orange-500"
          >
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${item.color} transition-all duration-500`}
            />

            <div className="relative z-10 flex flex-col items-center">
              <div className="text-7xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-center text-gray-400">
                Discover delicious {item.title.toLowerCase()} recipes curated
                for every taste.
              </p>

              <button className="mt-8 rounded-xl bg-orange-500 px-6 py-3 font-semibold transition-all duration-300 hover:bg-orange-600">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;