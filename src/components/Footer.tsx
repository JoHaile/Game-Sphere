import { HStack, Spacer, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <footer>
      <HStack padding={5} color="gray.400">
        <Text>Developed By Yohannes Haile.</Text>
        <Spacer />
        <Text>©2025 All Right Reserved</Text>
      </HStack>
    </footer>
  );
}

export default Footer;
