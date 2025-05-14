import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchGames from "./SearchGames";

interface Props {
  onGameSearch: (game: string) => void;
}

function NavBar({ onGameSearch }: Props) {
  return (
    <HStack mb="10px" px={{ base: "10px", lg: "30px" }}>
      <Image src={Logo} boxSize={{ base: "40px", md: "60px" }} />

      <Text
        textWrap={"nowrap"}
        mr={{ base: "5px", md: "1rem" }}
        textStyle={{ base: "2xs", md: "md" }}
      >
        Game Sphere
      </Text>

      <SearchGames onGameSearch={onGameSearch} />

      <ColorModeButton colorPalette={"green"} />
      {/* <Text mr={{ base: "5px", lg: "1rem" }}>Theme</Text> */}
    </HStack>
  );
}

export default NavBar;
