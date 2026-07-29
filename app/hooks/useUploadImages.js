"use client";

import { useState } from "react";
import api from "./services/axios";

const useUploadImages = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const uploadImages = async ({
    files,
    folder,
    title = "",
    description = "",
  }) => {
    if (!files?.length) {
      throw new Error("Please select at least one image.");
    }

    if (files.length > 10) {
      throw new Error("You can upload a maximum of 10 images.");
    }

    if (!folder) {
      throw new Error("Upload folder is required.");
    }

    try {
      setUploading(true);
      setError("");

      const formData = new FormData();

      files.forEach((file) => {
        formData.append("images", file);
      });

      formData.append("folder", folder);
      formData.append("title", title);
      formData.append("description", description);

      const { data } = await api.post(
        "/api/bike/gallery/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return data;
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Image upload failed.";

      console.error(message);
      setError(message);

      throw err;
    } finally {
      setUploading(false);
    }
  };

  return {
    uploadImages,
    uploading,
    error,
  };
};

export default useUploadImages;