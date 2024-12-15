export type Movie = {
  id: string;
  episodeID: number;
  title: string;
  director: string;
  releaseDate: string;
  producers: string[];
};

export type MovieData = {
  allFilms: {
    films: Movie[];
  };
};
