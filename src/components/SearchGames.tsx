import { Input, InputGroup } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onGameSearch: (game: string) => void;
}

function SearchGames({ onGameSearch }: Props) {
  return (
    <InputGroup startElement={<FaSearch />}>
      <Input
        variant={"outline"}
        size={{ base: "xs", lg: "md" }}
        placeholder="Search Games.."
        onChange={(e) => onGameSearch(e.target.value)}
      />
    </InputGroup>
  );
}

export default SearchGames;
