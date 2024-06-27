import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import Genre from "../entities/Genre";
import getCropImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import useGameQueryStore from "../store/strore";
const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  if (isLoading) return <GenreSkeleton />;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} marginX={7}>
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre: Genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCropImageUrl(genre.image_background)}
                  objectFit="cover"
                />
                <Button
                  fontWeight={genre.id === genreId ? "bold" : "normal"}
                  variant="link"
                  onClick={() => setGenreId(genre.id)}
                  whiteSpace="normal"
                  textAlign="left"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
