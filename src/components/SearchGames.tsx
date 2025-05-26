import { Button, Group, Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

interface Props {
  onGameSearch: (game: string) => void;
}

function SearchGames({ onGameSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  // to navigate the user to the HomePage
  const nav = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onGameSearch(ref.current.value);
        nav("/");
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
