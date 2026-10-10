/* src.pages/homePage.jsx
   Home page: heading plus 
   the list of movies passed in as a prop.  
*/

import React, { useState, useEffect } from "react"; 
import Grid from "@mui/material/Grid";
import MovieList from "../components/movieList"; 

const HomePage = (props) => {
   
    const [movies, setMovies] = useState([]); 

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
        )
        .then((res) => res.json())
        .then((json) => {
            console.log(json) 

            return json.results; //movies are in the 'results' array 
        })
        .then((results) => {
            setMovies(results); // triggers a re-render with the loaded list 
        });
    }, []); 

    return (
    <Grid container>
        <Grid size={12}>
            <h1>HomePage</h1>
        </Grid>
        <Grid container>
        <MovieList movies={movies}></MovieList>
    </Grid>
    </Grid> 
    );
};

export default HomePage; 

