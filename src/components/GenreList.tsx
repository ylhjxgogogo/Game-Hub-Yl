import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
interface Props {
  onSelectGenre: (genreId: number) => void;
  selectGenreId: number | undefined;
}
const GenreList = ({ onSelectGenre, selectGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();
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
                  fontWeight={genre.id === selectGenreId ? "bold" : "normal"}
                  variant="link"
                  onClick={() => onSelectGenre(genre.id)}
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
