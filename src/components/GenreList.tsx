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
  onSelectGenre: (genre: Genre) => void;
  selectGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (isLoading) return <GenreSkeleton />;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} marginX={7}>
        Genres
      </Heading>
      <List>
        {data.map((genre: Genre) => {
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
                  fontWeight={genre.id === selectGenre?.id ? "bold" : "normal"}
                  variant="link"
                  onClick={() => onSelectGenre(genre)}
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
