import type { GameQuery } from "../hooks/useGameQuery";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

function DynamicHeader({ gameQuery }: Props) {
  const heading = `${gameQuery.platform ? gameQuery.platform.name : ""} ${gameQuery.genre ? gameQuery.genre.name : ""} Games`;

  return <Heading as="h1">{heading}</Heading>;
}

export default DynamicHeader;
