import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";

function NavBar() {
  return (
    <HStack>
      <Image src={Logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
}

export default NavBar;
