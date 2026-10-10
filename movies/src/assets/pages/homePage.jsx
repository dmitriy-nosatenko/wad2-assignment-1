/* src.pages/homePage.jsx
   Page component for the home route.
   Input: props.movies - an array of TMDB-style movie objects.
   Output: a full-width heading for now;the movie list is added later 
*/

import React from "react";
import Grid from "@mui/material/Grid";

const HomePage = (props) => {
    //Movie list passed in by the parent. Not rendered yet.
    const movies = props.movies; 

    return (
        // 'container makes this Grid a flex container for the items inside it.'
        <Grid container>
            {/* size={12}; all 12 columns, i.e. the full width */}
            <Grid size={12}>
                <h1> HomePage </h1>
            </Grid>
        </Grid>
    );
};

export default HomePage; 

