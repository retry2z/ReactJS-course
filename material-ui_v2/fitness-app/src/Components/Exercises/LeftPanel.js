import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    item: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
    }
})

const LeftPanel = () => {
    const classes = useStyles();

    return (
        <Grid item sm>
            <Paper className={classes.item}>
                <h1>Panel</h1>
            </Paper>
        </Grid>
    );
}

export default LeftPanel;
