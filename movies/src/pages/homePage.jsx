/* src.pages/homePage.jsx
   Page component for the home route.
   Input: props.movies - an array of TMDB-style movie objects.
   Output: a full-width heading for now;the movie list is added later 
*/

import React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "../components/movieCard"; 

const HomePage = (props) => {
   
    const movies = props.movies; 

    return (
    <Grid container>
        <Grid size={12}>
            <h1>HomePage</h1>
        </Grid>
        {/* size={3}: a quarter of the 12-column width. */}
        <Grid size={3}>
            <MovieCard movie={movies[0]} />
        </Grid>
    </Grid>
    );
};

export default HomePage; 

