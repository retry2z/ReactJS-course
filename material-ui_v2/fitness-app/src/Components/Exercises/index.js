import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
    },
    item: {
        [theme.breakpoints.up('sm')]: {
            marginTop: 5,
            height: 'calc(100% - 64px - 78px - 5px)',
        },
        [theme.breakpoints.down('xs')]: {
            height: '50%',
        },
    }
}));

const Exercises = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item
                className={classes.item}
                xs={12} sm={6}
            >
                <LeftPanel />
            </Grid>

            <Grid item
                className={classes.item}
                xs={12} sm={6}
            >
                <RightPanel />
            </Grid>
        </Grid>
    );
}

export default Exercises;
