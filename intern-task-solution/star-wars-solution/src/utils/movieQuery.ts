import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query AllFilms {
    allFilms {
      films {
        episodeID
        title
        director
        producers
        releaseDate
      }
    }
  }
`;
