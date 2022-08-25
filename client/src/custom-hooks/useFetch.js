import { useState, useEffect } from "react";

export default function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch(url, options);
        const data = await resp.json();
        setData(data);
      } catch (e) {
        setData([]);
        setError(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { data, error, isLoading };
}
