import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

function ExpandibleText({ text }: Props) {
  const [isExpand, setExpand] = useState(false);
  const LIMIT = 350;

  if (text.length <= LIMIT) return text;

  const summary = isExpand ? text : text.substring(0, LIMIT) + "...";

  return (
    <>
      {summary}
      <Button
        colorPalette="green"
        size="xs"
        onClick={() => setExpand(!isExpand)}
        ml={3}
      >
        {isExpand ? "Show less" : "Read More"}
      </Button>
    </>
  );
}

export default ExpandibleText;
