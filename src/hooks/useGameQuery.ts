import { useState } from "react";
import type { Platform } from "./useGames";
import type { Genre } from "./useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchGames: string;
}

const useGameQuery = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return { gameQuery, setGameQuery };
};

export default useGameQuery;
