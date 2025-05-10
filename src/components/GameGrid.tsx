import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <SimpleGrid
      minChildWidth={{ base: "200px", md: "230px", lg: "250px" }}
      textAlign="center"
      gap={{ base: "10px", md: "20px" }}
    >
      {error && <Text>{error}</Text>}

      {games.map((g) => (
        <GameCard games={g} key={g.id} />
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
