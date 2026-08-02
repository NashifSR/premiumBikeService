"use client";

import { useEffect, useState } from "react";
import checklistData from "./checklist.json";

const useChecklist = (category) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!category) {
      setItems([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const filteredItems = checklistData.filter(
        (item) => item.category === category
      );

      setItems(filteredItems);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load checklist");
    } finally {
      setLoading(false);
    }
  }, [category]);

  return {
    items,
    loading,
    error,
  };
};

export default useChecklist;