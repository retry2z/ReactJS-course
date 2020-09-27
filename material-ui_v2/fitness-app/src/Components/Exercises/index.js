import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

import Grid from '@material-ui/core/Grid';

const Exercises = () => {

    return (
        <Grid container>
            <Grid item xs={12} sm={4}>
                <LeftPanel />
            </Grid>

            <Grid item xs={12} sm={8}>
                <RightPanel />
            </Grid>
        </Grid>
    );
}

export default Exercises;
