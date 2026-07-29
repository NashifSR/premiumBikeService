"use client";

import { useState } from "react";
import api from "./services/axios";

const useDeleteImages = () => {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  const deleteImages = async (publicIds) => {
    try {
      setDeleting(true);
      setError("");

      const { data } = await api.delete("/api/bike/gallery", {
        data: {
          publicIds,
        },
      });

      return data;
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
        "Failed to delete images."
      );

      throw err;
    } finally {
      setDeleting(false);
    }
  };

  return {
    deleteImages,
    deleting,
    error,
  };
};

export default useDeleteImages;