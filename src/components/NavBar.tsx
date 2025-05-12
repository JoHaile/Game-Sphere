import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

function NavBar() {
  return (
    <HStack mb="10px" px={{ base: "10px", lg: "30px" }}>
      <Image src={Logo} boxSize="60px" />
      <Text>Game Sphere</Text>
      <Spacer />
      <ColorModeButton colorPalette={"green"} />
    </HStack>
  );
}

export default NavBar;
