import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green.700" : score > 60 ? "yellow.700" : "";
  return (
    <>
      <Badge fontSize="14px" borderRadius="4px" paddingX={2} bg={color}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
