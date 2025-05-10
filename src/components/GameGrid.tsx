import { Card, Image, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import axios from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();

  // console.log(games);

  useEffect(() => {
    apiClient
      .get<FetchResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <SimpleGrid
      minChildWidth={{ base: "200px", md: "230px", lg: "250px" }}
      textAlign="center"
      gap={{ base: "10px", md: "20px" }}
    >
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
