import { useEffect, useState } from "react";
import { loadDishes } from "../api";

export function useFetch(url, category) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const result = await loadDishes(category, ctrl.signal);
        setData(result);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }

    load();

    return () => ctrl.abort();
  }, [url, category]);

  return { data, loading, error };
}