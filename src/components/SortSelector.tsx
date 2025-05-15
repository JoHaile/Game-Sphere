import { Button, Icon, Menu, MenuItem, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

interface Props {
  onSortSelect: (value: string) => void;
  currentSortOrder: string;
}

function SortSelector({ onSortSelect, currentSortOrder }: Props) {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
    { value: "-released", label: "Release Date" },
    { value: "name", label: "Name" },
    // { value: "-updated", label: "New Updates" },
    // { value: "created", label: "Game Created" },
  ];
  const sortLabel = sortOrder.find((l) => l.value === currentSortOrder);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="outline"
          outline={"none"}
          size={{ base: "xs", lg: "md" }}
        >
          {currentSortOrder ? sortLabel?.label : "Relevance"}
          <Icon as={FaChevronDown} size={"sm"} />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrder.map((order) => (
              <MenuItem
                key={order.value}
                value={order.value}
                cursor={"pointer"}
                onClick={() => {
                  onSortSelect(order.value);
                }}
              >
                {order.label}
              </MenuItem>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;
