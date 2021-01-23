import {CircularProgress} from "@material-ui/core";
import React from "react";

export const Loading = ({display}) => {

    return (
        <CircularProgress color="inherit" className="loading" style={{display: display}}/>
    )
}
