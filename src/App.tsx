import { Grid, GridItem, Text } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Grid gridTemplateColumns={`repeat(6, 1fr)`}>
        <GridItem
          bg={"dodgerblue"}
          as="aside"
          colSpan={{ base: 1, md: 1, lg: 1 }}
          h="100vh"
        >
          <Text>aside</Text>
        </GridItem>
        <GridItem
          // bg="purple.400"
          as="main"
          colSpan={{ base: 5, md: 5, lg: 5 }}
          px={{ base: "30px", md: "20px" }}
        >
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
