import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
interface Props {
  gameId: number;
}
const Screenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (!data) return null;
  if (isLoading) return <Spinner />;
  if (error) throw error;
  const results = data?.results;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {results?.map((file) => (
        <Image src={file.image} key={file.id} />
      ))}
    </SimpleGrid>
  );
};

export default Screenshot;
