"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
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

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-zinc-500">
            Loading gallery...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-red-500">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
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
                onClick={() => setSelectedImage(image)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-zinc-200 ${
                  pattern[index % pattern.length]
                }`}
              >
                <Image
                  src={image.secure_url}
                  alt={
                    image.display_name ||
                    `Gallery image ${index + 1}`
                  }
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20"
            >
              <X size={22} />
            </button>

            {/* Image */}
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[90vh] w-full max-w-7xl"
            >
              <Image
                src={selectedImage.secure_url}
                alt={selectedImage.display_name}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;