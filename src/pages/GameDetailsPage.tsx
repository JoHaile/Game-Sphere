import ExpandibleText from "@/components/ExpandibleText";
import GameAttributes from "@/components/GameAttributes";
import NavBar from "@/components/NavBar";
import useGame from "@/hooks/useGame";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function GameDetailsPage() {
  const { slug } = useParams();
  const { data } = useGame(`/games/${slug}`);

  console.log(data?.id);

  return (
    <>
      <NavBar onGameSearch={(game) => game} />

      <Grid gridTemplateColumns="repeat(6, 1fr)" padding={{ base: 3, md: 5 }}>
        <GridItem colSpan={{ base: 6, lg: 3 }}>
          <Heading textAlign="center">{data?.name}</Heading>

          <Text textStyle={{ base: "sm", lg: "md" }} mb="20px">
            {data && <ExpandibleText text={data?.description_raw} />}
          </Text>
          {data && <GameAttributes data={data} />}
        </GridItem>

        <GridItem
          bg={"blue.400"}
          colSpan={{ base: 6, lg: 3 }}
          textAlign="center"
          height={"100vh"}
        >
          <Heading>Trailer and ScreenShoots</Heading>
        </GridItem>
      </Grid>
    </>
  );
}

export default GameDetailsPage;
