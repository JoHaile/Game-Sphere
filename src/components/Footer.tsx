import { HStack, Spacer, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <footer>
      <HStack height="100px" padding={5} color="gray.400">
        <Text>Developed By Yohannes Haile.</Text>
        <Spacer />
        <Text>CopyRight © 2025</Text>
      </HStack>
    </footer>
  );
}

export default Footer;
