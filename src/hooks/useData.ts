import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endPoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(endPoint, { signal: controller.signal })
      .then((res) => {
        setLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
}

export default useData;
