import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query AllFilms {
    allFilms {
      films {
        id
        episodeID
        title
        director
        producers
        releaseDate
      }
    }
  }
`;
