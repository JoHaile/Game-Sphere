import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { GameQuery } from "@/App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
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
        <React.Fragment key={g.id}>
          <GameCard games={g} />
          {/* {console.log(g)} */}
        </React.Fragment>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
