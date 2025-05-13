import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenresGrid from "./components/GenresGrid";
import { useState } from "react";
import { type Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <GenresGrid onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>

        <GridItem
          // bg="purple.400"
          as="main"
          colSpan={{ base: 5, md: 5, lg: 5 }}
          px={{ base: "30px", md: "20px" }}
        >
          {/* for the dynamic headers */}
          {/* <HStack>nav bar</HStack> */}

          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
