import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const Skeleton = [1, 2, 3, 5, 6, 7, 8, 9, 1];

  return (
    <SimpleGrid
      minChildWidth={{ base: "200px", md: "230px", lg: "250px" }}
      textAlign="center"
      gap={{ base: "10px", md: "20px" }}
    >
      {error && <Text>{error}</Text>}

      {isLoading && Skeleton.map((g) => <GameCardSkeleton key={g} />)}
      {games.map((g) => (
        <GameCard games={g} key={g.id} />
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
