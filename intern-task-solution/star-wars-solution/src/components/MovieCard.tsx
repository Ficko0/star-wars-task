import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../utils/movieQuery";
import { Movie } from "../types/movie.type";
import Loading from "./Loader";
import Error from "./Error";

export default function MovieCard() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <Loading />;
  if (error) return <Error error={error.message} />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 text-center">
      {data.allFilms.films.map((movie: Movie) => (
        <div
          className="bg-gray-200 px-5 py-5 rounded-lg hover:bg-gray-300 transition hover:cursor-default"
          key={movie.episodeID}
        >
          <h1 className="font-bold text-2xl py-2">Title: {movie.title}</h1>
          <span className="font-semibold text-xl py-2">
            Director: {movie.director}
          </span>
          <div className="flex flex-col">
            <span className="text-red-500 font-semibold text-center">
              Producers: {movie.producers.join(", ")}
            </span>
            <span className="font-light pt-2">
              Release Date: {movie.releaseDate}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
