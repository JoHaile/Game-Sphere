import { Card, Image } from "@chakra-ui/react";
import { type Game } from "../hooks/useGames";
import PlatformList from "./PlatformList";

interface Props {
  games: Game;
}

function GameCard({ games }: Props) {
  const platformSlug = games.parent_platforms.map(
    (platform) => platform.platform
  );

  return (
    <Card.Root overflow="hidden">
      <Image src={games.background_image} />
      <Card.Body>
        <Card.Title>{games.name}</Card.Title>
        <PlatformList platform={platformSlug} />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
