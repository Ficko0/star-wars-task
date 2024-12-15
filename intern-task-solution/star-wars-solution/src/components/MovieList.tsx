import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../utils/movieQuery";
import Loader from "./Loader";
import Error from "./Error";
import { Movie, MovieData } from "../types/movie.type";
import { useState } from "react";
import FilterComponent from "./FilterComponent";
import SortingComponent from "./SortingComponent";
import MovieContainer from "./MovieContainer";
import Header from "./Header";
import PaginationComponent from "./PaginationComponent";

export default function MovieList() {
  const { loading, error, data } = useQuery<MovieData>(GET_MOVIES);
  const [filters, setFilters] = useState({ director: "", year: "" });
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 2;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChanges = (field: string, value: string) => {
    setFilters({ ...filters, [field]: value });
  };

  const handleSortFieldChange = (field: string) => {
    setSortField(field);
  };

  const handleSortOrderChange = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  let movies = [...(data?.allFilms?.films || [])];

  if (loading) return <Loader />;

  if (error) return <Error message={error.message} />;

  if (filters.director) {
    movies = movies?.filter((movie) =>
      movie.director.toLowerCase().includes(filters.director.toLowerCase())
    );
  }

  if (filters.year) {
    movies = movies?.filter((movie) =>
      movie.releaseDate.startsWith(filters.year)
    );
  }

  movies = movies?.sort((movieToCompare1: Movie, movieToCompare2: Movie) => {
    const firstMovie =
      sortField === "title"
        ? movieToCompare1.title
        : movieToCompare1.releaseDate;
    const secondMovie =
      sortField === "title"
        ? movieToCompare2.title
        : movieToCompare2.releaseDate;

    return sortOrder === "asc"
      ? firstMovie.localeCompare(secondMovie)
      : secondMovie.localeCompare(firstMovie);
  });

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = movies.length / moviesPerPage;

  return (
    <>
      <Header />
      <FilterComponent filters={filters} onFilterChange={handleFilterChanges} />
      <SortingComponent
        sortField={sortField}
        onSortFieldChange={handleSortFieldChange}
        sortOrder={sortOrder}
        onSortOrderChange={handleSortOrderChange}
      />
      <MovieContainer movies={currentMovies!} />
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
