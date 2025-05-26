import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { GameQuery } from "../hooks/useGameQuery";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const Skeleton = [0, 1, 2, 3, 5, 6, 7, 8, 9];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      minChildWidth={{ base: "200px", md: "230px", lg: "250px" }}
      textAlign="center"
      gap={{ base: "10px", md: "20px" }}
    >
      {isLoading && Skeleton.map((g) => <GameCardSkeleton key={g} />)}

      {data
        ? data.map((g) => {
            // console.log(g.id);
            return <GameCard games={g} key={g.id} />;
          })
        : "Network Error"}
    </SimpleGrid>
  );
}

export default GameGrid;
