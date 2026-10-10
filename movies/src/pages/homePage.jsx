/* src.pages/homePage.jsx
   Home page: heading, filter card and movie list in one responsive grid.
   Input: 
   Output: the page layout. 
*/

import React, { useState, useEffect } from "react"; 
import Grid from "@mui/material/Grid";
import MovieList from "../components/movieList"; 
import Header from "../components/headerMovieList";
import FilterCard from "../components/filterMoviesCard";

const HomePage = (props) => {
   
    const [movies, setMovies] = useState([]); 
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0"); 

    // The dropdown value is a string; TMDB genre idss are numbers. 
    const genreId = Number(genreFilter);

    // Derived data: recomputed on every render, not stored in state.
    let displayedMovies = movies
    .filter((m) => {
        //keep movies whose title contains the typed text

        return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
        //genre 0 = no genre filtering; otherwise keep movies tagged with that genre
        return genreId > 0 ? m.genre_ids.includes(genreId) : true; 
    }); 

    /*called by the filter card: 
     'type' says which filter changed. 
    */

    const handleChange = (type, value) => {
        if (type === "name") setNameFilter(value);
        else setGenreFilter(value);
    }

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
           <Header title={"Home Page"} /> 
        </Grid>
        <Grid container sx={{ flex: "1 1 500px" }}>
            <Grid key="fing" size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2}}
                               sx={{ padding: "20px"}}>
                                <FilterCard
                                 onUserInput={handleChange}
                                 titleFilter={nameFilter}
                                 genreFilter={genreFilter}
                                 /> 
                               </Grid>
        <MovieList movies={displayedMovies} />
    </Grid>
    </Grid> 
    );
};

export default HomePage; 

