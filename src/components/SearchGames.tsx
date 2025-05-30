import { Button, Group, Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onGameSearch: (game: string) => void;
}

function SearchGames({ onGameSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onGameSearch(ref.current.value);
      }}
    >
      <Group width="100%">
        <InputGroup startElement={<FaSearch />}>
          <Input
            ref={ref}
            variant={"outline"}
            size={{ base: "xs", lg: "md" }}
            placeholder="Search Games.."
          />
        </InputGroup>

        <Button type="submit" colorPalette="green">
          Search
        </Button>
      </Group>
    </form>
  );
}

export default SearchGames;
