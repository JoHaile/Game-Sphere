import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import type { Game } from "./useGames";

function useGame(slug: string) {
  const [data, setData] = useState<Game>();
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get(slug, {
        signal: controller.signal,
      })
      .then((res) => {
        setLoading(false);
        setData(res.data);
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
export default useGame;
