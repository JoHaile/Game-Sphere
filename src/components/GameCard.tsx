import { Card, Image } from "@chakra-ui/react";
import { type Game } from "../hooks/useGames";

interface Props {
  games: Game;
}

function GameCard({ games }: Props) {
  return (
    <Card.Root overflow="hidden">
      <Image src={games.background_image} />
      <Card.Body>
        <Card.Title>{games.name}</Card.Title>
        <Card.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
          alias.
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
