import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

function NavBar() {
  return (
    <HStack mb="10px" mx={5}>
      <Image src={Logo} boxSize="60px" />
      <Text>Game Sphere</Text>
      <Spacer />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
