"use client";

import { useState } from "react";
import { ImagePlus, Search } from "lucide-react";
import UploadModal from "../components/UploadModal";

const images = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/600/600?random=${i + 1}`,
}));

export default function Gallery() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="space-y-8">

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-4xl font-bold text-zinc-900">
              Gallery
            </h1>

            <p className="mt-2 text-zinc-500">
              Manage all uploaded workshop photos.
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-white transition hover:bg-zinc-800"
          >
            <ImagePlus size={18} />
            Upload Photos
          </button>

        </div>

        {/* Toolbar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div className="relative w-full max-w-md">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              size={18}
            />

            <input
              placeholder="Search photos..."
              className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-11 pr-4 outline-none focus:border-zinc-900"
            />

          </div>

          <div className="flex gap-3">

            <select className="rounded-xl border border-zinc-200 bg-white px-4 py-3">
              <option>All</option>
              <option>Gallery</option>
              <option>Projects</option>
            </select>

            <select className="rounded-xl border border-zinc-200 bg-white px-4 py-3">
              <option>Newest</option>
              <option>Oldest</option>
            </select>

          </div>

        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {images.map((image) => (
            <div
              key={image.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="relative aspect-square">

                <img
                  src={image.src}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

              </div>

              <div className="flex justify-between p-4">

                <button className="text-sm text-zinc-600 hover:text-zinc-900">
                  Edit
                </button>

                <button className="text-sm text-red-600 hover:text-red-700">
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>

      </section>

      <UploadModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}