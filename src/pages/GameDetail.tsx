import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import Screenshot from "../components/GameScreenshot";
const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <Box>
          {" "}
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </Box>
        <Box>
          {" "}
          <GameTrailer gameId={game.id} />
          <Box marginY="20px">
            <Screenshot gameId={game.id} />
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GameDetail;
