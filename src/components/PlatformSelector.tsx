import type { Platform } from "@/hooks/useGames";
import usePlatform from "@/hooks/usePlatform";
import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="outline"
          outline={"none"}
          size={{ base: "xs", lg: "md" }}
        >
          {selectedPlatform ? selectedPlatform?.name : "Platform"}
          <Icon as={FaChevronDown} size={"sm"} />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((plat) => (
              <Menu.Item
                key={plat.id}
                value={plat.name}
                cursor={"pointer"}
                onClick={() => onSelectPlatform(plat)}
              >
                {plat.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;
