import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import type { Platform } from "./useGames";

export interface GameDetails {
  id: number;
  name: string;
  description_raw: string;
  platforms: Platform | null;
}

function useGame(slug: string) {
  const [data, setData] = useState<GameDetails>();
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
