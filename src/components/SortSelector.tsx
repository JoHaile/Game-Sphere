import { Button, Icon, Menu, MenuItem, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

function SortSelector() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" outline={"none"}>
          selector <Icon as={FaChevronDown} size={"sm"} />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItem value="relevance">relevance</MenuItem>
            <MenuItem value="pc">pc</MenuItem>
            <MenuItem value="playstation">playstation</MenuItem>
            <MenuItem value="xbox">xbox</MenuItem>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;
