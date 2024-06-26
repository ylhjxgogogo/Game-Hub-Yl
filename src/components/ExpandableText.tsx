import { useState } from "react";
import { Text, Button } from "@chakra-ui/react";
interface Props {
  children: string;
}
const ExpandableText = ({ children: text }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!text) return null;
  if (text.length <= limit) {
    return <Text>{text}</Text>;
  }
  const summary = expanded ? text : text.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpanded(!expanded)}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={2}
      >
        {expanded ? "Show less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
