import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from 'react-redux';
import { setSnackbar } from '../../redux/actions/snackbar';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2)
        }
    }
}));

const CustomizedSnackbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const snackbarOpen = useSelector(state => state.snackbar.snackbarOpen);
    const snackbarType = useSelector(state => state.snackbar.snackbarType);
    const snackbarMessage = useSelector(state => state.snackbar.snackbarMessage);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(setSnackbar(false, snackbarType, snackbarMessage));
    };

    console.log(snackbarMessage, snackbarOpen)

    return (
        < div className={classes.root} >
            {
                console.log(snackbarMessage, snackbarOpen)
            }
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert
                    elevation={6}
                    variant="filled"
                    onClose={handleClose}
                    color={snackbarType}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div >
    );
};

export default CustomizedSnackbar;
