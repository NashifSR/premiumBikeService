"use client";

import { X, Upload, ImagePlus } from "lucide-react";
import { useState } from "react";

const UploadModal = ({ open, onClose }) => {
  const [preview, setPreview] = useState([]);

  if (!open) return null;

  const handleChange = (e) => {
    const files = Array.from(e.target.files);

    const images = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setPreview(images);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 p-6">

          <div>
            <h2 className="text-2xl font-bold">
              Upload Photos
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Add new workshop images.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-zinc-100"
          >
            <X size={20} />
          </button>

        </div>

        {/* Body */}
        <div className="space-y-6 p-6">

          {/* Upload Area */}
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50 p-12 transition hover:border-zinc-900 hover:bg-zinc-100">

            <ImagePlus
              size={48}
              className="mb-4 text-zinc-400"
            />

            <h3 className="text-lg font-semibold">
              Choose Photos
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Camera or Gallery
            </p>

            <input
              type="file"
              multiple
              accept="image/*"
              capture="environment"
              onChange={handleChange}
              className="hidden"
            />

          </label>

          {/* Preview */}
          {preview.length > 0 && (
            <div>

              <h3 className="mb-4 font-semibold">
                Selected Photos ({preview.length})
              </h3>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

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

          {/* Optional Title */}
          <input
            type="text"
            placeholder="Title (optional)"
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900"
          />

          {/* Optional Description */}
          <textarea
            rows={4}
            placeholder="Description (optional)"
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-zinc-900"
          />

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-zinc-200 p-6">

          <button
            onClick={onClose}
            className="rounded-xl border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100"
          >
            Cancel
          </button>

          <button
            className="flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800"
          >
            <Upload size={18} />
            Upload
          </button>

        </div>

      </div>
    </div>
  );
};

export default UploadModal;