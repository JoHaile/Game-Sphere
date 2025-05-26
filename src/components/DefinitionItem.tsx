import type { GameDetails } from "@/hooks/useGame";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

interface Props {
  data: GameDetails;
}

function DefinitionItem({ data }: Props) {
  return (
    <SimpleGrid minChildWidth={"50%"}>
      <Box>
        <Heading>Platforms</Heading>
      </Box>
      <Box bg={"blue.300"}>hello</Box>
      <Box bg={"pink.400"}>hello</Box>
      <Box bg={"gray.300"}>hello</Box>
    </SimpleGrid>
  );
}

export default DefinitionItem;
