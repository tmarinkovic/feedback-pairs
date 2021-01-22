import { Snackbar} from "@material-ui/core";
import React from "react";
import {Alert} from "@material-ui/lab";

export const Notification = ({notification, setNotification}) => {

    const handleClose = () => {
        setNotification(false,"")
    };

    return (
        <Snackbar className="notification" onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} autoHideDuration={3000} open={notification.show} >
            <Alert onClose={handleClose} severity="info">
                {notification.text}
            </Alert>
        </Snackbar>
    )
}