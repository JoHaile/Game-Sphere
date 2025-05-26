import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchGames from "./SearchGames";
import { useNavigate } from "react-router";

interface Props {
  onGameSearch: (game: string) => void;
}

function NavBar({ onGameSearch }: Props) {
  const nav = useNavigate();

  return (
    <HStack mb="10px" px={{ base: "10px", lg: "30px" }} gap={3}>
      <Box
        display="flex"
        alignItems="center"
        pr="50px"
        cursor="pointer"
        onClick={() => nav("/")}
      >
        <Image src={Logo} boxSize={{ base: "40px", md: "60px" }} />
        <Text textWrap={"nowrap"} textStyle={{ base: "xs", lg: "md" }}>
          Game Sphere
        </Text>
      </Box>

      <SearchGames onGameSearch={onGameSearch} />

      <ColorModeButton colorPalette={"green"} />
    </HStack>
  );
}

export default NavBar;
