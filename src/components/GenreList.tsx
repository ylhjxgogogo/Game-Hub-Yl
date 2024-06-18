import useGenres, { Genre } from "../hooks/useGenres";
const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <ul>
      {data.map((genre: Genre) => {
        return <li key={genre.id}>{genre.name}</li>;
      })}
    </ul>
  );
};

export default GenreList;
