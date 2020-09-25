import React from 'react';

import Grid from '@material-ui/core/Grid';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Exercises = () => {

    return (
        <Grid container>
            <LeftPanel />
            <RightPanel />
        </Grid>
    );
}

export default Exercises;
