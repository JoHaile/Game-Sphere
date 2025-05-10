import type { Platform } from "@/hooks/useGames";
import { Box, HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { BsNintendoSwitch } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaGlobe,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

interface Props {
  platform: Platform[];
}

function PlatformList({ platform }: Props) {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: BsNintendoSwitch,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: FaGlobe,
  };
  return (
    <HStack color="gray.400" my={"10px"}>
      {platform.map((plat) => {
        return <Icon key={plat.id} as={iconsMap[plat.slug]}></Icon>;
      })}
    </HStack>
  );
}

export default PlatformList;
