"use client";

import { useState } from "react";
import Image from "next/image";
import { ImagePlus, Search, Check } from "lucide-react";

import UploadModal from "../components/UploadModal";

import useGallery from "@/app/hooks/useGallery";
import useDeleteImages from "@/app/hooks/useDeleteImages";

export default function ManageGallery() {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState("gallery");
  const [selectedImages, setSelectedImages] = useState([]);

  
  const {
    images,
    loading,
    error,
    refetch,
  } = useGallery(folder);
  
  console.group("ManageGallery", images)
  const {
    deleteImages,
    deleting,
  } = useDeleteImages();

  const toggleSelection = (publicId) => {
    setSelectedImages((prev) =>
      prev.includes(publicId)
        ? prev.filter((id) => id !== publicId)
        : [...prev, publicId]
    );
  };

  const clearSelection = () => {
    setSelectedImages([]);
  };

  const selectAll = () => {
    setSelectedImages(images.map((img) => img.public_id));
  };

  const handleDelete = async () => {
    if (!selectedImages.length) return;

    const confirmed = window.confirm(
      `Delete ${selectedImages.length} image(s)?`
    );

    if (!confirmed) return;

    try {
      await deleteImages(selectedImages);

      clearSelection();

      refetch();
    } catch (err) {
      console.error(err);
    }
  };

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
            <select
              value={folder}
              onChange={(e) => {
                setFolder(e.target.value);
                clearSelection();
              }}
              className="rounded-xl border border-zinc-200 bg-white px-4 py-3"
            >
              <option value="gallery">Gallery</option>
              <option value="projects">Projects</option>
              <option value="before-after">Before & After</option>
              <option value="team">Team</option>
            </select>

            <select className="rounded-xl border border-zinc-200 bg-white px-4 py-3">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        {/* Selection Toolbar */}
        {selectedImages.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-zinc-900 p-5 text-white">
            <span className="font-medium">
              {selectedImages.length} selected
            </span>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={selectAll}
                className="rounded-lg border border-white/20 px-4 py-2 hover:bg-white/10"
              >
                Select All
              </button>

              <button
                onClick={clearSelection}
                className="rounded-lg border border-white/20 px-4 py-2 hover:bg-white/10"
              >
                Clear
              </button>

              <button
                onClick={handleDelete}
                disabled={deleting}
                className="rounded-lg bg-red-600 px-5 py-2 hover:bg-red-700 disabled:opacity-50"
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="py-20 text-center text-zinc-500">
            Loading images...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading && images.length === 0 && (
          <div className="rounded-3xl border border-dashed border-zinc-300 py-20 text-center">
            <h3 className="text-xl font-semibold">
              No images found
            </h3>

            <p className="mt-2 text-zinc-500">
              Upload your first image to this folder.
            </p>
          </div>
        )}

        {/* Grid */}
        {!loading && images.length > 0 && (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {images.map((image) => {
              const selected = selectedImages.includes(image.public_id);

              return (
                <div
                  key={image.asset_id}
                  onClick={() => toggleSelection(image.public_id)}
                  className={`group cursor-pointer overflow-hidden rounded-3xl border-4 bg-white shadow-sm transition
                    ${
                      selected
                        ? "border-zinc-900"
                        : "border-transparent hover:border-zinc-300"
                    }
                  `}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={image.secure_url}
                      alt={image.display_name}
                      fill
                      sizes="400px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

                    {selected && (
                      <div className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg">
                        <Check size={18} />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between p-4">
                    <div className="truncate text-sm text-zinc-500">
                      {image.display_name}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="text-sm text-zinc-600 hover:text-black"
                      >
                        Edit
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImages([image.public_id]);
                          handleDelete();
                        }}
                        className="text-sm text-red-600 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <UploadModal
        open={open}
        folder={folder}
        onClose={() => {
          setOpen(false);
          refetch();
        }}
      />
    </>
  );
}