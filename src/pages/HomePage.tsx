import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import NavBar from "../components/NavBar";
import GenresGrid from "../components/GenresGrid";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import DynamicHeader from "../components/DynamicHeader";
import useGameQuery from "@/hooks/useGameQuery";

const HomePage = () => {
  const { gameQuery, setGameQuery } = useGameQuery();

  return (
    <>
      <NavBar
        onGameSearch={(game) =>
          setGameQuery({ ...gameQuery, searchGames: game })
        }
      />

      <Grid gridTemplateColumns={`repeat(6, 1fr)`}>
        <GridItem
          as="aside"
          colSpan={{ base: 1, md: 1, lg: 1 }}
          height="100vh"
          overflowY="scroll"
          scrollbar={"hidden"}
          px={{ base: "10px", lg: "30px" }}
        >
          <Heading as="h1" mb={3}>
            Genres
          </Heading>
          <GenresGrid
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
          />
        </GridItem>

        <GridItem
          // to make the game cards scroll independently
          height={"150vh"}
          overflowY={"auto"}
          scrollbar={"hidden"}
          //
          as="main"
          colSpan={{ base: 5, md: 5, lg: 5 }}
          px={{ base: "30px", md: "20px" }}
        >
          <DynamicHeader gameQuery={gameQuery} />

          <Flex flexWrap={"wrap"} m="1rem 0 2rem 0" gap={{ base: 1, lg: 3 }}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(selectedPlatform) =>
                setGameQuery({ ...gameQuery, platform: selectedPlatform })
              }
            />
            <SortSelector
              currentSortOrder={gameQuery.sortOrder}
              onSortSelect={(sortOrderValue) =>
                setGameQuery({ ...gameQuery, sortOrder: sortOrderValue })
              }
            />
          </Flex>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
