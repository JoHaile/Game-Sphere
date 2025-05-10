import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

function CriticScore({ metacritic }: Props) {
  let color = metacritic >= 75 ? "green" : metacritic >= 50 ? "yellow" : "pink";

  return <Badge colorPalette={color}>{metacritic}</Badge>;
}

export default CriticScore;
