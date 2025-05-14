import type { Game } from "../hooks/useGames";
import { Box, Card, Image } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import CroppedImage from "@/services/image-client";
import imagePlaceholder from "../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";
// import CroppedImage from "@/services/image-client";

interface Props {
  games: Game;
}

function GameCard({ games }: Props) {
  const platformSlug = games.parent_platforms.map(
    (platform) => platform.platform
  );

  return (
    <>
      <Card.Root overflow="hidden" variant={"elevated"}>
        <Image
          src={
            games.background_image
              ? CroppedImage(games.background_image)
              : imagePlaceholder
          }
          aspectRatio={1 / 1}
        />

        <Card.Body>
          <Card.Title>{games.name}</Card.Title>

          <Box display="flex" justifyContent={"space-between"}>
            <PlatformList platform={platformSlug} />
            <CriticScore metacritic={games.metacritic} />
          </Box>
        </Card.Body>
      </Card.Root>
    </>
  );
}

export default GameCard;
