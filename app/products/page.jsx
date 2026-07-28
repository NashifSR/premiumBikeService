"use client";

import Image from "next/image";
import React, { useState } from "react";

const whatsappNumber = "8801XXXXXXXXX";

const products = [
  {
    id: 1,
    name: "Premium Riding Helmet",
    category: "Helmets",
    brand: "LS2",
    price: "৳ 8,500",
    directPrice: "৳ 8,000",
    image:
      "https://images.pexels.com/photos/163210/pexels-photo-163210.jpeg",
    daraz: "#",
  },
  {
    id: 2,
    name: "Motorcycle Riding Gloves",
    category: "Gloves",
    brand: "Rider Pro",
    price: "৳ 2,500",
    directPrice: "৳ 2,300",
    image:
      "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
    daraz: "#",
  },
  {
    id: 3,
    name: "Performance Engine Oil",
    category: "Maintenance",
    brand: "Motul",
    price: "৳ 1,800",
    directPrice: "৳ 1,650",
    image:
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg",
    daraz: "#",
  },
  {
    id: 4,
    name: "LED Motorcycle Light",
    category: "Accessories",
    brand: "Auxbeam",
    price: "৳ 3,200",
    directPrice: "৳ 3,000",
    image:
      "https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg",
    daraz: "#",
  },
];


const categories = [
  "All",
  "Helmets",
  "Gloves",
  "Maintenance",
  "Accessories",
  "Parts",
];


const Products = () => {

  const [activeCategory, setActiveCategory] = useState("All");


  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );


  return (
    <main className="min-h-screen bg-zinc-50 py-24">

      <div className="mx-auto max-w-7xl px-6">


        {/* Header */}
        <div className="mb-16 max-w-3xl">

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Store
          </p>


          <h1 className="mt-4 text-5xl font-bold tracking-tight text-zinc-900">
            Motorcycle Essentials
          </h1>


          <p className="mt-6 text-lg text-zinc-600">
            Premium helmets, riding gear, maintenance products, and accessories
            selected for riders.
          </p>

        </div>



        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-full
                border
                px-5
                py-2
                text-sm
                transition

                ${
                  activeCategory === category
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-300 hover:bg-zinc-900 hover:text-white"
                }
              `}
            >
              {category}
            </button>

          ))}

        </div>



        {/* Products */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">


          {filteredProducts.map((product) => {


            const whatsappMessage = encodeURIComponent(
`Hello, I am interested in:

${product.name}

Price:
${product.directPrice}

Is it available?`
            );


            return (

              <article
                key={product.id}
                className="
                  flex
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >


                {/* Image */}
                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="
                      object-cover
                      transition
                      duration-700
                      hover:scale-105
                    "
                  />

                </div>



                {/* Content */}
                <div className="flex flex-1 flex-col p-6">


                  <div className="flex justify-between">

                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      {product.category}
                    </p>


                    <p className="text-xs text-zinc-400">
                      {product.brand}
                    </p>

                  </div>



                  <h2 className="mt-3 min-h-[56px] text-xl font-semibold text-zinc-900">
                    {product.name}
                  </h2>



                  {/* Price */}
                  <div className="mt-5">

                    <p className="text-sm text-zinc-400 line-through">
                      Online Price {product.price}
                    </p>


                    <p className="text-2xl font-bold text-zinc-900">
                      {product.directPrice}
                    </p>


                    <p className="text-sm text-green-600">
                      Workshop Direct Price
                    </p>


                    <p className="mt-3 text-sm text-zinc-500">
                      🚚 Delivery fee included
                    </p>

                  </div>



                  {/* Buttons */}
                  <div className="mt-auto space-y-3 pt-6">


                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        block
                        rounded-lg
                        bg-green-600
                        py-3
                        text-center
                        text-sm
                        font-medium
                        text-white
                        transition
                        hover:bg-green-700
                      "
                    >
                      Order Now
                    </a>



                    <a
                      href={product.daraz}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        block
                        rounded-lg
                        border
                        border-zinc-300
                        py-3
                        text-center
                        text-sm
                        font-medium
                        text-zinc-900
                        transition
                        hover:bg-zinc-100
                      "
                    >
                      Buy via Daraz
                    </a>


                  </div>


                </div>


              </article>

            );

          })}


        </div>


      </div>

    </main>
  );
};


export default Products;