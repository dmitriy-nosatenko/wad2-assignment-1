/**
 * src//movieDetails/index.jsx
 * Details panel for one movie: overview, genres and key facts.
 * Input: props.movie - a TMDB movie-details object (overview, genres, runtime, revenue....
 * Output: a fragment with text, two chip rows and a floating Reviews button)
 */

import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";

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
    
    return (
        <div>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>
            <Typography variant="h6" component="p">
            {movie.overview}
            </Typography>

            {/**
             * Genre chips:
             * A list at runtime, one <li> per genre.
             */
             }
             <Paper component="ul" sx={{ ...root }}>
                <li>
                    <Chip label="Genres" sx={{ ...chip }} color="primary"/>
                </li>
                {movie.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} sx={{ ...chip }} />
                    </li>
                ))}
             </Paper>

             <Paper component="ul" sx={{ ...root }}>
                <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} minor.`}
                />
                <Chip icon={<MonetizationIcon />} label=
                {`${movie.revenue.toLocaleString()}`}/> 
                <Chip label={`Released: ${movie.release_date}`}/>
             </Paper>

             <Fab color="secondary" variant="extended" sx={{ position:
                "fixed", bottom: 2, right: 2 }}>
                    <NavigationIcon/>
                    Reviews 
                </Fab>
                </div> 
    );
};

export default MovieDetails; 