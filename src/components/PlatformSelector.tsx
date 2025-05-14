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

  //! for some reason these platforms id don't work
  const linux = 6,
    atari = 9,
    commodore = 10,
    sega = 11,
    deo = 12,
    neo = 13;

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" outline={"none"}>
          {selectedPlatform ? selectedPlatform?.name : "Platform"}
          <Icon as={FaChevronDown} size={"sm"} />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map(
              (plat) =>
                plat.id !== linux &&
                plat.id !== atari &&
                plat.id !== sega &&
                plat.id !== neo &&
                plat.id !== deo &&
                plat.id !== commodore && (
                  <Menu.Item
                    key={plat.id}
                    value={plat.name}
                    cursor={"pointer"}
                    onClick={() => onSelectPlatform(plat)}
                  >
                    {plat.name}
                  </Menu.Item>
                )
            )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;
