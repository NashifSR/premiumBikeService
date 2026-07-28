"use client";

import Image from "next/image";
import React from "react";
import useGallery from "../hooks/useGallery";

const pattern = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:row-span-2",
  "",
  "md:col-span-2",
  "",
  "",
];

const Gallery = () => {
  const { images, loading, error } = useGallery();

  
  console.group(images);
  if (loading) {
    return (
      <section className="min-h-screen bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-zinc-500">Loading gallery...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Gallery
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            Our Work
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-600">
            Every motorcycle that enters our workshop leaves with a story.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={image.asset_id}
              className={`group relative overflow-hidden rounded-3xl bg-zinc-200 ${
                pattern[index % pattern.length]
              }`}
            >
              <Image
                src={image.secure_url}
                alt={image.display_name || `Gallery image ${index + 1}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;