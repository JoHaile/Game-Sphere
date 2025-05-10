import apiClient from "@/services/api-client";
import { useState, useEffect } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchResponse {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    apiClient
      .get<FetchResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return { games, error };
}

export default useGames;
