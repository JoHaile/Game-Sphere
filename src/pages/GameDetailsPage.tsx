import ExpandibleText from "@/components/ExpandibleText";
import GameAttributes from "@/components/GameAttributes";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import NavBar from "@/components/NavBar";
import useGame from "@/hooks/useGame";
import useGameQuery from "@/hooks/useGameQuery";
import type { Game } from "@/hooks/useGames";
import { Grid, GridItem, Heading, Spinner, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

function GameDetailsPage() {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame<Game>(`/games/${slug}`);
  const { setGameQuery } = useGameQuery();
  const nav = useNavigate();
  // console.log(data?.id);
  // console.log(slug);

  if (error) throw error;

  return (
    <>
      <NavBar
        onGameSearch={(game) => {
          setGameQuery((gameQuery) => ({ ...gameQuery, searchGames: game }));
          nav("/");
        }}
      />

      {isLoading && <Spinner size="lg" />}

      <Grid
        gridTemplateColumns="repeat(6, 1fr)"
        gap={4}
        padding={{ base: 3, md: 5 }}
      >
        <GridItem colSpan={{ base: 6, lg: 3 }}>
          <Heading textAlign="center" mb={4}>
            {data?.name}
          </Heading>

          <Text textStyle={{ base: "sm", lg: "md" }} mb="20px">
            {data && <ExpandibleText text={data?.description_raw} />}
          </Text>
          {data && <GameAttributes data={data} />}
        </GridItem>

        <GridItem colSpan={{ base: 6, lg: 3 }} textAlign="center">
          <Heading pb={4}>Trailer</Heading>

          <GameTrailer />
        </GridItem>
      </Grid>

      <GameScreenshots />
    </>
  );
}

export default GameDetailsPage;
