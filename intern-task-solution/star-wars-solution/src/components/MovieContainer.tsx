import { format } from "date-fns";
import { Movie } from "../types/movie.type";
import Error from "./Error";

type MovieContainerProps = {
  movies: Movie[];
};

export default function MovieContainer({ movies }: MovieContainerProps) {
  if (!movies || movies.length === 0) {
    return <Error message="No movies available!" />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 my-10">
      {movies.map((movie: Movie) => (
        <div className="bg-gray-200 px-4 py-2 place-items-center text-center rounded-lg hover:bg-gray-300 transition cursor-default">
          <h1 className="font-bold text-3xl py-2">{movie.title}</h1>
          <div className="flex flex-col">
            <span className="font-semibold text-xl">
              Director: {movie.director}
            </span>
            <span className="font-medium text-lg">
              Producers: {movie.producers.join(", ")}
            </span>
          </div>
          <br />
          <p className="font-bold">
            Release Year: {format(new Date(movie.releaseDate), "MMMM d, yyyy")}
          </p>
        </div>
      ))}
    </div>
  );
}
