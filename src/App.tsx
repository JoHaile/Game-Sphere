import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenresGrid from "./components/GenresGrid";
import { useState } from "react";
import { type Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
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
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(selectedPlatform) =>
                setSelectedPlatform(selectedPlatform)
              }
            />
          </HStack>

          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
