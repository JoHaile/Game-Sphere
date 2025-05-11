import type { Game } from "../hooks/useGames";
import { AspectRatio, Box, Card, Image } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
// import CroppedImage from "@/services/image-client";

interface Props {
  games: Game;
}

function GameCard({ games }: Props) {
  const platformSlug = games.parent_platforms.map(
    (platform) => platform.platform
  );

  return (
    <Card.Root overflow="hidden">
      <AspectRatio ratio={{ base: 1 / 1, md: 2 / 1 }}>
        {/* for offline */}
        <Image src={games.background_image} />

        {/* <Image src={CroppedImage(games.background_image)} /> */}
      </AspectRatio>

      <Card.Body>
        <Card.Title textWrap={"nowrap"}>{games.name}</Card.Title>

        <Box display="flex" justifyContent={"space-between"}>
          <PlatformList platform={platformSlug} />
          <CriticScore metacritic={games.metacritic} />
        </Box>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
