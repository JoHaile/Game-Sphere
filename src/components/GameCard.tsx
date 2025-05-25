import type { Game } from "../hooks/useGames";
import { Box, Card, Image } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import CroppedImage from "@/services/image-client";
import imagePlaceholder from "../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";
import Rating from "./Rating";

interface Props {
  games: Game;
}

function GameCard({ games }: Props) {
  const platformSlug = games.parent_platforms
    ? games.parent_platforms.map((platform) => platform.platform)
    : [];

  return (
    <>
      <Card.Root
        overflow="hidden"
        variant="elevated"
        maxWidth="300px"
        _hover={{
          scale: "1.05",
          transition: "all .35s ease",
        }}
      >
        <Image
          src={
            games.background_image
              ? CroppedImage(games.background_image)
              : imagePlaceholder
          }
          aspectRatio={3 / 2}
        />

        <Card.Body>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <PlatformList platform={platformSlug} />
            <CriticScore metacritic={games.metacritic} />
          </Box>

          <Card.Title
            _hover={{
              color: "green.300",
              transition: "all .3s ease",
            }}
            cursor="pointer"
          >
            {games.name}
          </Card.Title>
        </Card.Body>

        <Card.Footer>
          <Rating rating={games.rating_top} />
        </Card.Footer>
      </Card.Root>
    </>
  );
}

export default GameCard;
