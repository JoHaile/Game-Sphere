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

  console.log(data && data[0].id);

  return (
    <>
      <Heading textAlign="center" mb={4}>
        Game Screenshots
      </Heading>
      <SimpleGrid columns={3} gap={3}>
        {data?.map((i) => <Image key={i.id} src={CroppedImage(i.image)} />)}
      </SimpleGrid>
    </>
  );
}

export default GameScreenshots;
