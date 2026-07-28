"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import api from "./services/axios";

// const API = "http://localhost:5000";

console.group("api", api)

const useGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const images = gallery?.images ?? []

  const fetchGallery = async () => {
    try {
      setLoading(true);

      const { data } = await api.get("/api/bike/gallery?folder=gallery");

      setGallery(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load gallery");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return {
    images,
    loading,
    error,
    refetch: fetchGallery,
  };
};

export default useGallery;