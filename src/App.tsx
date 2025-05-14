import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenresGrid from "./components/GenresGrid";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { type Genre } from "./hooks/useGenres";
import { type Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <NavBar />
      <Grid gridTemplateColumns={`repeat(6, 1fr)`}>
        <GridItem
          // bg={"dodgerblue"}
          as="aside"
          colSpan={{ base: 1, md: 1, lg: 1 }}
          h="100"
          py={"10px"}
          px={{ base: "10px", lg: "30px" }}
        >
          <GenresGrid
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
          />
        </GridItem>

        <GridItem
          // bg="purple.400"
          as="main"
          colSpan={{ base: 5, md: 5, lg: 5 }}
          px={{ base: "30px", md: "20px" }}
        >
          <HStack display={"flex"} justify={"flex-start"} mb={3}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(selectedPlatform) =>
                setGameQuery({ ...gameQuery, platform: selectedPlatform })
              }
            />
          </HStack>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
