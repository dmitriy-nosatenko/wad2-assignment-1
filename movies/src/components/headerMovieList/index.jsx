/**
 * Page header: a title between a back and a forward arrow button
 * Input: props.title - the text to display
 * Output: an MUI Paper row with 2 arrow buttons 
 */

import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const Header = (props) => {
    const title = props.title;
    return (

        <Paper
            component="div"
            sx={{
                display: "flex",
                justifyContent: "space-arounf",
                flexWrap: "wrap",
                marginBottom: 1.5,
            }}
        >
            <IconButton aria-label="go-back">
                <ArrowBackIcon color="primary" fontSize="large"/>
            </IconButton>

            <Typography variant="h4" component="h3">
                {title} 
            </Typography>
            <IconButton aria-label="go forward">
                <ArrowForwardIcon color="primary" fontSize="large"/>
            </IconButton>
            </Paper>
    );
};

export default Header; 