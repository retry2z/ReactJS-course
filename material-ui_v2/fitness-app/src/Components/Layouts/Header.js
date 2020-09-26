import React from 'react';

import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Create from '../Dialogs/Create';
import { Grid } from '@material-ui/core';

const useStyle = makeStyles({
    userPanel: {
        flex: 1,
    }
})

const Header = () => {
    const classes = useStyle();

    return (
        <AppBar position='static'>
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography variant='h4'>
                            Fitness
                    </Typography>
                    </Grid>

                    <Grid item>
                        <Create />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
