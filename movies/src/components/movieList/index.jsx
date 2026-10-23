/*
src/components/movieList/index.jsx
Renders one MovieCard per movie, laid out in a responsive grid. 
Input: props.movies - array of TMDB movie objects. 
Output: an array of Grid items, one per movie. 
*/

import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";

const MovieList = (props) => {
    //key goes in the outermost element of each item.
    //size = columns out of 12 at each breakpoint: xs 12 -> 1 card per row

    let movieCards = props.movies.map((m) => (
        <Grid key={m.id} 
        size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
        sx={{ padding: "20px" }}>
            <Movie key={m.id} movie={m} action={props.action} />
        </Grid>
    ));     
    
    return movieCards; 
    }; 

    export default MovieList; 
