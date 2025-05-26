import NavBar from "@/components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";

function ErrorPages() {
  const error = useRouteError();
  return (
    <Box p={1} textAlign="center">
      <NavBar onGameSearch={(games) => games} />

      <Heading>Oops..</Heading>

      <Text>
        {isRouteErrorResponse(error)
          ? "404 Page not Found"
          : "unexpected error occurred"}
      </Text>
    </Box>
  );
}

export default ErrorPages;
