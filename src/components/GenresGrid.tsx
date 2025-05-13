import useGenres, { type Genre } from "@/hooks/useGenres";
import CroppedImage from "@/services/image-client";
import { HStack, Image, Link, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenresGrid({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading } = useGenres();

  return (
    <>
      {isLoading && <Spinner />}

      {data.map((genre) => (
        <HStack key={genre.id} mb="1rem">
          <Image
            rounded="md"
            boxSize="40px"
            fit="cover"
            // src={genre.image_background}
            src={CroppedImage(genre.image_background)}
          />
          <Link
            variant={selectedGenre?.id === genre.id ? "underline" : "plain"}
            colorPalette={selectedGenre?.id === genre.id ? "green" : ""}
            fontWeight={selectedGenre?.id === genre.id ? "medium" : "normal"}
            ml={2}
            onClick={() => {
              onSelectGenre(genre);
            }}
            cursor={"pointer"}
          >
            {genre.name}
          </Link>
        </HStack>
      ))}
    </>
  );
}

export default GenresGrid;
