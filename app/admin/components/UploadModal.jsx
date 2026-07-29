"use client";

import useUploadImages from "@/app/hooks/useUploadImages";
import { X, Upload, ImagePlus, Loader2 } from "lucide-react";
import { useState } from "react";

const MAX_IMAGES = 10;

const UploadModal = ({ open, onClose, folder = "gallery" }) => {
  const [preview, setPreview] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { uploadImages, uploading } = useUploadImages();

  if (!open) return null;

  const handleChange = (e) => {
    const files = Array.from(e.target.files).slice(0, MAX_IMAGES);

    setPreview(
      files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }))
    );
  };

  const handleUpload = async () => {
    if (!preview.length) return;

    try {
      await uploadImages({
        files: preview.map((image) => image.file),
        folder,
        title,
        description,
      });

      preview.forEach((image) => URL.revokeObjectURL(image.url));

      setPreview([]);
      setTitle("");
      setDescription("");

      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 p-6">
          <div>
            <h2 className="text-2xl font-bold">Upload Photos</h2>

            <p className="mt-1 text-sm text-zinc-500">
              Upload up to {MAX_IMAGES} images.
            </p>
          </div>

          <button
            onClick={onClose}
            disabled={uploading}
            className="rounded-lg p-2 hover:bg-zinc-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6">
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50 p-10 transition hover:border-zinc-900 hover:bg-zinc-100">
            <ImagePlus size={46} className="mb-3 text-zinc-400" />

            <h3 className="text-lg font-semibold">
              Choose Images
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Maximum {MAX_IMAGES} photos
            </p>

            <input
              type="file"
              multiple
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleChange}
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title for all images"
              className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900"
            />

            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description for all images"
              className="rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900"
            />
          </div>

          {preview.length > 0 && (
            <div>
              <h3 className="mb-4 font-semibold">
                Selected Images ({preview.length})
              </h3>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                {preview.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl"
                  >
                    <img
                      src={image.url}
                      alt=""
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-zinc-200 p-6">
          <button
            onClick={onClose}
            disabled={uploading}
            className="rounded-xl border border-zinc-300 px-6 py-3 hover:bg-zinc-100"
          >
            Cancel
          </button>

          <button
            onClick={handleUpload}
            disabled={uploading || preview.length === 0}
            className="flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {uploading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload size={18} />
                Upload {preview.length}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;