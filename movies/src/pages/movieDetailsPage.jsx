/**
 * src/pages/movieDetailsPage.jsx
 * Input: props.movie - movie-details object;
 * props.images - array of poster file names. 
 * Output: header, image strip and details, or a writing message
 * if there is no movie yet.
 */

import React, { useState, useEffect } from "react";      
import MovieHeader from "../components/headerMovie/";
import MovieDetails from "../components/movieDetails/";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useParams } from 'react-router';
import { getMovie, getMovieImages } from "../api/tmdb-api";

const MoviePage = (props) => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [images, setImages] = useState([]); 

    useEffect(() => {
        getMovie(id).then((movie) => {
            setMovie(movie);
        });
        }, [id]); 

    useEffect(() => {
        getMovieImages(id).then((images) => {
            setImages(images);
        })
        }, []) 

    return (
        <div>
            {movie ? ( 
                <div>
                    <MovieHeader movie={movie}/>
                    <Grid container spacing={5} style={{ padding: "15px" }}>
                        <Grid size={{ xs: 3 }}>
                            <div sx={{ display: "flex", flexWrap: "wrap",
                                       justifyContent: "space-around" 
                             }}>
                                <ImageList 
                                sx={{
                                    height: "100vh",
                                }}
                                cols={1}
                                >
                                    {images.map((image) => (
                                        <ImageListItem
                                        key={image.file_path}
                                        cols={1}
                                        >
                                            <img
                                            src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                            alt={image.file_path}
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                             </div>
                        </Grid>
                        <Grid size={{ xs: 9}}>
                            <MovieDetails movie={movie}/>
                        </Grid>
                    </Grid>
                    </div> 
             ) : (
                <h2>Waiting for API data</h2>
             )}
        </div>
    );
};

export default MoviePage; 