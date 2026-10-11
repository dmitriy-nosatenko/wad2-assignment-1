// src/components/movieCard/index.jsx
// Presentational card for a single movie.
// Input: props.movie - a TMDB movie object. 
// Output: an MUI Card with title, poster, date and rating.
// Buttons are currently not active. 

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router";

export default function MovieCard(props) {
    const movie = props.movie;
    return (
        <Card>
            {/* outer {} of sx -> JSX "run JS Here" like value={count}
                inner {} of sx -> JavaScript object { X: Y } holding the styles 
                Property name, written in camelCase (backgroundColor)*/}
            <CardHeader title={movie.title} sx={{ textWrap: "nowrap" }} />
        
        <CardMedia
            sx={{ height: 500 }}
            image={
                movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : img 
            }
        />
        <CardContent>
            {/* Two equal columns: release date on the left, rating on the right */}
            <Grid container>
                <Grid size={{ xs: 6 }}>

                    {/* Typography: variant controls how the text looks, 
                        component controls which HTML tag is produced */}
                    <Typography variant="h6" component="p">
                        <CalendarIcon fontSize="small"/>
                        {movie.release_date}
                    </Typography>
                </Grid>
                <Grid size={{ xs: 6 }}>
                    <Typography variant="h6" component="p">
                        <StarRateIcon fontSize="small"/>
                        {" "} {movie.vote_average}{" "} 
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={null}>
                <FavoriteIcon color="primary" fontSize="large"/>
            </IconButton>
            <Link to={`/movies/${movie.id}`}>
            <Button variant="outlined" size="medium" color="primary">
                More Info... 
            </Button>
            </Link>
        </CardActions>
        </Card>
    );
};