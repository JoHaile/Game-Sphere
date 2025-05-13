import useGenres, { type Genre } from "@/hooks/useGenres";
import CroppedImage from "@/services/image-client";
import { HStack, Image, Link, Spinner } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function GenresGrid({ onSelectGenre }: Props) {
  const { data, isLoading } = useGenres();
  const [genreId, setGenreId] = useState<number>();

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
            variant={genreId === genre.id ? "underline" : "plain"}
            colorPalette={genreId === genre.id ? "teal" : ""}
            ml={2}
            onClick={() => {
              onSelectGenre(genre);
              setGenreId(genre.id);
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
