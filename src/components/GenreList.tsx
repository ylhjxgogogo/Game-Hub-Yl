import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  if (isLoading) return <GenreSkeleton />;
  if (error) return null;
  return (
    <List>
      {data.map((genre: Genre) => {
        return (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCropImageUrl(genre.image_background)}
              />
              <Text fontSize="large">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
