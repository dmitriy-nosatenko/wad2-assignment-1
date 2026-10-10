/**
 * src/components/movieDetails/index.jsx
 * Details panel for one movie: overview, genres and key facts.
 * Input: props.movie - a TMDB movie-details object (overview, genres, runtime, revenue....
 * Output: a fragment with text, two chip rows and a floating Reviews button)
 */

import React from "react";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0, 
}; 

const chip = { margin: 0.5 };

const MovieDetails = (props) => {
    const movie = props.movie; 
    
    
}