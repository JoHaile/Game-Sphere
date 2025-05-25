import { Image, Text } from "@chakra-ui/react";
import bullseye from "../assets/Emojis/bulls-eye.webp";
import thumbsUp from "../assets/Emojis/thumbs-up.webp";
import meh from "../assets/Emojis/meh.webp";

interface Props {
  rating: number;
}

function Rating({ rating }: Props) {
  const emojis =
    rating === 5 ? (
      <Image src={bullseye} boxSize={35} />
    ) : rating === 4 ? (
      <Image src={thumbsUp} boxSize={30} />
    ) : rating === 4 ? (
      <Image src={meh} boxSize={35} />
    ) : (
      ""
    );
  return <Text>{emojis}</Text>;
}

export default Rating;
