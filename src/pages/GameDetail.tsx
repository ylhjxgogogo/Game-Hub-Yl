import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { HStack, Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) return "error";
  console.log(game.description_raw.length);
  let canShow;
  let restChar;
  const flag = game.description_raw.length > 300;
  if (flag) {
    canShow = game.description_raw.slice(0, 301);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    restChar = game.description_raw.slice(301);
  }

  console.log(canShow);
  return (
    <>
      <Heading>{game.name}</Heading>
      <HStack>
        {" "}
        <ExpandableText>{game.description_raw}</ExpandableText>
      </HStack>
    </>
  );
};

export default GameDetail;
