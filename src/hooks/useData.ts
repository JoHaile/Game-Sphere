import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endPoint, {
          signal: controller.signal,
          ...requestConfig,
        })
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
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
}

export default useData;
