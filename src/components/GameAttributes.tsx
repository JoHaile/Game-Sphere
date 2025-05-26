import type { Game } from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";

interface Props {
  data: Game;
}
function GameAttributes({ data }: Props) {
  return (
    <SimpleGrid as="dl" minChildWidth="48%" mb={5} gap={3}>
      <DefinitionItem term="Platforms">
        {data?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metacritic">
        {data && <CriticScore metacritic={data?.metacritic} />}
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {data?.genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
      </DefinitionItem>

      <DefinitionItem term="Publisher">
        {data?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
