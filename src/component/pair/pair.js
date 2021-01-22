import {Grid, Paper} from "@material-ui/core";
import React from "react";

export const Pair = ({pair}) => {
    return (
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
            <Paper key={`paper-${pair}`} className="paper">{pair[0]} - {pair[1]}</Paper>
        </Grid>
    )
}