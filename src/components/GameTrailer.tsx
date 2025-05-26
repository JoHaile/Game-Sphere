import useGame from "@/hooks/useGame";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

function GameTrailer() {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame<Trailer[]>(
    `/games/${slug}/movies`
  );
  // console.log(data);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      {data?.map(
        (g, index) =>
          index === 0 && (
            <video key={g.id} src={g.data[480]} controls poster={g.preview} />
          )
      )}
    </>
  );
}

export default GameTrailer;
