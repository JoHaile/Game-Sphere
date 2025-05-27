import useGame from "@/hooks/useGame";
import CroppedImage from "@/services/image-client";
import { Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router";

interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

function GameScreenshots() {
  const { slug } = useParams();
  const { data } = useGame<Screenshot[]>(`/games/${slug}/screenshots`);

  return (
    <>
      <Heading textAlign="center" mb={4}>
        Game Screenshots
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={3} px={3}>
        {data?.map((i) => <Image key={i.id} src={CroppedImage(i.image)} />)}
      </SimpleGrid>
    </>
  );
}

export default GameScreenshots;
