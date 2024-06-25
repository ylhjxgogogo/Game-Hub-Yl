import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <Box marginX={-2} marginY={8}>
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Box>
      </Show>
      <GridItem area="main">
        <Box paddingX={10}>
          <GameHeading />
          <HStack spacing={10}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
