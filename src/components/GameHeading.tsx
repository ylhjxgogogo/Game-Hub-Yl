import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
type Props = {
  gameQuery: GameQuery;
};
const GameHeading = ({ gameQuery }: Props) => {
  //Games
  //Action Games
  //Xbox Games
  //Xbox Action Games
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery?.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
