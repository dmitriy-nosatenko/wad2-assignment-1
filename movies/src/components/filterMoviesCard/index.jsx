//src/components/filterMoviesCard/index.jsx
//Input: props
//Output: an MUI card containing the 2 inputs and a decorative image.

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from "../../images/pexels-dziana-hasanbekava-5480827.jpg"; 

//Shared style for both inputs: defined once, spread into search 'sx' prop below
//Component -> Card -> CardContent -> typography/ textfield/ **formcontrol** -> inputLabel & select -> MenuItem x3 

const formControl = {
    margin: 1, 
    minWidth: "90%",
    backgroundColor: "rgb(255, 255, 255)",
};

export default function FilterMoviesCard(props) {
    const [genres, setGenres] = useState([{ id: "0", name: "All"}]);

    //Runs once after the first render; loads the genre list from TMDB.

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
            import.meta.env.VITE_TMDB_KEY 
        )
        .then((res) => res.json())
        .then((json) => {
            console.log(json.genres)
        })
        .then((apiGenres) => {
            //Keep 'All' first, then the genres from the API. 
            setGenres([genres[0], ...apiGenres]);
        }); 
    }, []); 

    /**
     * type = which input changed ("name" or "genre"); 
     * value = what the user entered. 
     */

    const handleChange = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
        //prevents the page from fully reloading after input & enter
    };

    const handleTextChange = (e) => {
        handleChange(e, "name", e.target.value);
    };

    const handleGenreChange = (e) => {
        handleChange(e, "genre", e.target.value); 
    }
    return (
        <Card sx={{ backgroundColor: "rgb(204, 204, 0)" }}
        variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h1">
                    <SearchIcon fontSize="large"/>
                    Filter the movies. 
                </Typography>

                {/* Search Box */}
                <TextField
                sx={{ ...formControl }}
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
                value={props.titleFilter}
                onChange={handleTextChange}  
                />

                {/* Dropdown: labelId must match
                    the InputLabel id so the label is linked
                    to the select.  */}
                    <FormControl sx={{ ...formControl }}>
                        <InputLabel id="genre-label">Genre</InputLabel>
                        <Select 
                        labelId="genre-label" 
                        id="genre-select"
                        defaultValue=""
                        value={props.genreFilter}
                        onChange={handleGenreChange} 
                        >
                            {/* One MenuItem per genre,
                                built at runtime with map;
                                key is the genre id. */}
                                {genres.map((genre) => {
                                    return (
                                        <MenuItem key={genre.id} value={genre.id}>
                                            {genre.name}
                                        </MenuItem>
                                    );
                                })}
                        </Select>
                    </FormControl>
            </CardContent>
            <CardMedia sx={{ height: 300 }} image={img} title="Filter"/>
            <CardContent>
                <Typography variant="h5" component="h1">
                    <SearchIcon fontSize="large"/>
                    Filter the movies. 
                    <br/>
                </Typography>
            </CardContent>
        </Card>
    );
}