import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

function GameGrid({ selectedGenre }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre);
  const Skeleton = [0, 1, 2, 3, 5, 6, 7, 8, 9];

  return (
    <SimpleGrid
      minChildWidth={{ base: "200px", md: "230px", lg: "250px" }}
      textAlign="center"
      gap={{ base: "10px", md: "20px" }}
    >
      {error && <Text>{error}</Text>}

      {isLoading && Skeleton.map((g) => <GameCardSkeleton key={g} />)}

      {data.map((g) => (
        <GameCard games={g} key={g.id} />
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
