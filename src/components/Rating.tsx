import { Text } from "@chakra-ui/react";
import { FaBullseye } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaMeh } from "react-icons/fa";

interface Props {
  rating: number;
}

function Rating({ rating }: Props) {
  const emojis =
    rating === 5 ? (
      <FaBullseye color="#86efac" />
    ) : rating === 4 ? (
      <FaRegThumbsUp color="#c6a824" />
    ) : rating === 4 ? (
      <FaMeh color="gray" />
    ) : (
      ""
    );
  return <Text>{emojis}</Text>;
}

export default Rating;
