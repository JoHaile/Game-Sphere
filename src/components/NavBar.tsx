import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

function NavBar() {
  return (
    <HStack mb="10px">
      <Image src={Logo} boxSize="60px" />
      <Text>NavBar</Text>
      <Spacer />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
