import useGenres, { type Genre } from "@/hooks/useGenres";
import CroppedImage from "@/services/image-client";
import { HStack, Image, Link, Spinner } from "@chakra-ui/react";
import imagePlaceholder from "../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenresGrid({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <>
      {isLoading && <Spinner />}

      {data.map((genre) => (
        <HStack key={genre.id} mb="1rem">
          <Image
            rounded="md"
            boxSize={{ base: "30px", lg: "40px" }}
            fit="cover"
            src={
              genre.image_background
                ? CroppedImage(genre.image_background)
                : imagePlaceholder
            }
          />
          <Link
            variant={selectedGenre?.id === genre.id ? "underline" : "plain"}
            colorPalette={selectedGenre?.id === genre.id ? "green" : ""}
            fontWeight={selectedGenre?.id === genre.id ? "medium" : "normal"}
            cursor={"pointer"}
            ml={2}
            _hover={{
              color: "#86efac",
            }}
            onClick={() => onSelectGenre(genre)}
          >
            {genre.name}
          </Link>
        </HStack>
      ))}
    </>
  );
}

export default GenresGrid;
