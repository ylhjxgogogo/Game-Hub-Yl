import { Text, SimpleGrid, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import Game from "../entities/Game";
import { Fragment } from "react/jsx-runtime";
import InfiniteScroll from "react-infinite-scroll-component";
const GameGrid = () => {
  const { error, data, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  //提前计算好我们已经拿到的数据
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => {
      return total + page.results.length;
    }, 0) || 0;
  return (
    <InfiniteScroll
      next={() => fetchNextPage()}
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => {
          return (
            <Fragment key={index}>
              {page?.results.map((game: Game) => {
                return (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game}></GameCard>
                  </GameCardContainer>
                );
              })}
            </Fragment>
          );
        })}
      </SimpleGrid>
      {/* {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading ..." : "Load more"}
          </Button>
        )} */}
    </InfiniteScroll>
  );
};

export default GameGrid;
