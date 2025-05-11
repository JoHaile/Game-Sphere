import useGenres from "@/hooks/useGenres";

function GenresGrid() {
  const { data } = useGenres();

  return data.map((genre) => <li key={genre.id}>{genre.name}</li>);
}

export default GenresGrid;
