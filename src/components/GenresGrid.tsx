import useGenres from "@/hooks/useGenres";
import { Spinner } from "@chakra-ui/react";

function GenresGrid() {
  const { data, isLoading } = useGenres();

  return (
    <>
      {isLoading && <Spinner />}

      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </>
  );
}

export default GenresGrid;
