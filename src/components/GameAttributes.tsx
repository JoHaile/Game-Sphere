import type { Game } from "@/hooks/useGames";
import { Link, SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  data: Game;
}
function GameAttributes({ data }: Props) {
  return (
    <SimpleGrid as="dl" minChildWidth="45%" mb={5} gap={5}>
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

      <DefinitionItem term="Release Date">
        <Text>{data?.released}</Text>
      </DefinitionItem>

      <DefinitionItem term="Website">
        <Link href={data.website} target="_blank">
          To {data?.name} Website <FaExternalLinkAlt />
        </Link>
      </DefinitionItem>

      <DefinitionItem term="ESRB Rating">
        {data.esrb_rating ? <Text>{data?.esrb_rating.name}</Text> : "Not Rated"}
      </DefinitionItem>

      <DefinitionItem term="Platforms">
        {data?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
