import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    '@global': {
        'html, body, #root': {
            height: '100%',
        }
    },

    container: {
        height: '100%'
    },
}));

const Main = ({ children }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item xs={false} sm={1} />

            <Grid item sm>
                {children}
            </Grid>

            <Grid item xs={false} sm={1} />
        </Grid>
    );
}

export default Main;
