/**
 * src/pages/movieDetailsPage.jsx
 * Input: props.movie - movie-details object;
 * props.images - array of poster file names. 
 * Output: header, image strip and details, or a writing message
 * if there is no movie yet.
 */

import React from "react";
import { useParams } from 'react-router';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";

const MoviePage = (props) => {
  const { id } = useParams();
  const [movie] = useMovie(id);

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
