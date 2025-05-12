import useGenres from "@/hooks/useGenres";
import { HStack, Image, Link, Spinner, Text } from "@chakra-ui/react";

function GenresGrid() {
  const { data, isLoading } = useGenres();

  // console.log(data);

  return (
    <>
      {isLoading && <Spinner />}

      {data.map((genre) => (
        <HStack
          key={genre.id}
          mb="1rem"
          cursor={"pointer"}
          onClick={() => console.log(genre.games)}
        >
          <Image
            rounded="md"
            boxSize="40px"
            fit="cover"
            src={genre.image_background}
          />
          <Link ml={2}>{genre.name}</Link>
        </HStack>
      ))}
    </>
  );
}

export default GenresGrid;
