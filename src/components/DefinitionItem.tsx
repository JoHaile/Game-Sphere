import { Box, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  term: String;
  children: ReactNode | ReactNode[];
}

function DefinitionItem({ term, children }: Props) {
  return (
    <Box>
      <Heading color="gray.600" as={"dt"}>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
