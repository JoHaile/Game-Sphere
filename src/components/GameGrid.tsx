import { Card, Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <SimpleGrid
      minChildWidth={{ base: "200px", md: "230px", lg: "250px" }}
      textAlign="center"
      gap={{ base: "10px", md: "20px" }}
    >
      {error && <Text>{error}</Text>}

      {games.map((game) => (
        <Card.Root overflow="hidden" key={game.id}>
          {/* <Image src={game.name} /> */}
          <Card.Header>{game.name}</Card.Header>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
